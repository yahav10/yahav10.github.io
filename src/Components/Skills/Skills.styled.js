import styled from "@xstyled/styled-components";

export const StyledSkillsWrapper = styled.div`
    width: 100%;
    padding-left: 10%;
    height: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
`;

export const StyledSkillsHeadline = styled.h1`
    width: 34%;
    font-size: 32pt;
    display: block;
    position: relative;
    padding-top: 15px;
`;

export const StyledSkills = styled.div`
    color: #000;
    font-size: 14pt;
    width: 80%;
    text-align: left;
    margin-left: 1%;
    line-height: 1.5;
`;

export const StyledSkillsList = styled.ul`
    list-style-type: none;
    
    li {
        margin: 5px auto;
        z-index: -1;
    }
`;