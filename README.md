# react-select-scrollable

![desktop_view](https://user-images.githubusercontent.com/20952569/108110869-eb11b900-70b9-11eb-8963-aee911604512.gif)
![mobile_view](https://user-images.githubusercontent.com/20952569/108110716-ac7bfe80-70b9-11eb-925d-ee141abf7b11.gif)

> Smart Select options. 
> - When on desptop it will work as normal select tag
> - When on mobile it will open apple like PopUp
 

[![NPM](https://img.shields.io/npm/v/react-select-scrollable.svg)](https://www.npmjs.com/package/react-select-scrollable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-select-scrollable
```

## Usage

```jsx
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


```

| Parameter            	| Type     	| Use                                                                                              	|
|----------------------	|----------	|--------------------------------------------------------------------------------------------------	|
| data                 	| Array    	| Options you want to choose from                                                                  	|
| heading              	| string   	| Text will appear as select tag heading                                                           	|
| mobileViewThreshold  	| number   	| will open modal when screen size is less than <br>`mobileViewThreshold` else simple select tag   	|
| onSelectedDataChange 	| function 	| Callback function that will run when user select <br>from option                                 	|
| classNameForModal 	  | string 	  | Custom class for Modal component                                 	                                |
| classNameForSelectTag | string 	  | Custom class for Select component                                 	                              |

## License

MIT © [rajanlagah](https://github.com/rajanlagah)
# react-select-scrollable


## Todo 
- [x] Make tolerance bit more accurate.
- [x] Dynamic Threshold for mobile view.
- [x] Select tag heading 
- [x] Add functional component 
- [x] Select Tag UI 
- [x] remove scroll-bar option 
- [x] show cancel button at bottom 
- [x] mobile preview gif
- [ ] Testing 
- [x] GIF update
- [x] README.md update
- [x] Custom class names for component
