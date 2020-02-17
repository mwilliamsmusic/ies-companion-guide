import React, {Fragment} from 'react';
import styles from './sideDrawer.module.css';
import NavigationItems from '../Navigation/NavigationItems';
import NavBackdrop from '../../UI/NavBackdrop/navBackdrop';
import WimbusLogo500 from '../../Display/Logos/wimbusLogo500';

const sideDrawer = (props) => {

    let attachedStyles = [styles.sideDrawer, styles.close];

    if(props.open){
        attachedStyles = [styles.sideDrawer, styles.open];
    }

    return(
      <Fragment>
        <NavBackdrop show={props.open} clicked={props.closed}/>
        <div className={attachedStyles.join(' ')}>
            <nav>
                <NavigationItems/>
                <div className={styles.spacer}></div>

                    <WimbusLogo500/>

            </nav>
        </div>
      </Fragment>
    );
};

export default sideDrawer;
