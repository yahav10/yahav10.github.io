import styled from "@xstyled/styled-components";
import myImage from '../../Media/Images/TomImage.png';

export const StyledSidebar = styled.div`
    width: 20%;
    height: 700px;
    position: fixed;
    display: block;
    float: left;
    order: 0;
    justify-content: center;
    background-color: #f2f3f7;
    font-family: 'Montserrat', sans-serif;
    z-index: 100;
`;

export const StyledImage = styled.div`
    background-image: url(${myImage});
    width: 200px;
    height: 200px;
    padding: 2px 2px;
    margin: 30px auto;
    border-radius: 25% 10%;
`;

export const StyledName = styled.h1`
    color: #333333;
`;

export const StyledEmail = styled.h5`
    color: #333333;
    
    a {
        text-decoration: none;
        color: #333333;
      }
    
    svg {
        margin-right: 5px;
        }
`;

export const StyledMenu = styled.div`
    height: 150px;
    width: 200px;
    margin: 40px auto;
`;

export const StyledTestimonials = styled.div`
    height: 40px;
    width: 80%;
    color: #333333;
    margin: 60px auto;
    
    svg {
        height: 20px;
        position: relative;
        padding: 5px 5px;
    }
`;