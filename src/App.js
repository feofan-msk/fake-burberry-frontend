import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        <meta
          name="description"
          content="A refined car coat crafted in protective cotton gabardine."
        />
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </div>
  );
};
