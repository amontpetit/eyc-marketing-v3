import React from 'react'

class StockTicker extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            StockData: null,
            RefreshedAt: null,
            Symbol: null,
            Latest: null,
            Volume: null,
            ChangeAmt: null,
            ChangePerc: null,
            MarketCap: null,
            Sign: '+',
            Outstanding: 79000000
        };
    }

    componentDidMount() {
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EYC&interval=1min&apikey=WPL3BJFK7BFY2XM5')
        .then(results => {
            return results.json();
        }).then(data => {
            if (!data || data.length <= 0 || data == null || data['Error Message'])
            {
                console.log('Error! Encountered an error retrieving data.');
                return Promise.reject('Data unavailable');
            }
            else
            {
                console.log(data);
                this.setState({
                    StockData: data
                }, (state) => {
                    //Set the MetaData
                    var MetaData = this.state.StockData[Object.keys(this.state.StockData)[0]];
                    this.setState({
                        RefreshedAt: MetaData[Object.keys(MetaData)[2]],
                        Symbol: MetaData[Object.keys(MetaData)[1]]
                    });

                    //Get the Latest
                    var LatestValues = this.state.StockData[Object.keys(this.state.StockData)[1]][Object.keys(this.state.StockData[Object.keys(this.state.StockData)[1]])[0]];
                    var latestNum = LatestValues[Object.keys(LatestValues)[3]];
                    this.setState({
                        Latest: '$'+latestNum.slice(0, -2),
                        Volume: (LatestValues[Object.keys(LatestValues)[4]])/1000
                    });

                    //Calculate Market Cap
                    this.setState({
                        MarketCap: (latestNum * this.state.Outstanding) / 1000000
                    });

                    //Calculate Change Amount and %
                    var open = LatestValues[Object.keys(LatestValues)[0]];
                    var close = latestNum;

                    var changeAmtRaw = close - open;
                    var changePercRaw = ((open - close) * 100) / open;
                    this.setState({
                        ChangeAmt: Math.abs(Round(changeAmtRaw, 2)),
                        ChangePerc: Round(changePercRaw, 2)
                    });

                    if (close < open)
                    {
                        this.setState({
                            Sign: '-'
                        });
                    }
                });
            }
        })
    }
    
    render(){
        if (!this.state.StockData)
        {
            return(
                <div>
                    <p id="stock-info-error">Stock data is currently unavailable <br/> View on <a href="https://web.tmxmoney.com/quote.php?qm_symbol=eyc" target="_blank">TMX</a></p>
                </div>
            )
        }
        else return(
            <div>
                <table id="stock-info">
                    <tbody>
                        <tr>
                            <td>
                                {this.state.Latest}<br/>
                                <span className="stock-legend">{this.state.RefreshedAt}</span>
                            </td>
                            <td>
                                {this.state.Volume}K<br/>
                                <span className="stock-legend">Volume</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.state.Sign}${this.state.ChangeAmt} ({this.state.Sign}{this.state.ChangePerc}%)<br/>
                                <span className="stock-legend">Change</span>
                            </td>
                            <td>
                                ${this.state.MarketCap}M<br/>
                                <span className="stock-legend">Market Cap</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="currency-disclaimer">Currency in CAD</div>
            </div>
        )
    }
}

function Round(value, decimals){
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export default StockTicker