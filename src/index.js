import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DesktopFinal01 from './views/desktop-final01'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DesktopFinal01} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
