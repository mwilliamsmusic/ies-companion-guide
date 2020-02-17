import React from 'react';
import styles from './IanBust.module.css'
import IanBust from './ianBust.png';

const ianBust = (props) => (
<div >
        <img style={{height:props.height, width:props.width}}src={IanBust} alt='Ian'/>
</div>
);

export default ianBust;