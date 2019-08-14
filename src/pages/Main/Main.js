import React, { useState, useEffect } from 'react';
import './Main.css';

// import CharacterService from '../../services/CharacterService';

import Header from '../../components/Header/Header';
import CharacterList from '../../components/CharacterList/CharacterList';
import Paginator from '../../components/Paginator/Paginator';

const baseUrl = 'https://www.breakingbadapi.com/api/';
const configPage = 10;

export default function Characters() {

    const [pagesTotal, setPagesTotal] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [filterValue, setFilterValue] = useState('');
    const [listCharacter, setListCharacter] = useState([]);

    useEffect(() => {
        getNumberTotalOfPages();
    }, []);

    useEffect(() => {
        getPaginatedCharacterList( configPage, (pageNumber-1)*configPage );
    }, [pageNumber]);

    function getNumberTotalOfPages() {
        fetch(baseUrl + `characters`)
            .then((response) => response.json())
            .then((response) => setPagesTotal(1 + response.length/configPage))
            .catch((error) => console.log('An error ocourred' + error))
    }

    function getPaginatedCharacterList(limit, offset) {
        fetch(baseUrl + `characters?limit=${limit}&offset=${offset}`)
            .then((response) => response.json())
            .then((response) => setListCharacter(response))
            .catch((error) => console.log('An error ocourred' + error))
    }

    return (
        <div className='page'>
            <Header callback={ setFilterValue } />
            <CharacterList listCharacter={ listCharacter } filterValue={ filterValue } />
            <Paginator pagesNumber={ pagesTotal } pageSel={ pageNumber } callback={ setPageNumber } />
        </div>
    );
}