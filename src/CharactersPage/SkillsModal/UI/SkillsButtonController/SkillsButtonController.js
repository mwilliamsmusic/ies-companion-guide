import React, {Fragment} from 'react';
import style from './SkillsButtonController.module.css';

const skillsButtonController = (props) => (
  <Fragment>
      {/* Clickable modal method passed through showAlbum = showModalHandler() */}

< button className={style.button} onClick={props.showSkills}>
    {props.buttonTitle}
</button>


  </Fragment>
);

export default skillsButtonController;