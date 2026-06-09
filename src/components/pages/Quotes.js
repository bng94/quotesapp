import {
  StyledContainer,
  StyledSwiperContainer,
} from "../styles/Container.styled";
import {
  StyledQuotesSwiperHeader,
  StyledQuotesWithBgImgSwiperSlide,
  StyledGlassQuotesInfoContainer,
  StyledQuoteSource,
  StyledModalGlassQuotesInfoContainer,
  StyledModalQuoteSource,
} from "../styles/Quotes.styled";
import { useEffect, useState } from "react";
import { StyledButton, StyledButtonGroup } from "../styles/Button.styled";
import { Helmet } from "react-helmet";
import axios from "axios";
import Modal from "../UI/Modal";

const API_URL = `https://api.animechan.io/v1/quotes/random`;

const QuotesPage = (props) => {
  const [quote, setQuote] = useState(null);
  const [rateLimited, setRateLimited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animeImg, setAnimeImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hideQuote, setHideQuote] = useState(false);
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

  const getQuote = async () => {
    setLoading(true);
    setRateLimited(false);
    setAnimeImg("");
    setIsLoading(true);
    setHideQuote(false);
    setShowModal(false);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.message) {
        setRateLimited(true);
        setQuote(null);
      } else if (data.status === "success") {
        setQuote(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch quote", err);
    } finally {
      setLoading(false);
    }
  };

  const showModalOverlay = () => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
  };

  const hideModalOverlay = () => {
    document.body.style.overflow = "scroll";
    setShowModal(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    if (quote?.anime?.name) {
      getAnimeImg(quote.anime.name);
    }
  }, [quote]);

  const pageLink = quote
    ? `https://myanimelist.net/anime.php?q=${quote.anime?.name
        .replaceAll("/", " ")
        .replaceAll(";", " ")
        .replaceAll(".", " ")
        .replaceAll("!", " ")
        .replaceAll("  ", " ")}`
    : "";

  return (
    <StyledContainer>
      <Helmet>
        <title>Anime Quote</title>
      </Helmet>
      <StyledSwiperContainer>
        <StyledQuotesSwiperHeader>
          <h1>Random Anime Quote</h1>
          <p>
            Fetching quotes from{" "}
            <a
              href="https://animechan.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anime Chan API
            </a>
          </p>
          <StyledButtonGroup>
            <StyledButton onClick={getQuote} disabled={loading}>
              {loading ? "Loading..." : "New Quote"}
            </StyledButton>
            {!rateLimited && quote && !isLoading && animeImg && (
              <StyledButton onClick={() => setHideQuote((prev) => !prev)}>
                {hideQuote ? "Show Quote" : "Hide Quote"}
              </StyledButton>
            )}
          </StyledButtonGroup>
        </StyledQuotesSwiperHeader>

        {rateLimited && (
          <p style={{ color: "orange", textAlign: "center", padding: "1rem" }}>
            Too many requests! Rate limit will reset in 1 hour.
          </p>
        )}

        {quote && (
          <div style={{ width: "300px", margin: "0 auto" }}>
            <StyledQuotesWithBgImgSwiperSlide
              className="anime-poster"
              bgImg={!isLoading && animeImg ? animeImg : ""}
              style={{ backgroundSize: "cover" }}
            >
              {!isLoading && animeImg ? (
                <>
                  <StyledGlassQuotesInfoContainer darkGlass noDisplay={hideQuote}>
                    <h2>{quote.character?.name ?? "Unknown"}</h2>
                    {quote.content.length > 300 ? (
                      <p>
                        {quote.content.slice(0, 300)}...
                        <span onClick={showModalOverlay}>see more</span>
                      </p>
                    ) : (
                      <p>{quote.content}</p>
                    )}
                  </StyledGlassQuotesInfoContainer>
                  {showModal && (
                    <Modal onClose={hideModalOverlay}>
                      <StyledModalGlassQuotesInfoContainer darkGlass>
                        <h2>{quote.character?.name ?? "Unknown"}</h2>
                        <p>{quote.content}</p>
                        <StyledModalQuoteSource>
                          <span>Anime:</span>{" "}
                          <a
                            href={pageLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {quote.anime?.name}
                          </a>
                        </StyledModalQuoteSource>
                      </StyledModalGlassQuotesInfoContainer>
                    </Modal>
                  )}
                </>
              ) : !isLoading && quote.content ? (
                <StyledGlassQuotesInfoContainer>
                  <h2>{quote.character?.name ?? "Unknown"}</h2>
                  <p>{quote.content}</p>
                </StyledGlassQuotesInfoContainer>
              ) : (
                <div>
                  <p style={{ fontSize: "1rem", fontWeight: "500", color: "white" }}>
                    Loading...
                  </p>
                </div>
              )}
            </StyledQuotesWithBgImgSwiperSlide>
            {!isLoading && quote.content && (
              <StyledQuoteSource style={{ position: "static", width: "100%", boxSizing: "border-box" }}>
                Anime:{" "}
                {quote.anime?.name ? (
                  <a href={pageLink} target="_blank" rel="noopener noreferrer">
                    {quote.anime.name}
                  </a>
                ) : (
                  "N/A"
                )}
              </StyledQuoteSource>
            )}
          </div>
        )}
      </StyledSwiperContainer>
    </StyledContainer>
  );
};

export default QuotesPage;
