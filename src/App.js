import React, { Component } from 'react'
import Navbar from './Components/Navbar.js'
import NewsItems from './Components/NewsItems.js'


export class App extends Component {  
  render() {
    return (
      <div>
        <Navbar />
        <NewsItems />
      </div>
    )
  }
}

export default App
