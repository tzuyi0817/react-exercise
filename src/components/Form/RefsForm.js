import React from "react";

class RefsForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    const payload = {
      fullName: this.fullName.value,
      petType: this.petType.value
    }
    console.log(payload)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Name</label>
          <input
            ref={input => this.fullName = input}
            type="text"
            name="fullName"
            placeholder="Full Name" />

          <label>Pet Type</label>
          <select
            ref={select => this.petType = select}
            name="petType">
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="ferret">Ferret</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default RefsForm