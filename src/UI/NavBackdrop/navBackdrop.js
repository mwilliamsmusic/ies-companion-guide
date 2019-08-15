import React from 'react';

import styles from './navBackdrop.module.css';


const navBackdrop = (props) => (
props.show ? <div className={styles.backdrop} onClick={props.clicked}></div> : null
);

export default navBackdrop;