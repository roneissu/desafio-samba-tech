import React from 'react';
import './CharacterList.css';

import Character from './Character/Character';

export default function CharacterList({ listCharacter, filterValue }) {
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