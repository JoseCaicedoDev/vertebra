import React from 'react'

import Header from '../Header'
import Navbar from '../Navbar'


function Back(props) {
  return (
    <React.Fragment>
      <Header></Header>
      <Navbar></Navbar>
        {props.children}
    </React.Fragment>
  )
}

export default Back