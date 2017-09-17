import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Gallery from './Gallery';
import Info from './Info';
import Description from './Description';
import Photos from './Photos';
import SectionBtn from '../../common/SectionBtn';
import Delivery from './Delivery';
import Recommendations from './Recommendations';
import SimilarOffers from './SimilarOffers';
import fetchDataWithRedux from '../../actions';

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
    this.state = { activeColourIndex: 0 };
  }

  componentDidMount() {
    const url = `v1/products/${this.props.match.params.category}/${this.props.match.params
      .section}`;

    this.props.fetchDataWithRedux(`${url}/${this.props.match.params.id}`, 'product');
  }

  componentWillReceiveProps(newProps) {
    newProps.fetchDataWithRedux(
      `v1/products/${newProps.match.params.category}/${newProps.match.params.section}/${this.props
        .match.params.id}`,
    );
  }

  selectColour = (newColourIndex) => {
    this.setState({ activeColourIndex: newColourIndex });
  };

  render() {
    const { product } = this.props;
    const multiPrice = product.multiCurrencyPrices || {};
    const priceRub = multiPrice.RUB || {};

    return (
      <div>
        <Helmet>
          <title>{product.title}</title>
        </Helmet>

        <Card>
          <main className="container">
            <Title>{product.title}</Title>

            <div className="row">
              <div className="col-xs-12 col-md-7 col-lg-6">
                <Gallery
                  colours={product.colours}
                  activeColourIndex={this.state.activeColourIndex}
                />
              </div>

              <div className="col-xs-12 col-md-5 col-lg-6">
                <Info
                  title={product.title}
                  id={product.id}
                  price={priceRub / 100}
                  colours={product.colours}
                  activeColourIndex={this.state.activeColourIndex}
                  selectColour={this.selectColour}
                  sizes={product.sizes}
                />
              </div>
            </div>
          </main>
        </Card>

        <div className="container">
          <Description content={product.description + product.details} images={product.images} />
          <Photos images={product.images} />
          <Shipping>
            <SectionBtn>DELIVERY</SectionBtn>
          </Shipping>
          <Delivery />
          <Recommendations
            category={this.props.match.params.category}
            section={this.props.match.params.section}
            // recommendedProducts={this.props.list}
          />
          <SimilarOffers />
        </div>
      </div>
    );
  }
}

Show.propTypes = {
  match: PropTypes.node.isRequired,
  fetchDataWithRedux: PropTypes.func.isRequired,
  product: PropTypes.node.isRequired,
};

function mapStateToProps(state) {
  return {
    product: state.product,
    isFetching: state.isFetching,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDataWithRedux: bindActionCreators(fetchDataWithRedux, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
