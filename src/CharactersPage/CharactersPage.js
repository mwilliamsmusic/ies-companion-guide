import React from 'react';
import style from './CharactersPage.module.css';
import ModalIO from './Modal_IO/Modal_IO';

const charactersPage = () => (
    <div>
        <div className={style.textRO}>

            <ModalIO/>
        </div>
    </div>
);

export default charactersPage;