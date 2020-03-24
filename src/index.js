import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Scroller from './Scroller'

export default class ExampleComponent extends Component {

  render() {
    const { data, scrollTolrence } = {...this.props}

    return (
      <Scroller data={data} scrollTolrence={scrollTolrence} onSelectedDataChange={ data => console.log('changed data'+data)} /> 
    ) 
  }
}
