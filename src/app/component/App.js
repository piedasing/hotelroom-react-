import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import Practice from './Practice'

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/main' component={Main}/>
      <Route path='/practice' component={Practice}/>
    </Switch>
  </main>
)

export default App
