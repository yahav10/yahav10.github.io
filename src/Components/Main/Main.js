import React from 'react';
import {
    StyledMainWrapper
} from "./Main.styled";
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';

const Main = () => {
    return (
        <StyledMainWrapper>
            <Introduction/>
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
            <Contact/>
        </StyledMainWrapper>
    )};

export default Main;
