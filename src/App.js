import React, { Component } from 'react'
import Navbar from './Components/Navbar.js'
import NewsItems from './Components/NewsItems.js'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {  

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar />  
        <LoadingBar
        color='#00AAE4'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/"><NewsItems setProgress = {this.setProgress} key="general" category={"general"}/></Route>
          <Route exact path="/business"><NewsItems setProgress = {this.setProgress} key="business" category={"business"}/></Route>
          <Route exact path="/entertainment"><NewsItems setProgress = {this.setProgress} key="entertainment" category={"entertainment"}/></Route>
          <Route exact path="/finance"><NewsItems setProgress = {this.setProgress} key="finance" category={"finance"}/></Route>
          <Route exact path="/health"><NewsItems setProgress = {this.setProgress} key="health" category={"health"}/></Route>
          <Route exact path="/science"><NewsItems setProgress = {this.setProgress} key="science" category={"science"}/></Route>
          <Route exact path="/sports"><NewsItems setProgress = {this.setProgress} key="sports" category={"sports"}/></Route>
          <Route exact path="/technology"><NewsItems setProgress = {this.setProgress} key="technology" category={"technology"}/></Route>
        </Switch>

        </Router>
      </div>
    )
  }
}

export default App
