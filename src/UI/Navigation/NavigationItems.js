import React from 'react';


import NavigationLinks from './NavigationLinks/NavigationLinks';
import styles from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={styles.navigationItems}>
        <NavigationLinks link='/'>Characters</NavigationLinks>
        <NavigationLinks link='/equipment'>Equipment</NavigationLinks>
        <NavigationLinks link='/item'>Items</NavigationLinks>
        <NavigationLinks link='/beastiary'>Beastiary</NavigationLinks>
    </ul>
);

export default navigationItems;