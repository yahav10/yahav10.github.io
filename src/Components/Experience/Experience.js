import React from 'react';
import {
    StyledExperienceWrapper,
    StyledExperienceHeadline,
    StyledExperienceTimelineWrapper,
    StyledExperienceTimeline,
    StyledLogos,
    StyledCyrenLogo,
    StyledCyren2Logo,
    StyledNextLogo
} from "../Experience/Experience.styled";
import './Experience.css';
import Fade from 'react-reveal/Fade';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


const Experience = () => {
    return (
        <StyledExperienceWrapper id="experience">
            <Fade top>
                <StyledExperienceHeadline>
                    Experience
                </StyledExperienceHeadline>
            </Fade>
            <StyledExperienceTimelineWrapper>
            <StyledExperienceTimeline>
                <VerticalTimeline layout={"1-column"}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2019 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#f2f3f7' }}
                    >
                        <h4 className="vertical-timeline-element-title">Full Stack Engineer</h4>
                        <p>
                            As a Full Stack Engineer, I am responsible for maintaining our cloud SaaS security product from Frontend and
                            Backend aspects. Developing new features for our Email security product.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018 - 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#f2f3f7' }}
                    >
                        <h4 className="vertical-timeline-element-title">Automation Engineer</h4>
                        <p>
                            As an Automation Engineer, I implemented and maintained testing automation tools and regression testing
                            using Selenium IDE to increase the testing efficiency for the company applications.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#f2f3f7' }}
                    >
                        <h4 className="vertical-timeline-element-title">QA Engineer</h4>
                        <p>
                            As a QA, I engaged in the development, testing, and integration of company’s products. Responsible for
                            an in-house testing and integration in a Waterfall development environment.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#f2f3f7' }}
                    >
                        <h4 className="vertical-timeline-element-title">Support Engineer</h4>
                        <p>
                            Responsible for supporting the company's clients at all levels as part of a support team.
                            Test new company’s products and write software scripts for clients and system.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </StyledExperienceTimeline>
                <Fade right>
                <StyledLogos>
                    <StyledCyrenLogo/>
                    <StyledCyren2Logo/>
                    <StyledNextLogo/>
                    <StyledNextLogo/>
                </StyledLogos>
                </Fade>
            </StyledExperienceTimelineWrapper>
        </StyledExperienceWrapper>
    )};

export default Experience;

