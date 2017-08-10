import React from 'react';
import Subheading from '../common/Subheading'
import styled from 'styled-components'

const SimilarOffers = styled.section`
  margin-left: 1rem;
  margin-bottom: 4rem;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`
const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-family: Lora;
  font-weight: 400;
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.065rem;
  text-decoration: none;
  color: #000;
`

export default () => {
  return (
    <SimilarOffers>
      <Subheading>MORE FOR YOU</Subheading>
      
      <Link href="#">Men’s Black Trench Coats</Link>
      <Link href="#">Men’s Short Trench Coats</Link>
      <Link href="#">Men’s Long Trench Coats</Link>
    </SimilarOffers>
  );
};
