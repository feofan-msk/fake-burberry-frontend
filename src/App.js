import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
