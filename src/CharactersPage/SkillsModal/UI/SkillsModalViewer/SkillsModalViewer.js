import React, {Fragment} from 'react';

import SkillsModal from '../../SkillsModal';
import SkillsButtonController from '../SkillsButtonController/SkillsButtonController';


class ModalViewer extends React.Component {
    constructor(props) {
        super(props);

        {/* Pass skill props and modal visibility to true or false.*/}
        this.state = {
            showModal: false,
        };
    };
    showModalHandler = () => {
        this.setState({showModal:true});
    };
    closeModalHandler = () => {
        this.setState({showModal:false});
    };

    render() {
        return(
            <Fragment>
                <SkillsModal show={this.state.showModal} closeModal={this.closeModalHandler}
                             skills={this.props.skills} jobTitle={this.props.jobTitle}/>

                    {/* Pass skills from this.state objects
                {/* sends showAlbum value as props to ButtonController where button code resides
                When Button is clicked, showModalHandler method will execute.
                */}

                <SkillsButtonController showSkills={this.showModalHandler} buttonTitle={this.props.jobTitle}/>
            </Fragment>
        );
    }
}

export default ModalViewer;