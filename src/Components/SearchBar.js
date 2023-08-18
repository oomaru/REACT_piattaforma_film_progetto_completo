
import React, { useState } from 'react';

export const SearchBar = ({ onSearchChange }) => {

        const [search, setSearch] = useState('');
    const manageSearch = (evt) => {
      
        
        const s = evt.target.value.trim();
        setSearch(s);
        
       
    }
    const searchMovies = (evt) =>{
        evt.preventDefault();
         if (search.length > 3) {
            onSearchChange(search)
        }
    }


    return (<form className="d-flex">
        <input className="form-control me-2"
            name ="search" value={search} onChange = {manageSearch}
            type="search" placeholder="Ricerca..." aria-label="Search" />
        <button  onClick = {searchMovies} className="btn btn-outline-danger" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        <div className="space"></div>
         <button onClick ={()=> {setSearch('')}} className="btn btn-outline-danger" type="reset"><i class="fa-solid fa-trash-can"></i></button>
    </form>);
}