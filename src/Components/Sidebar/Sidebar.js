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
                <FontAwesomeIcon icon={faLinkedin}/>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faGithub}/>
            </StyledTestimonials>
        </StyledSidebar>
        )
};


export default Sidebar;
