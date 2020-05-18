import React from 'react';
import {
    StyledEducationWrapper,
    StyledEducationHeadline,
    StyledEducationDegreeHeadline,
    StyledEducationDegreeDescription
} from "../Education/Education.styled";

const Education = () => {
    return (
        <StyledEducationWrapper id="education">
            <StyledEducationHeadline>Education</StyledEducationHeadline>
            <StyledEducationDegreeHeadline>B.Sc. Degree - Software Engineering - Shenkar College</StyledEducationDegreeHeadline>
            <StyledEducationDegreeDescription>
                Web Development Internship - Design and development of systems, web applications and web platforms.
            </StyledEducationDegreeDescription>
        </StyledEducationWrapper>
    )};
export default Education;