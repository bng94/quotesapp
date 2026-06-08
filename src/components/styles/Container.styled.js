import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: auto;
`;

export const StyledSwiperContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 100px;
  }

  .swiper-slide {
    background: ${(props) => props.noBg && "none"};
    box-shadow: ${(props) => props.noBg && "none"};

    span {
      display: "none";
    }
  }
  .anime-poster {
    div:first-child {
      display: ${(props) => props.hideQuotes && "none"};
    }
  }
  .swiper-slide-active {
    span {
      display: ${(props) => props.hideQuotes && "block"};
    }
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: 20px;
    }
  }
`;
