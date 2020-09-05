import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Sidebar from './components/Sidebar'
import apps from './App_database'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar apps={apps} show={false}/>
        <Switch>
          {apps.map((app, index) => (
            <Route key={index} path={app.path} exact component={app.app}/>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
