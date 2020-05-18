import React from 'react';
import {
    StyledSkillsWrapper,
    StyledSkillsHeadline,
    StyledSkills,
    StyledSkillsList
} from "../Skills/Skills.styled";
import Fade from 'react-reveal/Fade';
import { Line } from 'rc-progress';


const Skills = () => {
    return (
        <StyledSkillsWrapper id="skills">
            <Fade top>
                <StyledSkillsHeadline>
                    My Skills
                </StyledSkillsHeadline>
            </Fade>
                <StyledSkills>
                    <StyledSkillsList>
                        <li>
                        <Fade left>
                            <p>React</p>
                            <Line percent="60" strokeWidth="1" strokeColor="#2c98f0" trailWidth="0.5" />
                        </Fade>
                        </li>
                        <li>
                        <Fade right>
                            <p>Javascript</p>
                            <Line percent="80" strokeWidth="1" strokeColor="#ec5453" trailWidth="0.5"/>
                        </Fade>
                        </li>
                        <li>
                        <Fade left>
                            <p>Python</p>
                            <Line percent="90" strokeWidth="1" strokeColor="#2fa499" trailWidth="0.5"/>
                        </Fade>
                        </li>
                        <li>
                        <Fade right>
                            <p>Javascript</p>
                            <Line percent="60" strokeWidth="1" strokeColor="#f9bf3f" trailWidth="0.5"/>
                        </Fade>
                        </li>
                    </StyledSkillsList>
                </StyledSkills>
        </StyledSkillsWrapper>
    )};

export default Skills;
