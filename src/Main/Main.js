import React from 'react'
import Recommendations from './Recommendations/Recommendations'
import SimilarOffers from './SimilarOffers'
import Card from './Card/Card'
import Description from './Description/Description'
import Shipping from './Shipping'
import Delivery from './Delivery/Delivery'

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
