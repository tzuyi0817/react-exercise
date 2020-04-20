import React from "react";

class Props extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    console.log('first name:', this.firstName.value);
    this.firstName.value = 'Got ya!';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <CustomInput
            label={'Name'}
            firstName={input => this.firstName = input} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function CustomInput(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input ref={props.firstName} type="text" />
    </div>
  )
}


export default Props