import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        DARK SIDE OF THE
        <span style={{ color: '#FF0000' }}> $</span>
        <span style={{ color: '#FFAA00' }}>R</span>
        <span style={{ color: '#AAFF00' }}>A</span>
        <span style={{ color: '#00FF00' }}>I</span>
        <span style={{ color: '#00FFAA' }}>N</span>
        <span style={{ color: '#00AAFF' }}>B</span>
        <span style={{ color: '#0000FF' }}>O</span>
        <span style={{ color: '#AA00FF' }}>W</span>
        <span style={{ color: '#FF00AA' }}>S</span>
      </h1>
      <h4>A Noundle Theory companion site</h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
