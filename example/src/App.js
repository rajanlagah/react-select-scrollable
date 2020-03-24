import React, { Component } from 'react'

import ExampleComponent from 'react-select-scrollable'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent data={[1,2,3,4,5,6,7,8,9,10,11,12]}  scrollTolrence={24}/>
      </div>
    )
  }
}
