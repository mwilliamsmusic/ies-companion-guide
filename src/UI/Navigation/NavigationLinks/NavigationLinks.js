import React from 'react';
import styles from './NavigationLinks.module.css';
import { Link } from "react-router-dom";

const navigationLinks = (props) => (
    <li className={styles.navigationLinks}>
        <Link
            to ={props.link}
            exact
        activeClassName={styles.active}>
            {props.children}
        </Link>
    </li>
);

export default navigationLinks;