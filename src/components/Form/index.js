import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import ControlledCompExample from './ControlledCompExample'
import RefsForm from './RefsForm'

const Form = () => (
  <div>
    <div>
      <ul>
        <li><Link to='/form'>form</Link></li>
        <li><Link to='/form/refs'>refs-form</Link></li>
      </ul>
    </div>

    <Switch>
      <Route exact path='/form' component={ControlledCompExample} />
      <Route path='/form/refs' component={RefsForm} />
    </Switch>
  </div>
)

export default Form

