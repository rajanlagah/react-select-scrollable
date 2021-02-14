import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Scroller from './Scroller'

function ExampleComponent({ data, scrollTolrence, onSelectedDataChange }) {


  return (
    <Scroller data={data} scrollTolrence={scrollTolrence} onSelectedDataChange={data => onSelectedDataChange(data)} />
  )
}


export default ExampleComponent