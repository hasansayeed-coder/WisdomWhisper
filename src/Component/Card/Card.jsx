/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import "./Card.css"


const Card = () => {

    const [advise, setAdvice] = useState("") ;
    
    const fetchAdvise = () => {
        fetch('https://api.adviceslip.com/advice') 
        .then((response) => response.json())
        .then((data) => setAdvice(data.slip.advice)) ;   
    }

    useEffect( () => {
        fetchAdvise() ; 
    }  , [])

    const handleAdvise = () => {
        fetchAdvise() ;
    }

    return (
        <div className='card-container'>
            <div className='card'>
                <h1 className='heading'>{advise}</h1>
                <button className='button'  onClick={handleAdvise}>
                    <span>
                        Give Me Advise!!!
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Card;