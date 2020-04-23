import React from "react";
import { render } from "react-dom";

class CheckboxProps extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const { pet } = this.form
    const checkboxArray = [...pet]

    const checkedCheckboxes = checkboxArray.filter(input => input.checked)
    console.log('checked array:', checkedCheckboxes)

    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value)
    console.log('checked array values:', checkedCheckboxesValues)
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          ref={form => this.form = form}>

          <CheckboxSet
            setName={'pet'}
            setValues={['cat', 'dog', 'ferret']} />

          <input type="submit" value="Submit" className="ml-2 btn btn-primary" />

        </form>
      </div>
    )
  }
}

function CheckboxSet(props) {
  return (
    <div>
      {props.setValues.map((value, index) => {
        return (
          <label key={index} className="ml-1" style={{ textTransform: "capitalize" }}>
            <input type="checkbox" value={value} name={props.setName} className="ml-2" />
            {value}
          </label>
        )
      })}
    </div>
  )
}

export default CheckboxProps