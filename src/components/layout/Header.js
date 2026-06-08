import { Link } from "react-router-dom";
import { StyledHeader, StyledNavBar } from "../styles/layout/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavBar>
        <Link to="/quotesapp">Home</Link>
        <Link to="/quotesapp/quotes">Random Quotes</Link>
      </StyledNavBar>
    </StyledHeader>
  );
};

export default Header;
