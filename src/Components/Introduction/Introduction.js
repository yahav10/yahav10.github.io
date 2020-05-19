import React from 'react';
import {
    StyledIntroductionWrapper,
    StyledIntroduction,
    StyledButtonCvDownload,
    StyledHello,
    StyledOccupation,
    StyledImage
} from "./Introduction.styled";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Introduction = () => {
    return (
        <StyledIntroductionWrapper id="home">
            <StyledIntroduction>
                <StyledHello>Hi! <br/>
                    I'm Tom</StyledHello>
                <StyledOccupation>Junior Software Engineer</StyledOccupation>
                <StyledButtonCvDownload className='myButton'>
                    Download CV
                    <FontAwesomeIcon icon={faDownload}/>
                </StyledButtonCvDownload>
            </StyledIntroduction>
            <StyledImage/>
        </StyledIntroductionWrapper>
    )};

export default Introduction;