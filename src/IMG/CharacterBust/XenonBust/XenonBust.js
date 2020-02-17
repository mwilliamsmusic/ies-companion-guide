import React from 'react';
import styles from './XenonBust.module.css'
import XenonBust from './XenonBust.png';

const xenonBust = (props) => (
    <div className={styles.xenon}>
        <img src={XenonBust} alt='Xenon'/>
    </div>
);

export default xenonBust;