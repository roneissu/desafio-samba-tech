import React from 'react';
import './SearchList.css';

import Character from '../CharacterList/Character/Character';

export default function SearchList({ listCharacter, filterValue }) {

    return (
        <>
            <span className='char-title'>Personagens</span>
            <ul className='char-list'>
                {   listCharacter
                        .filter((element) => (
                            element.name.toLowerCase().includes(filterValue.toLowerCase())
                        ))
                        .map((element) => 
                            <div key={ element.char_id } className='char-item'>
                                <Character params={ element } />
                            </div>
                        )
                }
            </ul>
        </>
    );
}