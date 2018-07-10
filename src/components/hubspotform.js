import React from 'react'
import Link from 'gatsby-link'

class HubspotForm extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        const setFormId = this.props.formId;
        var targetdiv = null;
        if (this.props.isFooter)
        {
            targetdiv = '#footer-contact-form';
        }
        else
        {
            targetdiv = '#hubspot-contact-form';
        }
        console.log(setFormId);
        
        script.addEventListener('load', () => {
            if(window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '2057970',
                    formId: setFormId,
                    css: '',
                    target: targetdiv
                })
            }
        });
    }
    
      render() {
        if (this.props.isFooter){
            return(
                <div id="footer-contact-form"></div>
            );
        }
        else
        {
            return (
                <div className="hubspotform" id="hubspot-contact-form"></div>
            );
        }
        
    }
  }

  export default HubspotForm