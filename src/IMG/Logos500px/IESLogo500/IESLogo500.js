import React from 'react';
import styles from './IESLogo500.module.css'
import iesLogo500img from './IESlogoTMwhite500.png';

const iesLogo500 = (props) => (
    <div className={styles.logo}>
        <img src={iesLogo500img} alt='IES Logo'/>
    </div>
);

export default iesLogo500;