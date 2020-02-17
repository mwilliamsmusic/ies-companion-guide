import React, {Fragment} from 'react';
const skillsListing = (props) => {

    {/* Accessing skills props passed in from skillsModelViewer. Displays Lists of Skills */}
    const skillsForJobs = Object.keys(props.skills)
        .map(skillsKey =>{
            return (
                <li key={skillsKey}>
                <span style={{textTransform:'capitalize'}}>{skillsKey}</span>:{props.skills[skillsKey]}
            </li>);
        });

    return(
    <Fragment>
        <h3>{props.jobTitle}</h3>
        <ul>
            {skillsForJobs}
        </ul>
    </Fragment>
    );
};

export default skillsListing;