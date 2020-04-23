import React from "react";

class Checkbox extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const { pet } = this.form
    const checkboxArray = Array.from(pet)

    // 選取被選中的 checkbox
    const checkedCheckboxes = checkboxArray.filter(input => input.checked)
    console.log('checked array:', checkedCheckboxes);

    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value)
    console.log('checked array values:', checkedCheckboxesValues);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          ref={form => this.form = form}>

          <label>
            <input type="checkbox" value="cat" name="pet" className="ml-2" />
            Cat
          </label>

          <label className="ml-1">
            <input type="checkbox" value="Dog" name="pet" className="ml-2" />
            Dog
          </label>

          <label className="ml-1">
            <input type="checkbox" value="Ferret" name="pet" className="ml-2" />
            Ferret
          </label>

          <input type="submit" value="Submit" className="btn btn-success ml-2" />
        </form>
      </div>
    )
  }
}

export default Checkbox