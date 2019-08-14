import React, { useState, useEffect } from 'react';
import './Character.css';

export default function Character({ params }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(params);
    }, [params]);

    return (
        <>
            <div className='char-card'>
                <img src={ data.img } alt='' className='image' />
            </div>

            <div className={ 'status-container ' + data.status }>
                { data.status }
            </div>

            <div className='info-container'>
                <div className='info-name'>
                    { data.name }
                </div>
                <div className='info-birthday'>
                    { data.birthday }
                </div>
                <div className='info-occupation'>
                    { data.occupation }
                </div>
            </div>
        </>
    );
}