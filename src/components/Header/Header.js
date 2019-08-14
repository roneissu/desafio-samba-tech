import React, { useState } from 'react';
import './Header.css';

export default function Header({ callback, clickSearch }) {

    const [filterValue, setFilterValue] = useState('');

    function handleChange(event) {
        setFilterValue(event.target.value);
        callback(filterValue);
        console.log(filterValue);
    };

    return (
        <div className='head-container'>
            <img src='assets/breaking_bad_logo.png' alt='Breaking Bad' className='title'/>
            <form className='search-container' action=''>
                <input type='text' id='search-input' onChange={ handleChange } value={ filterValue } />
                <label htmlFor='search-input' className='search-bar'>Pesquisar</label>
                <button className='search-btn' onClick={ clickSearch }>P</button>
            </form>
        </div>
    );
}