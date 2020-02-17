import React from 'react';
import styles from './FayeBust.module.css'
import FayeBust from './FayeBust.png';

const fayeBust = (props) => (
    <div className={styles.faye}>
        <img src={FayeBust} alt='Faye'/>
    </div>
);

export default fayeBust;