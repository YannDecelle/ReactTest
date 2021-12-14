import React, { useState, useEffect } from 'react';
import { local } from 'web3modal';
import styles from '../styles/Card.module.css';

export default function Card(props)
{
    
    const [selected, setSelected] = useState(null);
    useEffect(() => {localStorage.setItem("fullInfo", JSON.stringify(props));}, [selected])
    const gotofullInfo = (e) => {setSelected(e);}
    return (
        <div className={styles.Card}>
            <h3>{props.title} </h3>
            <img src={props.image}/>
            <p>{props.prix} </p>
            <button onClick={() => gotofullInfo(props)}>
                Acheter
            </button>
        </div>
        
    )
}

