import React from 'react'
// import PropTypes from 'prop-types'

import Scroller from './container/Scroller'

function ExampleComponent({ data, scrollTolrence, onSelectedDataChange }) {


  return (
    <Scroller data={data} scrollTolrence={scrollTolrence} onSelectedDataChange={data => onSelectedDataChange(data)} />
  )
}


export default ExampleComponent