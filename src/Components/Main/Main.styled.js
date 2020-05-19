import styled from "@xstyled/styled-components";
import {device} from '../device';

export const StyledMainWrapper = styled.div`
    display: block;
    order: 1;
    padding-left: 20%;
    width: 80%;
    font-family: 'Montserrat', sans-serif;
    
  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;