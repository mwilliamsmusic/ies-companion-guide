import React from 'react';

import SkillsModalViewer from '../SkillsModal/UI/SkillsModalViewer/SkillsModalViewer';
import JobObjects from'./JobObjects';

import IanBust from '../../IMG/CharacterBust/IanBust/IanBust'
import FayeBust from '../../IMG/CharacterBust/FayeBust/FayeBust'
import XenonBust from '../../IMG/CharacterBust/XenonBust/XenonBust'
import BeraBust from '../../IMG/CharacterBust/BeraBust/BeraBust'

import SkillsAccordion from '../SkillsAccordion/SkillsAccordion';
import styles from'./Modal_IO.module.css';

const modalIO = () =>(
<div>
    <div className={styles.largeGridContainer}>
        {/*IO and Button Hub */}
        <div className={styles.largeLayoutContainer}>


            <div className={styles.spacer}></div>

            <div className={styles.blueBox}>
                <div className={styles.blueBoxGridContainer}>

                    <div className={styles.blueContainerPic}>
                        <IanBust/>
                    </div>

                    <div className={styles.blueContainerClass}>
             <SkillsModalViewer skills={JobObjects.Ian.ianJob_1} jobTitle={JobObjects.Ian.ianJobNames.jobName_1}/>
             <SkillsModalViewer skills={JobObjects.Ian.ianJob_2} jobTitle={JobObjects.Ian.ianJobNames.jobName_2}/>
         </div>

         <div className={styles.blueContainerClass2}>
             <SkillsModalViewer skills={JobObjects.Ian.ianJob_3} jobTitle={JobObjects.Ian.ianJobNames.jobName_3}/>
            <SkillsModalViewer skills={JobObjects.Ian.ianJob_4} jobTitle={JobObjects.Ian.ianJobNames.jobName_4}/>
         </div>
                </div>
            </div>


<div className={styles.spacer}></div>

            <div className={styles.blueBox}>
                <div className={styles.blueBoxGridContainer}>

                    <div className={styles.blueContainerPic}>
                        <FayeBust/>
                    </div>

                <div className={styles.blueContainerClass}>
            <SkillsModalViewer skills={JobObjects.Faye.fayeJob_1} jobTitle={JobObjects.Faye.fayeJobNames.jobName_1}/>
            <SkillsModalViewer skills={JobObjects.Faye.fayeJob_2} jobTitle={JobObjects.Faye.fayeJobNames.jobName_2}/>
                </div>
                <div className={styles.blueContainerClass2}>
            <SkillsModalViewer skills={JobObjects.Faye.fayeJob_3} jobTitle={JobObjects.Faye.fayeJobNames.jobName_3}/>
            <SkillsModalViewer skills={JobObjects.Faye.fayeJob_4} jobTitle={JobObjects.Faye.fayeJobNames.jobName_4}/>
                </div>
                </div>
                </div>

<div className={styles.spacer}></div>

        <div className={styles.blueBox}>
            <div className={styles.blueBoxGridContainer}>

                <div className={styles.blueContainerPic}> <XenonBust/> </div>

                <div className={styles.blueContainerClass}>
            <SkillsModalViewer skills={JobObjects.Xenon.xenonJob_1} jobTitle={JobObjects.Xenon.xenonJobNames.jobName_1}/>
            <SkillsModalViewer skills={JobObjects.Xenon.xenonJob_2} jobTitle={JobObjects.Xenon.xenonJobNames.jobName_2}/>
                </div>

                <div className={styles.blueContainerClass2}>
            <SkillsModalViewer skills={JobObjects.Xenon.xenonJob_3} jobTitle={JobObjects.Xenon.xenonJobNames.jobName_3}/>
            <SkillsModalViewer skills={JobObjects.Xenon.xenonJob_4} jobTitle={JobObjects.Xenon.xenonJobNames.jobName_4}/>
                </div>
                </div>
        </div>





<div className={styles.spacer}></div>

        <div className={styles.blueBox}>
            <div className={styles.blueBoxGridContainer}>

                <div className={styles.blueContainerPic}><BeraBust/></div>

                <div className={styles.blueContainerClass}>
            <SkillsModalViewer skills={JobObjects.Bera.beraJob_1} jobTitle={JobObjects.Bera.beraJobNames.jobName_1}/>
            <SkillsModalViewer skills={JobObjects.Bera.beraJob_2} jobTitle={JobObjects.Bera.beraJobNames.jobName_2}/>
                </div>

                <div className={styles.blueContainerClass2}>
            <SkillsModalViewer skills={JobObjects.Bera.beraJob_3} jobTitle={JobObjects.Bera.beraJobNames.jobName_3}/>
            <SkillsModalViewer skills={JobObjects.Bera.beraJob_4} jobTitle={JobObjects.Bera.beraJobNames.jobName_4}/>
                </div>
            </div>
        </div>

        </div>
    </div>
        {/* Large Layout Container End */}

<div className={styles.smallGridContainer}>
<div className={styles.smallLayoutContainer}>
    <SkillsAccordion />
</div>
</div>

  </div>



);

export default modalIO;