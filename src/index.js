import React from 'react'
// import PropTypes from 'prop-types'

import Scroller from './container/Scroller'

function ExampleComponent({ 
  data=[], 
  mobileViewThreshold=450, 
  heading="Choose",
  onSelectedDataChange=()=>undefined,
 }) {


  return (
    <Scroller heading={heading} data={data} mobileViewThreshold={mobileViewThreshold} onSelectedDataChange={data => onSelectedDataChange(data)} />
  )
}


export default ExampleComponent