import React from "react";
import styled from "@xstyled/styled-components";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


export const StyledMenu = styled.h4`
    color: #333333;
    
    a {
        text-decoration: none;
    }
    
    a:visited {
        color: inherit;
        text-decoration: none;
    }
    
    a:hover {
        border-bottom: 1px solid #2c98f0;
    } 
    
    a:active {
        color: #2c98f0;
        border-bottom: 1px solid #2c98f0;
    }
    
    ul {
        padding: 0;
        list-style-type: none;
    }
    
    li {
        list-style: none;
        margin: 10px auto;
    }
`;

const SimpleList = () => {
    return (
        <StyledMenu>
            <Router>
                <ul>
                    <li>
                        <Link smooth to="/#home">Introduction</Link>
                    </li>
                    <li>
                        <Link smooth to="/about#about">About</Link>
                    </li>
                    <li>
                        <Link smooth to="/skills#skills">Skills</Link>
                    </li>
                    <li>
                        <Link smooth to="/experience#experience">Experience</Link>
                    </li>
                    <li>
                        <Link smooth to="/education#education">Education</Link>
                    </li>
                    <li>
                        <Link smooth to="/contact#contact">Contact</Link>
                    </li>
                </ul>
            </Router>
        </StyledMenu>
)};

export default SimpleList;