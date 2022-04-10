import React, {useEffect,useRef} from 'react';
import {useGlobalContext} from "../context";

export const SearchMovie = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef("");

    useEffect(() => {
        searchValue.current.focus();
    }, []);

    function searchMovie() {
        setSearchTerm(searchValue.current.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
  return (
      <form onSubmit={handleSubmit}>
        <div className=''>
        <div className='input-group-lg container mt-5 w-50'>
            <input
            type='text'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-lg'
            className='form-control '
            ref={searchValue}
            onChange={searchMovie}
            placeholder="Search for a movie"
            style={{width:"100%"}}
            />
        </div>
        </div>
      </form>
  );
};
