import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

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
