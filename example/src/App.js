import React, { Component } from 'react'

import ExampleComponent from 'react-select-scrollable'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedNumber: null
    }
  }


  render() {
    const { selectedNumber } = { ...this.state }

    return (
      <div>
        <ExampleComponent data={[
          { value: '1', displayName: "One" },
          { value: '2', displayName: "Two" },
          { value: '3', displayName: "Three" },
          { value: '4', displayName: "Four" },
          { value: '5', displayName: "Five" },
          { value: '6', displayName: "Six" },
          { value: '7', displayName: "Seven" },
        ]}
          heading="Choose"
          classNameForModal="modal"
          classNameForSelectTag="selectTag"
          mobileViewThreshold={450}
          onSelectedDataChange={(data) => this.setState({ selectedNumber: data })} />
        <div>
          {!selectedNumber && <h1>You have not selected any number yet</h1>}
          {selectedNumber && <h1>You have selected {selectedNumber}</h1>}
        </div>
      </div>
    )
  }
}
