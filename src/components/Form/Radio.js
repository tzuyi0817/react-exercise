import React from "react";

class Radio extends React.Component {
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

          <label className="ml-1">
            <input type="radio" value="cat" name="pet" className="ml-2" />
            Cat
          </label>

          <label className="ml-1">
            <input type="radio" value="Dog" name="pet" className="ml-2" />
            Dog
          </label>

          <label className="ml-1">
            <input type="radio" value="Ferret" name="pet" className="ml-2" />
            Ferret
          </label>

          <input type="submit" value="Submit" className="ml-2 btn btn-primary" />
        </form>
      </div>
    )
  }
}

export default Radio