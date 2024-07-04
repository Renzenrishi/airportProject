import './App.css'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import AirportDetails from './components/AirportDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/airport-details/:id" component={AirportDetails} />
  </Switch>
)

export default App
