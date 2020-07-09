import React from 'react';
import {
    StyledAboutWrapper,
    StyledAboutHeadline,
    StyledAbout
} from "../About/About.styled";
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <StyledAboutWrapper id="about">
            <Fade top>
            <StyledAboutHeadline>
                About
            </StyledAboutHeadline>
            </Fade>
            <Fade right>
                <StyledAbout>
                    My name's Tom Yahav and I'm a web designer and developer based in Israel.<br/>
                    I have 4 years experience in the Cyber Security industry and high-level proficiency in the following programs: <b>Javascript</b> and <b>Python.</b><br/>
                    Currently, working in <b>CYREN</b> company as a Front End developer during the last year.<br/>
                    I am familiar and experienced with Web Application Architecture and worked with a number of successful development teams both on
                    development and QA aspects.
                    Outside of work I have a beautiful wife and 2 wonderful kids, love to spend my time with my family, friends and sports.
                </StyledAbout>
            </Fade>
        </StyledAboutWrapper>
    )};

export default About;
