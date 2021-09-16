import React, { Component } from 'react'
import Navbar from './Components/Navbar.js'
import NewsItems from './Components/NewsItems.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {  
  render() {
    return (
      <div>
        <Router>
        <Navbar />  
        <Switch>
          <Route exact path="/"><NewsItems key="general" category={"general"}/></Route>
          <Route exact path="/business"><NewsItems key="business" category={"business"}/></Route>
          <Route exact path="/entertainment"><NewsItems key="entertainment" category={"entertainment"}/></Route>
          <Route exact path="/finance"><NewsItems key="finance" category={"finance"}/></Route>
          <Route exact path="/health"><NewsItems key="health" category={"health"}/></Route>
          <Route exact path="/science"><NewsItems key="science" category={"science"}/></Route>
          <Route exact path="/sports"><NewsItems key="sports" category={"sports"}/></Route>
          <Route exact path="/technology"><NewsItems key="technology" category={"technology"}/></Route>
        </Switch>

        </Router>
      </div>
    )
  }
}

export default App
