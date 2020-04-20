import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import ControlledCompExample from './ControlledCompExample'
import RefsForm from './RefsForm'
import Props from './Props'

const style1 = {
  color: 'blue',
  textDecoration: 'none'
}

const Form = () => (
  <div>
    <div>
      <ul>
        <li><Link to='/form'>form</Link></li>
        <li><Link to='/form/refs'>refs-form</Link></li>
        <li><Link to='/form/props' style={style1}>props-form</Link></li>
      </ul>
    </div>

    <Switch>
      <Route exact path='/form' component={ControlledCompExample} />
      <Route path='/form/refs' component={RefsForm} />
      <Route path='/form/props' component={Props} />
    </Switch>
  </div>
)

export default Form

