import React, { useState } from "react";

export default function SearchBar(props) {

  const [ title, setTitle ] = useState("");

  function handleOnChange(e) {
    setTitle(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(title);
    setTitle("");
  }

  return (
    <form className="mt-4"
     onSubmit={(e) => handleSubmit(e)}>
       <input 
        type="text" placeholder="Search"
        value={title}
        onChange={(e) => handleOnChange(e)}
       />
       <button type="submit" className="btn btn-sm btn-dark ml-2">Search</button>
    </form>
  )

}