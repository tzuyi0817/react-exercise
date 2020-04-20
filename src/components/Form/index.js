import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import ControlledCompExample from './ControlledCompExample'
import RefsForm from './RefsForm'
import Props from './Props'
import Radio from './Radio'

const style1 = {
  props: {
    color: 'blue',
    textDecoration: 'none'
  },
  radio: {
    color: 'gray',
    textDecoration: 'none'
  }
}

const Form = () => (
  <div>
    <div>
      <ul>
        <li><Link to='/form'>form</Link></li>
        <li><Link to='/form/refs'>refs-form</Link></li>
        <li><Link to='/form/props' style={style1.props}>props-form</Link></li>
        <li><Link to='/form/radio' style={style1.radio}>radio-form</Link></li>
      </ul>
    </div>

    <Switch>
      <Route exact path='/form' component={ControlledCompExample} />
      <Route path='/form/refs' component={RefsForm} />
      <Route path='/form/props' component={Props} />
      <Route path='/form/radio' component={Radio} />
    </Switch>
  </div>
)

export default Form

