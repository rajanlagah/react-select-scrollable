# react-select-scrollable


![ezgif com-video-to-gif](https://user-images.githubusercontent.com/20952569/79513551-c3992c80-8061-11ea-955d-130debb0b570.gif)

> Suitcase lock like digit selection 

[![NPM](https://img.shields.io/npm/v/react-select-scrollable.svg)](https://www.npmjs.com/package/react-select-scrollable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-select-scrollable
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-select-scrollable'

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
        <ExampleComponent data={[1,2,3,4,5,6,7,8,9,10,11,12]}  
        onSelectedDataChange={(data)=> this.setState({selectedNumber:data})} 
        />
        <div>
          { !selectedNumber && <h1>You have not selected any number yet</h1>}
          { selectedNumber && <h1>You have selected { selectedNumber}</h1>}
          <h1></h1>
        </div>
      </div>
    )
  }
}
```

## License

MIT © [rajanlagah](https://github.com/rajanlagah)
# react-select-scrollable


## Todo 
- [x] Make tolerance bit more accurate.
- Default value option 
- remove scroll-bar option 
- show cancel button at bottom 
- mobile preview 
