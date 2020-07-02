import React from 'react';
import { MdSearch  } from 'react-icons/md';

const SearchArea  = ({handleSubmit, handleChange, searchTerm}) => {
    return(
         <>
           <form className="form-inline d-flex justify-content-center md-form form-sm active-purple active-purple-2 mt-2" onSubmit={handleSubmit}>
                
                 <input className="form-control form-control-sm ml-3 search-width" type="text" 
                  placeholder="Search movie" 
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleChange} /> 
                {/* <MdSearch color='white' size='1rem' className="text-success" />      */}
            </form>
          </>
      
    );
};
export default SearchArea;