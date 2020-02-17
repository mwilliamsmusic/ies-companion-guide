import React from 'react';
import styles from './SkillsAccordion.module.css';
import JobObjects from'../Modal_IO/JobObjects';
import SkillsModalViewer from '../SkillsModal/UI/SkillsModalViewer/SkillsModalViewer';

import Ianbust from '../../IMG/CharacterBust/IanBust/IanBust';
import FayeBust from '../../IMG/CharacterBust/FayeBust/FayeBust';
import XenonBust from '../../IMG/CharacterBust/XenonBust/XenonBust';
import BeraBust from '../../IMG/CharacterBust/BeraBust/BeraBust';

class SkillsAccordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {ian: false, faye: false, xenon:false, bera: false};

        this.ianClickHandler = this.ianClickHandler.bind(this);
        this.fayeClickHandler = this.fayeClickHandler.bind(this);
        this.xenonClickHandler = this.xenonClickHandler.bind(this);
        this.beraClickHandler = this.beraClickHandler.bind(this);
    }


    ianClickHandler() {
        this.setState({ian: !this.state.ian})
    }

    fayeClickHandler() {
        this.setState({faye: !this.state.faye});
    }

    xenonClickHandler() {
        this.setState({xenon: !this.state.xenon});
    }

    beraClickHandler() {
        this.setState({bera: !this.state.bera});
    }

    render() {
        let fayeButton;
        if (this.state.faye === true) {
            fayeButton = <div className={styles.blueBox}>
                <div className={styles.bust}> <FayeBust/> </div>
                <button className={styles.button} onClick={this.fayeClickHandler}>
                    {JobObjects.characterName.Faye}
                </button>
                <div className={styles.centerButtons}>
                <SkillsModalViewer skills={JobObjects.Faye.fayeJob_1}
                                   jobTitle={JobObjects.Faye.fayeJobNames.jobName_1}/>
                <SkillsModalViewer skills={JobObjects.Faye.fayeJob_2}
                                   jobTitle={JobObjects.Faye.fayeJobNames.jobName_2}/>
                <SkillsModalViewer skills={JobObjects.Faye.fayeJob_3}
                                   jobTitle={JobObjects.Faye.fayeJobNames.jobName_3}/>
                <SkillsModalViewer skills={JobObjects.Faye.fayeJob_4}
                                   jobTitle={JobObjects.Faye.fayeJobNames.jobName_4}/>
                </div>
            </div>

        } else {
            fayeButton =
                <div className={styles.blueBox}>
                    <div className={styles.bust}> <FayeBust/> </div>

                    <button className={styles.button} onClick={this.fayeClickHandler}>
                {JobObjects.characterName.Faye}
            </button>
                </div>
        }

        let ianButton;
        if (this.state.ian === true) {
            ianButton =
                <div className={styles.blueBox}>
                    <div className={styles.bust}> <Ianbust/> </div>

                    <button className={styles.button} onClick={this.ianClickHandler}>
                        {JobObjects.characterName.Ian}
                    </button>
                    <div className={styles.centerButtons}>
                    <SkillsModalViewer skills={JobObjects.Ian.ianJob_1}
                                       jobTitle={JobObjects.Ian.ianJobNames.jobName_1}/>

                    <SkillsModalViewer skills={JobObjects.Ian.ianJob_2}
                                       jobTitle={JobObjects.Ian.ianJobNames.jobName_2}/>

                    <SkillsModalViewer skills={JobObjects.Ian.ianJob_3}
                                       jobTitle={JobObjects.Ian.ianJobNames.jobName_3}/>

                    <SkillsModalViewer skills={JobObjects.Ian.ianJob_4}
                                       jobTitle={JobObjects.Ian.ianJobNames.jobName_4}/>
                    </div>
                </div>

        } else {
            ianButton =
                <div className={styles.blueBox}>
                    <div className={styles.bust}> <Ianbust/> </div>
                    <button className={styles.button} onClick={this.ianClickHandler}>
                        {JobObjects.characterName.Ian}
                    </button>
                </div>
        }

        let xenonButton;
        if (this.state.xenon === true) {
            xenonButton = <div className={styles.blueBox}>

                <div className={styles.bust}> <XenonBust/> </div>

                <button className={styles.button} onClick={this.xenonClickHandler}>
                    {JobObjects.characterName.Xenon}
                </button>

                <div className={styles.centerButtons}>
                <SkillsModalViewer skills={JobObjects.Xenon.xenonJob_1}
                                   jobTitle={JobObjects.Xenon.xenonJobNames.jobName_1}/>
                <SkillsModalViewer skills={JobObjects.Xenon.xenonJob_2}
                                   jobTitle={JobObjects.Xenon.xenonJobNames.jobName_2}/>
                <SkillsModalViewer skills={JobObjects.Xenon.xenonJob_3}
                                   jobTitle={JobObjects.Xenon.xenonJobNames.jobName_3}/>
                <SkillsModalViewer skills={JobObjects.Xenon.xenonJob_4}
                                   jobTitle={JobObjects.Xenon.xenonJobNames.jobName_4}/>
                </div>
            </div>

        } else {
            xenonButton =
                <div className={styles.blueBox}>
                    <div className={styles.bust}> <XenonBust/> </div>

                    <button className={styles.button} onClick={this.xenonClickHandler}>
                {JobObjects.characterName.Xenon}
            </button>
                </div>
        }

        let beraButton;
        if (this.state.bera === true) {
            beraButton = <div className={styles.blueBox}>
                <div className={styles.bust}> <BeraBust/> </div>

                <button className={styles.button} onClick={this.beraClickHandler}>
                    {JobObjects.characterName.Bera}
                </button>
                <div className={styles.centerButtons}>
                <SkillsModalViewer skills={JobObjects.Bera.beraJob_1}
                                   jobTitle={JobObjects.Bera.beraJobNames.jobName_1}/>
                <SkillsModalViewer skills={JobObjects.Bera.beraJob_2}
                                   jobTitle={JobObjects.Bera.beraJobNames.jobName_2}/>
                <SkillsModalViewer skills={JobObjects.Bera.beraJob_3}
                                   jobTitle={JobObjects.Bera.beraJobNames.jobName_3}/>
                <SkillsModalViewer skills={JobObjects.Bera.beraJob_4}
                                   jobTitle={JobObjects.Bera.beraJobNames.jobName_4}/>
                </div>

            </div>

        } else {
            beraButton =

                <div className={styles.blueBox}>
                    <div className={styles.bust}> <BeraBust/> </div>

                    <button className={styles.button} onClick={this.beraClickHandler}>
                {JobObjects.characterName.Bera}
            </button>

                </div>
        }




        return (
            <div>
                {ianButton}
                <div className={styles.spacer}></div>
                {fayeButton}
                <div className={styles.spacer}></div>
                {xenonButton}
                <div className={styles.spacer}></div>
                {beraButton}
                <div className={styles.spacer}></div>
            </div>
        )


    }
}









        export default SkillsAccordion;