
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
  StyledGlassQuotesInfoContainer,
  StyledQuotesSwiperHeader,
  StyledQuotesWithBgImgSwiperSlide,
} from "../styles/Quotes.styled";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import bgImage from "../../image/van-mendoza-r7YZXv5f5cc-unsplash.jpg";
import { Motivations } from "../../data/MotivateMeQuotes";

const MotivatePage = () => {
  const index = Math.floor(Math.random() * Motivations.length);
  const quotesArray = Motivations[index];

  return (
    <StyledContainer>
      <StyledSwiperContainer>
        <StyledQuotesSwiperHeader>
          <h1>Motivations</h1>
          <p>
            Interesting motivations and positive vibes that I discovered and
            like to share!
          </p>
        </StyledQuotesSwiperHeader>
        <Swiper
          spaceBetween={1}
          slidesPerView={"auto"}
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
          {quotesArray.quotes.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <StyledQuotesWithBgImgSwiperSlide default bgImg={bgImage}>
                  <StyledGlassQuotesInfoContainer centered>
                    <ImQuotesLeft />
                    <p>{item.line}</p>
                    <ImQuotesRight
                      style={{
                        marginLeft: "auto",
                      }}
                    />
                    <p>{item.content}</p>
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

export default MotivatePage;
