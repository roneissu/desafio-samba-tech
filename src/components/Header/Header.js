import React, { useState } from 'react';
import './Header.css';

export default function Header({ callback }) {

    const [filterValue, setFilterValue] = useState('');

    function handleChange(event) {
        setFilterValue(event.target.value);
        callback(filterValue);
    };

    return (
        <div className='head-container'>
            <img src='/assets/breaking_bad_logo.png' alt='Bracking Bad' className='title'/>
            {/* <span className='title'>Header</span> */}
            <input type='text' onChange={ handleChange } value={ filterValue }></input>
        </div>
    );
}