import styled from "styled-components";

export const StyledQuotesSwiperHeader = styled.div`
  font-size: 36px;
  margin: auto auto 1vw auto;
  color: ${(props) => props.theme.colors.lightBabyBlue};

  h1 {
    font-size: 1em;
  }
  p {
    font-size: 0.475em;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    width: 90%;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
    width: 95%;
  }
`;

export const StyledQuotesSwiperSlide = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 0 20px;
  position: relative;
  p {
    font-size: 3rem;
  }
`;

export const StyledQuotesWithBgImgSwiperSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: ${(props) => props.bgImg && `url(${props.bgImg})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  height: ${(props) =>
    props.default ? "524px" : props.bgImg ? "550px" : "500px"};
  padding: 0 20px;
  position: relative;
  p {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    height: ${(props) => (props.default ? "524px" : "450px")};
  }
`;

export const StyledGlassQuotesInfoContainer = styled.div`
  display: flex;
  display: ${(props) => props.noDisplay && "none"};
  background: ${(props) =>
    props.darkGlass ? "rgba(255,255,255,0.9)" : "rgba(255, 255, 255, 0.4)"};
  backdrop-filter: blur(0px);
  color: ${(props) =>
    props.darkGlass ? props.theme.colors.lightBlue : "white"};
  flex-direction: column;
  text-align: ${(props) => (props.centered ? "center" : "left")};
  padding: 1vw;
  font-weight: 500;

  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    span {
      cursor: pointer;
      color: ${(props) => props.theme.colors.green};
    }
  }
  :hover {
    background: rgba(255, 255, 255, 0.5);
    color: ${(props) =>
      props.darkGlass ? props.theme.colors.darkCyanBlue : "white"};
    font-weight: ${(props) => (props.darkGlass ? 700 : 500)};
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const StyledModalGlassQuotesInfoContainer = styled.div`
  display: flex;
  display: ${(props) => props.noDisplay && "none"};
  background: ${(props) =>
    props.darkGlass ? "rgba(255,255,255,0.9)" : "rgba(255, 255, 255, 0.4)"};
  backdrop-filter: blur(0px);
  color: ${(props) =>
    props.darkGlass ? props.theme.colors.lightBlue : "white"};
  flex-direction: column;
  text-align: ${(props) => (props.centered ? "center" : "left")};
  padding: 1vw;
  font-weight: 500;
  text-align: left;

  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const StyledModalQuoteSource = styled.div`
  font-style: italic;
  font-weight: 500;
  left: 0;
  z-index: 100;
  font: small-caption;
  padding: 0.5rem 0 0 0;

  a {
    text-decoration: none;
    :visited,
    :active,
    :link {
      color: ${(props) => props.theme.colors.green};
    }
    :hover {
      color: ${(props) => props.theme.colors.darkGreen};
    }
  }
`;

export const StyledSpanQuotes = styled.span`
  text-align: left;
  h2 {
    font-size: 1rem;
  }
  p {
    font-size: 0.7rem;
  }
`;

export const StyledQuoteSource = styled.div`
  position: absolute;
  font-style: italic;
  font-weight: 500;
  padding: 5px;
  bottom: 0;
  left: 0;
  z-index: 100;
  font: small-caption;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 350px;
  max-width: 100%;
  text-align: left;

  a {
    text-decoration: none;
    :visited,
    :active,
    :link {
      color: ${(props) => props.theme.colors.green};
    }
    :hover {
      color: ${(props) => props.theme.colors.darkGreen};
    }
  }
`;
