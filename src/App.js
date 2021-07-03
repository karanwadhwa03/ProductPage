import React, { Component } from 'react'
import Page from './Pages'

class App extends Component{
  render(){
    return (
      <div className="container p-4 mt-2" style={{overflow:'hidden'}}>
        <Page></Page>
      </div>
    )
  }
}
export default App