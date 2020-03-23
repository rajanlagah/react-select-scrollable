import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import Scroller from './Scroller'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <Scroller /> 
    ) 
  }
}
