import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
  @media screen and (min-width: 48rem) {
    margin: 0 0 1rem;
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 500;
    color: #171717;
  }
`
const SubHeader = styled.h3`
  @media screen and (min-width: 48rem) {
    margin: 0 0 0.25rem;
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: bold;
    color: #171717;
  }
`
const Text = styled.p`
  @media screen and (min-width: 48rem) {
    margin: 0 0 1.5rem;
    font-family: Raleway;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #171717;
  }
`

export default () => {
  return (
    <div>
      <Header>DELIVERY</Header>

      <SubHeader>Free Next Day Delivery</SubHeader>
      <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
      <SubHeader>Collect-in-Store</SubHeader>
      <Text>Order online today and pick up your items in store as early as tomorrow</Text>
      <SubHeader>Free Returns</SubHeader>
      <Text>Enjoy free returns on your order</Text>
      <SubHeader>Free Gift Packaging</SubHeader>
      <Text>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Text>
    </div>
  );
};