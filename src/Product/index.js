import React from "react";
import Recommendations from "./Recommendations";
import SimilarOffers from "./SimilarOffers";
import Card from "./Card";
import Description from "./Description";
import Shipping from "./Shipping";
import Delivery from "./Delivery";

export default () => {
  return (
    <main className="container">
      <Card />
      <Description />
      <Shipping />
      <Delivery />
      <Recommendations />
      <SimilarOffers />
    </main>
  );
};
