import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleOChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (inputValue) => {
    return fetch(
        '${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}', 
        geoApiOptions)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <>
      <AsyncPaginate
        placeholder="search city"
        debounceTimeout={600}
        value={search}
        onChange={handleOChange}
        loadOptions={loadOptions}
      />
    </>
  )
}
