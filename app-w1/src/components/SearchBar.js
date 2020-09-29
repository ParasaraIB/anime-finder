import React, { useState } from "react";

// export default class SearchBar extends Component {

//   constructor() {
//     super();
//     this.state = {
//       title: ""
//     }
//   }

//   handleOnChange(e) {
//     this.setState({
//       title: e.target.value
//     })
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.onSubmit(this.state.title);
//     this.setState({
//       title: ""
//     })
//   }

//   render() {
//     return (
//       <form className="mt-4" 
//        onSubmit={(e) => this.handleSubmit(e)}>
//           <input 
//            type="text" placeholder="Search"
//            value={this.state.title}
//            onChange={(e) => this.handleOnChange(e)}
//           />
//           <button type="submit" className="btn btn-sm btn-dark ml-2">Search</button>
//       </form>
//     )
//   }

// }

export default function SearchBar(props) {

  const [ state, setState ] = useState({
    title: ""
  });

  function handleOnChange(e) {
    setState({
      ...state,
      title: e.target.value
    });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(state.title);
    setState({
      ...state,
      title: ""
    });
  }


  return (
    <form className="mt-4"
     onSubmit={(e) => handleSubmit(e)}>
       <input 
        type="text" placeholder="Search"
        value={state.title}
        onChange={(e) => handleOnChange(e)}
       />
       <button type="submit" className="btn btn-sm btn-dark ml-2">Search</button>
    </form>
  )

}