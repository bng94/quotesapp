import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import {
  StyledContainer,
  StyledSwiperContainer,
} from "../styles/Container.styled";
import {
  StyledQuotesSwiperHeader,
  StyledQuotesWithBgImgSwiperSlide,
  StyledGlassQuotesInfoContainer,
} from "../styles/Quotes.styled";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import bgImage from "../../image/van-mendoza-r7YZXv5f5cc-unsplash.jpg";
import { useEffect, useState } from "react";
import { StyledButton } from "../styles/Button.styled";
import { Helmet } from "react-helmet";

const initialAPI = `https://api.quotable.io/quotes?tags=inspirational&maxLength=55&limit=10`;

const famousAPI =
  "https://api.quotable.io/quotes?tags=famous-quotes&maxLength=40&limit=10";

const QuotesPage = (props) => {
  const [quotesArray, setQuotesArray] = useState([]);
  const [page, setPage] = useState(1);
  const [lastItem, setLastItem] = useState(0);
  const [apiCall, setApiCall] = useState(initialAPI);

  const getQuotes = async () => {
    const response = await fetch(`${apiCall}&page=${page}`);
    const data = await response.json();
    setLastItem(data.lastItemIndex);
    setPage(data.page);
    setQuotesArray((prevState) => [...prevState, ...data.results]);
  };
  useEffect(() => {
    getQuotes();
  }, [page]);

  const changeAPIcall = () => {
    if (lastItem === null) {
      setPage(1);
      const newAPI = apiCall === initialAPI ? famousAPI : initialAPI;
      setApiCall(newAPI);
    } else {
      setPage((prevState) => prevState + 1);
    }
    setQuotesArray((prevState) => []);
  };

  return (
    <StyledContainer>
      <Helmet>
        <title>Famous Quotes</title>
      </Helmet>
      <StyledSwiperContainer>
        <StyledQuotesSwiperHeader>
          <h1>Famous Quotes</h1>
          <p>
            Fetching Quotes from{" "}
            <a
              href={`https://api.quotable.io/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quotes API{" "}
            </a>{" "}
            currently a total of 10 quotes will be generated per call once on
            and will generate fetch a new Quotes API upon reaching the end of
            the{" "}
            <a href={apiCall} target="_blank" rel="noopener noreferrer">
              API Call
            </a>
            . Currently displaying{" "}
            {apiCall === initialAPI ? "Inspiration Quotes " : "Famous Quotes "}
            from Quotes API.
          </p>
          <StyledButton onClick={changeAPIcall}>Refresh Call</StyledButton>
        </StyledQuotesSwiperHeader>
        <Swiper
          spaceBetween={1}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          grabCursor="true"
          effect={"coverflow"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
        >
          {quotesArray.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <StyledQuotesWithBgImgSwiperSlide default bgImg={bgImage}>
                  <StyledGlassQuotesInfoContainer centered>
                    <ImQuotesLeft />
                    <p>{item.content}</p>
                    <ImQuotesRight
                      style={{
                        marginLeft: "auto",
                      }}
                    />
                    <p>- {item.author ? item.author : "Unknown"}</p>
                  </StyledGlassQuotesInfoContainer>
                </StyledQuotesWithBgImgSwiperSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSwiperContainer>
    </StyledContainer>
  );
};

export default QuotesPage;
