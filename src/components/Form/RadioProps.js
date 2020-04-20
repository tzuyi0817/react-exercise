import React from "react";

class RadioProps extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const { pet } = this.form
    console.log(pet, pet.value);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          ref={form => this.form = form}>

          <RadioSet
            setName={'pet'}
            setValues={['cat', 'dog', 'ferret']} />

          <input type="submit" value="Submit" className="ml-2 btn btn-primary" />
        </form>
      </div>
    )
  }
}

function RadioSet(props) {
  return (
    <div>
      {props.setValues.map((value, index) => {
        return (
          <label key={index} className="ml-1">
            <input type="radio" value={value} name={props.setName} className="ml-2" />
            {value}
          </label>
        )
      })}
    </div>
  )
}

export default RadioProps