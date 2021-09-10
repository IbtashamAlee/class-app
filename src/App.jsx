import React from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import './App.css'
import DashBoard from './components/DashBoard'
import ErrorPage from './components/ErrorPage'
import LandingPage from './components/LandingPage'
import Signin from './components/Signin'
import Signup from './components/Signup'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <div className='body'>
      <Router>
        <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/dashboard'>
          <DashBoard />
        </Route>
        <Route path='/class-details/:id'>     
        </Route>
        <Route path='*'>
          <ErrorPage/>
        </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
