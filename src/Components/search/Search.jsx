import React, { useState } from 'react';
import {AsyncPaginate} from "react-select-async-paginate";

export default function Search({onSearchChange}) {
  const[search, setSearch]= useState(null);

  const handleOChange = (searchData) =>{
    setSearch(searchData);
    onSearchChange(searchData);
  }
  
  const loadOptions = (inputValue) => {
    
  }

  return (
    <>
      <AsyncPaginate 
        placeholder = "search city"
        debounceTimeout={600}
        value={search}
        onChange={handleOChange}
        loadOptions={loadOptions}
        />
    </>
  )
}
