import React, { useState, useEffect } from 'react';
import './Paginator.css';

export default function Paginator({ pagesNumber, pageSel, callback }) {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        let pagesArray = [];
        for(let i = 1; i <= pagesNumber; i++) {
            pagesArray.push(i);
        }
        setPages(pagesArray);
    }, [pagesNumber]);

    function pageIsSelected(id) {
        return (pageSel === id) ? ' selected-page' : '';
    }

    return (
        <div className='paginator-container'>
            { pages
                .map((element) => 
                    <button key={ element } onClick={ () => callback(element) }>
                        <span className={ 'paginator-number' + pageIsSelected(element) }>
                            { element }
                        </span>
                    </button>
                )
            }
        </div>
    );
}