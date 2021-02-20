import React from 'react'
// import PropTypes from 'prop-types'

import Scroller from './container/Scroller/index.jsx'

function ExampleComponent({
  data = [],
  mobileViewThreshold = 450,
  heading = "Choose",
  classNameForModal = "",
  classNameForSelectTag = "",
  onSelectedDataChange = () => undefined,
}) {


  return (
    <Scroller
      classNameForModal={classNameForModal}
      classNameForSelectTag={classNameForSelectTag}
      heading={heading}
      data={data}
      mobileViewThreshold={mobileViewThreshold}
      onSelectedDataChange={data => onSelectedDataChange(data)} />
  )
}


export default ExampleComponent