import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/home/home";
import Shopbread from "./components/shopbread/shopbread";
import Navigation from "./components/navigation/navigation";
import About from "./components/about/about";
import Container from "react-bootstrap/Container";

// import ReactGA from "react-ga";
// ReactGA.initialize("UA-158563288-1");
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <Router>
        {/* <Navigation></Navigation> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shopbread} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
