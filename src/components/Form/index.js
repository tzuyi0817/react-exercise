import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import ControlledCompExample from './ControlledCompExample'
import RefsForm from './RefsForm'
import Props from './Props'
import Radio from './Radio'
import RadioProps from './RadioProps'
import Checkbox from './Checkbox'
import CheckboxProps from './CheckboxProps'

const style1 = {
  props: {
    color: 'blue',
    textDecoration: 'none'
  },
  radio: {
    color: 'gray',
    textDecoration: 'none'
  },
  checkbox: {
    color: 'green',
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
        <li><Link to='/form/radioProps' style={style1.radio}>radio-props-form</Link></li>
        <li><Link to='/form/checkbox' style={style1.checkbox}>checkbox-form</Link></li>
        <li><Link to='/form/checkboxProps' style={style1.checkbox}>checkbox-props-form</Link></li>
      </ul>
    </div>

    <Switch>
      <Route exact path='/form' component={ControlledCompExample} />
      <Route path='/form/refs' component={RefsForm} />
      <Route path='/form/props' component={Props} />
      <Route path='/form/radio' component={Radio} />
      <Route path='/form/radioProps' component={RadioProps} />
      <Route path='/form/checkbox' component={Checkbox} />
      <Route path='/form/checkboxProps' component={CheckboxProps} />
    </Switch>
  </div>
)

export default Form

