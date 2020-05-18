import styled from "@xstyled/styled-components";

export const StyledIntroductionWrapper = styled.div`
    width: 100%;
    height: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
`;

export const StyledIntroduction = styled.div`
    width: 45%;
    display: block;
    position: absolute;
    margin: 200px 50px;
`;

export const StyledHello = styled.h1`
    color: #000;
    font-size: 32pt;
`;

export const StyledOccupation = styled.h1`
    color: #000;
    font-size: 18pt;
    margin: 40px;
`;

export const StyledButtonCvDownload = styled.button`
    width: 145px;
    height: 35px;
    color: #000;
    border: 1px solid #000;
    background: 0 0!important;
    text-align: center;
    font-size: 14px;
    
    svg {
    margin-left: 5px;
    }
    
    :hover {
        background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
        background-color: #dfdfdf;
    }
    
    :active {
        position: relative;
        top: 1px;
    }
`;