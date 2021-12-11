
import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const CardLayout = ({ children, icon, title, metric, link }) => {

  return (
    <div style={cardStyles}>
      {children}
    </div>
  )
}

const cardStyles = {
  background: '#FDDDEC',
  color: 'black',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  opacity: .9
}

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string,
  metric: PropTypes.string,
  link: PropTypes.string
}

export default CardLayout
