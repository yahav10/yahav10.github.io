import styled from "@xstyled/styled-components";

export const StyledContactWrapper = styled.div`
    width: 100%;
    height: 800px;
    padding-left: 10%;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const StyledContactHeadline = styled.h1`
    width: 44%;
    font-size: 32pt;
    display: block;
    position: relative;
    padding-top: 15px;
`;

export const StyledContactForm = styled.div`
    max-width: 500px;
    text-align: left;
    margin-left: 6.5%;
`;

export const StyledContactFormLabel = styled.div`
    text-align: left;
    margin: 10px 0;
`;

export const StyledContactFormInput = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #333333;
    padding: 10px 15px;
    margin-bottom: 15px;
    font-size: 14px;
    
    input:disabled {
        opacity: 0.4;
    }

    input[type="button"]:hover {
        transition: 0.3s all;
    }
`;

export const StyledContactSubmitButton = styled.button`
    display: block;
    appearance: none;
    margin-top: 40px;
    border: 1px solid #333;
    margin-bottom: 20px;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
    
    button[type="submit"],
        input[type="button"],
        input[type="submit"] {
        -webkit-appearance: none;
    }
    button[type="button"] {
        display: block;
        appearance: none;
        background: #333;
        color: white;
        border: none;
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius: 4px;
    }
`;

export const StyledContactFormMessage = styled.textarea`
    width: 500px;
    height: 100px;
    text-align: left;
`;