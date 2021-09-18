import React, { useState } from 'react'
import Navbar from './Components/Navbar.js'
import NewsItems from './Components/NewsItems.js'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#00AAE4'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><NewsItems setProgress={setProgress} key="general" category={"general"} /></Route>
          <Route exact path="/business"><NewsItems setProgress={setProgress} key="business" category={"business"} /></Route>
          <Route exact path="/entertainment"><NewsItems setProgress={setProgress} key="entertainment" category={"entertainment"} /></Route>
          <Route exact path="/finance"><NewsItems setProgress={setProgress} key="finance" category={"finance"} /></Route>
          <Route exact path="/health"><NewsItems setProgress={setProgress} key="health" category={"health"} /></Route>
          <Route exact path="/science"><NewsItems setProgress={setProgress} key="science" category={"science"} /></Route>
          <Route exact path="/sports"><NewsItems setProgress={setProgress} key="sports" category={"sports"} /></Route>
          <Route exact path="/technology"><NewsItems setProgress={setProgress} key="technology" category={"technology"} /></Route>
        </Switch>

      </Router>
    </div>
  )
}

export default App
