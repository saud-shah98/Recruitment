import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span><img src="https://www.pikes.org/~/media/gallery%20-%20logos%20and%20icons/badge/badge_bw-webres.ashx" width="60" height="80" alt="Stickman"  /> </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Pi Kappa Alpha</h1>
        <p>
          Lambda Chi Chapter
          <br />
          Virginia Commonwealth University
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            RUSH
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            FC 2021
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Executive
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
