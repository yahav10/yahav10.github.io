import styled from "@xstyled/styled-components";
import cyrenLogo from '../../Media/Images/cyren-logo.png';
import nextLogo from '../../Media/Images/n9Logo.png';

export const StyledExperienceWrapper = styled.div`
    width: 100%;
    height: 1250px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
`;

export const StyledExperienceHeadline = styled.h1`
    width: 34%;
    font-size: 32pt;
    display: block;
    position: relative;
    padding-top: 15px;
`;

export const StyledExperienceTimelineWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const StyledExperienceTimeline = styled.div`
    width: 75%;
    font-size: 14pt;
    display: block;
    margin: 20px 0 0 25px;
`;

export const StyledLogos = styled.div`
    width: 25%;
    margin-right: 85px;
    position: relative;
`;

export const StyledCyrenLogo = styled.div`
    background-image: url(${cyrenLogo});
    width: 125px;
    height: 23px;
    margin-top: 130px;
`;

export const StyledCyren2Logo = styled.div`
    background-image: url(${cyrenLogo});
    width: 125px;
    height: 23px;
    margin-top: 245px;
`;

export const StyledNextLogo = styled.div`
    background-image: url(${nextLogo});
    width: 120px;
    height: 30px;
    margin-top: 240px;
`;