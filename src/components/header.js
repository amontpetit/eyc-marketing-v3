import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {
  render() {
    return (
      <header id="mainheader">
        <div id="header-logo">
          <Link to="/">
            <img src="https://www.eyecarrot.com/wp-content/uploads/EC-Logo_Horizontal.png"/>
          </Link>
        </div>
        <div id="header-navigation">
          <ul id="header-navigation-list">
            <Link to="/about"><li className="header-navigation-listitem">About</li></Link>
            <Link to="/invest"><li className="header-navigation-listitem">Invest with Eyecarrot</li></Link>
            <Link to="/news"><li className="header-navigation-listitem">News + Blog</li></Link>
            <Link to="/products"><li className="header-navigation-listitem">Products</li></Link>
            <Link to="/contact"><li className="header-navigation-listitem">Contact Us</li></Link>
          </ul>
        </div>
        <div id="header-navigation-small">
          <button id="header-navigation-small-trigger" onClick={ToggleSmallNavigation}>
            <i className="fa fa-navicon" id="header-navigation-small-trigger-icon"></i>
          </button>
          <ul id="header-navigation-list-small">
            <Link to="/about"><li className="header-navigation-listitem-small">About</li></Link>
            <Link to="/invest"><li className="header-navigation-listitem-small">Invest with Eyecarrot</li></Link>
            <Link to="/news"><li className="header-navigation-listitem-small">News + Blog</li></Link>
            <Link to="/products"><li className="header-navigation-listitem-small">Products</li></Link>
            <Link to="/contact"><li className="header-navigation-listitem-small">Contact Us</li></Link>
          </ul>
        </div>
      </header>
    )
  }
}

function ToggleSmallNavigation(){
  const nav = document.getElementById('header-navigation-list-small');
  if (nav.classList.contains('visible'))
  {
    nav.classList.toggle('visible');
    setTimeout(function(){ nav.classList.toggle('block'); }, 200);
  }
  else
  {
    nav.classList.toggle('block');
    setTimeout(function(){ nav.classList.toggle('visible'); }, 50);
  }
}

document.addEventListener('click', function(){
  if (document.getElementById('header-navigation-list-small').classList.contains('visible'))
  {
    ToggleSmallNavigation();
  }
});


export default Header