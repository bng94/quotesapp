import { useEffect, useState } from "react";
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
  StyledQuoteSource,
  StyledQuotesWithBgImgSwiperSlide,
  StyledQuotesSwiperHeader,
  StyledModalGlassQuotesInfoContainer,
  StyledModalQuoteSource,
} from "../styles/Quotes.styled";
import axios from "axios";
import { StyledButton, StyledButtonGroup } from "../styles/Button.styled";
import Modal from "../UI/Modal";

const QuoteSliderContainer = (props) => {
  const [animeImg, setAnimeImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const getAnimeImg = async (anime) => {
    const animeName = anime === "Pokemon" ? "Pocket Monsters" : anime;
    const res = await axios.get(`https://kitsu.io/api/edge/anime`, {
      headers: {
        "Content-Type": "	application/json",
      },
      params: {
        "filter[text]": `${animeName}`,
        "filter[subtype]": "TV",
      },
    });
    console.log(res.data.data);
    console.log(res.data.data[0].attributes);
    const data = await res.data.data[0].attributes.posterImage.medium;
    setAnimeImg(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAnimeImg(props.anime);
  }, [props.anime]);

  useEffect(() => {}, [isLoading]);

  const pageLink = `https://myanimelist.net/anime.php?q=${props.anime
    .replaceAll(" ", " ")
    .replaceAll("/", " ")
    .replaceAll(";", " ")
    .replaceAll(".", " ")
    .replaceAll("!", " ")
    .replaceAll("  ", " ")}`
    .replace("/anime/-", "/anime/")
    .replace(/-$/, "");

  const showModalOverlay = () => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
  };

  const hideModalOverlay = () => {
    document.body.style.overflow = "scroll";
    setShowModal(false);
  };

  return (
    <StyledQuotesWithBgImgSwiperSlide
      className="anime-poster"
      bgImg={
        props.hideBg && !props.defaultBg
          ? ""
          : props.defaultBg && !props.hideBg
          ? "https://images.unsplash.com/photo-1603793516210-5cf879f819af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80"
          : animeImg
          ? animeImg
          : !props.anime &&
            props.quote &&
            "https://placewaifu.com/image/350/500"
      }
    >
      {!isLoading && animeImg ? (
        <>
          <StyledGlassQuotesInfoContainer darkGlass>
            <h2>{props.character}</h2>
            {props.quote.length > 300 ? (
              <p>
                {props.quote.slice(0, 300)}...
                <span onClick={showModalOverlay}>see more</span>
              </p>
            ) : (
              <p>{props.quote}</p>
            )}
          </StyledGlassQuotesInfoContainer>
          {showModal && (
            <Modal onClose={hideModalOverlay}>
              <StyledModalGlassQuotesInfoContainer darkGlass>
                <h2>{props.character}</h2>
                <p>{props.quote}</p>
                <StyledModalQuoteSource>
                  <span>Anime:</span>{" "}
                  <a href={pageLink} target="_blank" rel="noopener noreferrer">
                    {props.anime}{" "}
                  </a>
                </StyledModalQuoteSource>
              </StyledModalGlassQuotesInfoContainer>
            </Modal>
          )}
          <StyledQuoteSource>
            Anime:{" "}
            <a href={pageLink} target="_blank" rel="noopener noreferrer">
              {props.anime}{" "}
            </a>
          </StyledQuoteSource>{" "}
        </>
      ) : !isLoading && props.quote ? (
        <>
          <StyledGlassQuotesInfoContainer>
            <h2>{props.character}</h2>
            <p>{props.quote}</p>
          </StyledGlassQuotesInfoContainer>
          <StyledQuoteSource>
            Anime:{" "}
            {props.anime ? (
              <a href={pageLink} target="_blank" rel="noopener noreferrer">
                {props.anime}{" "}
              </a>
            ) : (
              "N/A"
            )}
          </StyledQuoteSource>{" "}
        </>
      ) : (
        <div>
          <p style={{ fontSize: "1rem", fontWeight: "500", color: "white" }}>
            Loading...{" "}
          </p>
        </div>
      )}
    </StyledQuotesWithBgImgSwiperSlide>
  );
};

const AnimeQuotesPage = (props) => {
  const [quotesArray, setQuotesArray] = useState([]);
  const [disabledGlassQuotes, setDisabledGlassQuotes] = useState(false);
  const [disabledPoster, setDisabledPoster] = useState(false);
  const [defaultPoster, setDefaultPoster] = useState(false);

  const getAnimeQuotes = async () => {
    if (quotesArray.length >= 50) return;
    const response = await fetch("https://animechan.vercel.app/api/quotes");
    const data = await response.json();
    setQuotesArray((prevState) => [...prevState, ...data]);
  };

  useEffect(() => {
    getAnimeQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(quotesArray);
  }, [quotesArray]);

  const style = {
    ".swiper-slide-active": {
      span: {
        display: "block!important",
      },
    },
  };

  return (
    <StyledContainer>
      <StyledSwiperContainer noBg hideQuotes={disabledGlassQuotes}>
        <StyledQuotesSwiperHeader>
          <h1>Anime Quotes</h1>
          <StyledButtonGroup>
            <StyledButton
              onClick={() => {
                setDisabledGlassQuotes((prevState) => !prevState);
                setDisabledPoster(false);
                setDefaultPoster(false);
              }}
            >
              {disabledGlassQuotes ? "Show Quotes" : "Hide Quotes"}
            </StyledButton>
            <StyledButton
              onClick={() => {
                setDefaultPoster((prevState) => !prevState);
                setDisabledGlassQuotes(false);
                setDisabledPoster(false);
              }}
            >
              {defaultPoster ? "Kitsu API Posters" : "Default Posters"}
            </StyledButton>
          </StyledButtonGroup>
        </StyledQuotesSwiperHeader>
        <Swiper
          spaceBetween={1}
          slidesPerView={"auto"}
          onReachEnd={getAnimeQuotes}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect={"coverflow"}
          grabCursor="true"
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
            console.log(item);
            return (
              <SwiperSlide key={index} style={style}>
                <QuoteSliderContainer
                  quote={item.quote}
                  anime={item.anime}
                  character={item.character}
                  hideBg={disabledPoster}
                  defaultBg={defaultPoster}
                  disabled={disabledGlassQuotes}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <StyledQuotesSwiperHeader>
          <p>
            Quotes are generated and randomized from
            <a
              href="https://animechan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Animechan API{" "}
            </a>
            and the poster images provided from
            <a
              href="https://kitsu.docs.apiary.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Kitsu API
            </a>
            .
          </p>
          <p>
            Reaching end of the swiper, API will be recalled and load additional
            10 quotes every time.
          </p>
        </StyledQuotesSwiperHeader>
      </StyledSwiperContainer>
    </StyledContainer>
  );
};

export default AnimeQuotesPage;
