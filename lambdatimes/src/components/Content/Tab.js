import React from 'react'
import PropTypes from 'prop-types'

const Tab = (props) => {
  /* Using your props, determine if this tab is selected, if it is, the className
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  let className = 'tab'
  if (props.tab === props.selectedTab) className = 'tab active-tab'
  return (
    <div
      className={className}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props */
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}
export default Tab
