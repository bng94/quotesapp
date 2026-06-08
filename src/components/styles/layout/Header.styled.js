import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1vw;
  @media (max-width: 768px) {
    padding: 1px;
  }
`;

export const StyledNavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 10px;
  a:first-child {
    margin-right: auto;
  }

`;

export const StyledNavMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;
