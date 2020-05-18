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
                    My name's Tom. I'm a web designer and developer based in Israel.
                    I have 4 years in the Cyber Security industry and high-level proficiency in the following programs: Javascript and Python.<br/>
                    I've started the bottom of the chain, first as a NOC Engineer, Support, QA, Automation and now as Front End developer.<br/>
                    I am familiar and experienced with Web Application Architecture and worked with a number of successful development teams both on
                    development and QA aspects.
                    Outside of work I have a beautiful wife and 2 wonderful kids, love to spend my time with my family, friends and playing ball.
                </StyledAbout>
            </Fade>
        </StyledAboutWrapper>
    )};

export default About;
