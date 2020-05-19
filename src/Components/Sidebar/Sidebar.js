import React from 'react';
import SimpleList from '../Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {
    StyledSidebar,
    StyledEmail,
    StyledImage,
    StyledMenu,
    StyledName,
    StyledTestimonials
} from "./Sidebar.styled";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <StyledImage/>
            <StyledName>Tom Yahav</StyledName>
            <StyledEmail>
                <FontAwesomeIcon icon={faEnvelope}/>
                <a href={`mailto:tommyahav@gmail.com`}>tommyahav@gmail.com</a>
            </StyledEmail>
            <StyledMenu>
                <SimpleList/>
            </StyledMenu>
            <StyledTestimonials>
                <a href="https://www.linkedin.com/in/tom-yahav" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size='lg'/>
                </a>
                <a href="https://www.facebook.com/tommyahav" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size='lg'/>
                </a>
                <a href="https://github.com/yahav10" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size='lg'/>
                </a>
            </StyledTestimonials>
        </StyledSidebar>
        )
};


export default Sidebar;
