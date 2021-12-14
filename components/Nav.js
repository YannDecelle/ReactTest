import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';

export default function Navbar() {
    return (
        <div className={styles.navcontainer}>
                <p>Acceuil</p>
                <p>Contact</p>
                <p>Login</p>
        </div>
    )
}