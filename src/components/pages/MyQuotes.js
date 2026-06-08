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
import { FavoriteQuotes } from "../../data/FavoriteQuotes";
import {
  StyledQuoteSource,
  StyledQuotesSwiperHeader,
  StyledQuotesWithBgImgSwiperSlide,
  StyledGlassQuotesInfoContainer,
} from "../styles/Quotes.styled";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import bgImage from "../../image/van-mendoza-r7YZXv5f5cc-unsplash.jpg";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const MyQuotesPage = (props) => {
  const quotesArray = shuffle(FavoriteQuotes);

  return (
    <StyledContainer>
      <StyledSwiperContainer>
        <StyledQuotesSwiperHeader>
          <h1>Random Quotes</h1>
          <p>
            Over 300 quotes saved from collections of quotes contributes by
            myself, colleagues, friends and family found from online sources, tv
            shows and more.
          </p>
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
          {quotesArray.map((item) => {
            return (
              <SwiperSlide>
                <StyledQuotesWithBgImgSwiperSlide default bgImg={bgImage}>
                  <StyledGlassQuotesInfoContainer centered>
                    <ImQuotesLeft />
                    <p>{item.quote}</p>
                    <ImQuotesRight
                      style={{
                        marginLeft: "auto",
                      }}
                    />
                    <p>@{item.author ? item.author : "Unknown"}</p>
                  </StyledGlassQuotesInfoContainer>
                  <StyledQuoteSource>
                    Source: {item.source ? item.source : "N/A"}
                  </StyledQuoteSource>
                </StyledQuotesWithBgImgSwiperSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSwiperContainer>
    </StyledContainer>
  );
};

export default MyQuotesPage;
