import React, { Component } from 'react'

import ExampleComponent from 'react-select-scrollable'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {  
      selectedNumber:null
    }
  }


  render () {
    const {selectedNumber} = {...this.state}

    return (
      <div>
        <ExampleComponent data={[1,2,3,4,5,6,7,8,9,10,11,12]}  onSelectedDataChange={(data)=> this.setState({selectedNumber:data})} scrollTolrence={24}/>
        <div>
          { !selectedNumber && <h1>You have not selected any number yet</h1>}
          { selectedNumber && <h1>You have selected { selectedNumber}</h1>}
          <h1></h1>
        </div>
      </div>
    )
  }
}
