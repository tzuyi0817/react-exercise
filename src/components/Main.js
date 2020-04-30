import { Switch, Route } from 'react-router-dom'
import React from "react";
import Home from '../components/Home'
import Roster from '../components/Roster'
import Schedule from '../components/Schedule'
import Form from '../components/Form'
import TodoExample from '../components/TodoExample'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/roster' component={Roster} />
      <Route path='/schedule' component={Schedule} />
      <Route path='/form' component={Form} />
      <Route path='/todo' component={TodoExample} />
    </Switch>
  </main>
)

export default Main