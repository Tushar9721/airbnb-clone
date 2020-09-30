import React from "react";
import "./App.css";
import Home from "./Home.js";
import Header from "./Header.js";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
