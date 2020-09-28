import React, { Component } from "react";

export default class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      title: ""
    }
  }

  handleOnChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
    this.setState({
      title: ""
    })
  }

  render() {
    return (
      <form className="mt-4" 
       onSubmit={(e) => this.handleSubmit(e)}>
          <input 
           type="text" placeholder="Search"
           value={this.state.title}
           onChange={(e) => this.handleOnChange(e)}
          />
          <button type="submit" className="btn btn-sm btn-dark ml-2">Search</button>
      </form>
    )
  }

}