import React from "react"

class Form extends React.Component{
  defaultValues = {name: "", price: "", description: "", department: ""}
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault()
    let product = {...this.state}
    this.props.submit(product)
    this.setState({...this.defaultValues})
  }
// Universal handleChange
  handleChange = (e) => {
    let { target: {id, value}} = e
    this.setState({[id]: value})
  }

  render(){
    let {name, price, description, department} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
      <input
      id="name"
      placeholder="Name"
      value="name" />
      </form>

    )
  }
}

export default Form