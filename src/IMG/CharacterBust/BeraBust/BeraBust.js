import React from 'react';
import styles from './BeraBust.module.css'
import BeraBust from './BeraBust.png';

const beraBust = (props) => (
    <div className={styles.bera}>
        <img src={BeraBust} alt='Bera'/>
    </div>
);

export default beraBust;