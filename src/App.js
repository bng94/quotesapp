import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/layout/Header";
import MotivatePage from "./components/pages/Motivate";
import MyQuotesPage from "./components/pages/MyQuotes";
import QuotesPage from "./components/pages/Quotes";
import { StyledContainer } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Globals.styled";

function App() {
  const theme = {
    colors: {
      white: "rgba(249, 249, 249,0.5)",
      secondary: "rgba(153,153,153, 0.7)",
      lightBabyBlue: "rgba(217, 231, 252, 1)",
      lightBlue: "rgba(119, 150, 203)",
      darkCyanBlue: "rgba(14, 33, 60)",
      navBackground: "rgba(2, 12, 27, 0.8)",
      background: "rgba(10,35,81)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158)", //100, 255, 218
      darkGreen: "rgba(133, 255, 226)", //100, 255, 218
      cyan: "rgba(0,255,255)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <StyledContainer>
          <Header />
          <Switch>
            <Route exact path="/quotesapp/">
              <QuotesPage />
            </Route>
            <Route path="/quotesapp/quotes">
              <MyQuotesPage />
            </Route>
            <Route path="/quotesapp/motivate">
              <MotivatePage />
            </Route>
          </Switch>
        </StyledContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
