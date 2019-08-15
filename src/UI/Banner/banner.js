import React from 'react';
import IESLogo500 from '../../Display/Logos/iesLogo';
import styles from './banner.module.css';
import NavigationItems from '../Navigation/NavigationItems';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton';

const banner = (props) => (
  <header className={styles.toolbar}>
    <DrawerToggleButton clicked={props.drawerToggleClicked}/>
    <div className={styles.image}> <IESLogo500/></div>
    <nav className={styles.desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default banner;