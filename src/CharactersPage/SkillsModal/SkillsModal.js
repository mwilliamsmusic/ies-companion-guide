import React,{Fragment} from 'react';
import Backdrop from './UI/Backdrop/Backdrop';
import SkillsListing from './UI/SkillsListing/SkillsListing';

import styles from './SkillsModal.module.css';


const SkillsModal = (props) => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.closeModal}/> {/* Takes in show prop passed in modal*/}

        <div
            className={styles.Modal}
            style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity:props.show ? '1' : '0'
            }}>

            <SkillsListing skills={props.skills} jobTitle={props.jobTitle}/>

        </div>
    </Fragment>
);
export default SkillsModal;