import styled from "@xstyled/styled-components";
import myImage from '../../Media/Images/TomImage.png';

export const StyledIntroductionWrapper = styled.div`
    width: 100%;
    height: 700px;
    background-color: white;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    border-bottom: 1px solid black;
`;

export const StyledIntroduction = styled.div`
    width: 45%;
    margin: 200px 50px;
`;

export const StyledImage = styled.div`
    background-image: url(${myImage});
    width: 25%;
    height: 30%;
    padding: 2px 2px;
    margin: auto;
    border-radius: 25% 10%;
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