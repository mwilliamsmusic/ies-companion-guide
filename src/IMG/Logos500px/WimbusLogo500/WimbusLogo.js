import React from 'react';
import styles from './WimbusLogo500.module.css'
import wimbusLogo500img from './wimbusStudiosTMwhite500.png';

const wimbusLogo500 = (props) => (
    <div className={styles.logo}>
        <img src={wimbusLogo500img} alt='Wimbus Studios Logo'/>
    </div>
);

export default wimbusLogo500;