import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Gallery from './Gallery';
import Info from './Info';
import Description from './Description';
import Photos from './Photos';
import SectionBtn from '../../common/SectionBtn';
import Delivery from './Delivery';
import Recommendations from './Recommendations';
import SimilarOffers from './SimilarOffers';

const Card = styled.div`
  background-color: transparent;
  @media screen and (min-width: 62rem) {
    // background-color: #d4bdad;
  }
`;
const Title = styled.h1`
  margin: 1rem 0;
  font-family: 'Lora';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  color: #171717;
  @media screen and (min-width: 48rem) {
    margin: 1.5rem 0.5rem 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;
const Shipping = styled.section`
  padding: 2rem 0;
  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  componentDidMount() {
    const url = `https://erodionov-burberry-fake-api.now.sh/v1/products/${this.props.match.params
      .category}/${this.props.match.params.section}`;
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          recommendedProducts: json.items.slice(-4),
          product: json.items.find(j => j.slug === this.props.match.params.id),
        });
        // this.setState({ // заготовка под рекомендации
        //   recommendedProducts: json.items.map(
        //     j => this.state.product.linkedProductIds.map(recId => recId === j.id),
        //   ),
        // });
      })
      .catch((response) => {
        const { status, body } = response;
        const error = { status, body };
        throw error;
      });
  }

  render() {
    const multiPrice = this.state.product.multiCurrencyPrices || {};
    const priceRub = multiPrice.RUB || {};

    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta
            name="description"
            content="A refined car coat crafted in protective cotton gabardine."
          />
        </Helmet>

        <Card>
          <main className="container">
            <Title>{this.state.product.title}</Title>

            <div className="row">
              <div className="col-xs-12 col-md-7 col-lg-6">
                <Gallery images={this.state.product.images} />
              </div>

              <div className="col-xs-12 col-md-5 col-lg-6">
                <Info
                  title={this.state.product.title}
                  id={this.state.product.id}
                  price={priceRub / 100}
                  colours={this.state.product.colours}
                  sizes={this.state.product.sizes}
                />
              </div>
            </div>
          </main>
        </Card>

        <div className="container">
          <Description
            content={this.state.product.description + this.state.product.details}
            images={this.state.product.images}
          />
          <Photos images={this.state.product.images} />
          <Shipping>
            <SectionBtn>DELIVERY</SectionBtn>
          </Shipping>
          <Delivery />
          <Recommendations recommendedProducts={this.state.recommendedProducts} />
          <SimilarOffers />
        </div>
      </div>
    );
  }
}

Show.propTypes = {
  match: PropTypes.node.isRequired,
};

export default Show;
