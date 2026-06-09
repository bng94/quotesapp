import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1vw 2vw;
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

export const StyledNavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  a {
    padding: 0.4rem 0.5rem;
  }
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
