/* eslint no-unused-vars: [0] */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Description from './Description';
import Card from '../Card';
import LoadBtn from './LoadBtn';

const CategoryTitle = styled.h2`
  padding: ${props => (!props.children ? '1rem' : '2rem 0 1rem')};
  margin: 0;

  font-family: Lora;
  font-weight: 400;
  font-size: 1rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding: ${props => (!props.children ? '1rem' : '4rem 0 2rem')};
    font-size: 1.25rem;
  }
`;
const HrLine = styled.hr`
  margin: 2rem 0 1rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    margin-top: 2rem;
  }
`;
const Loader = styled.div`
  padding: 2rem 0 5rem;
  text-align: center;
  @media screen and (min-width: 48rem) {
    margin-top: 3rem;
  }
`;
const LoadTitle = styled(CategoryTitle)`
  margin: 0;
  padding: 0 0 1rem;
  @media screen and (min-width: 48rem) {
    padding-bottom: 2rem;
  }
`;
const Overlay = styled.div`
  position: absolute;
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: #000000;
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0.3;
`;

class List extends Component {
  state = {
    isOverlayVisible: false,
    title: '',
    description: '',
    products: [],
  };

  componentDidMount() {
    const url = 'https://erodionov-burberry-fake-api.now.sh/v1/products/men/suits';
    fetch(url)
      .then(response => response.json())
      .then(json =>
        this.setState({
          title: json.title,
          description: json.description,
          products: json.items,
        }),
      )
      .catch((response) => {
        const { status, body } = response;
        const error = { status, body };
        throw error;
      });
  }

  toggleOverlay = () => {
    this.setState(prevState => ({
      isOverlayVisible: !prevState.isOverlayVisible,
    }));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Men’s clothing | Burberry</title>
          <meta
            name="description"
            content="Menswear collection for the season. Knitwear, sweatshirts, oversized cabans"
          />
        </Helmet>

        <Description
          title={this.state.title}
          description={this.state.description}
          onFilterClick={this.toggleOverlay}
        />
        <div style={{ position: 'relative' }}>
          <div className="container">
            <CategoryTitle />

            <div className="row">
              {this.state.products.map(product => (
                <div className="col-xs-6 col-md-3" key={product.id}>
                  <Card
                    slug={product.slug}
                    title={product.title}
                    colorsAmount={product.colours.length}
                    price={product.multiCurrencyPrices.RUB / 100}
                    image={product.images[0]}
                    id={parseInt(product.id, 10)}
                  />
                </div>
              ))}

              {/* <HrLine /> */}
            </div>
          </div>

          <Loader>
            <LoadTitle>Showing 8 of 17</LoadTitle>
            <LoadBtn>View 9 more</LoadBtn>
          </Loader>

          <Overlay visible={this.state.isOverlayVisible} />
        </div>
      </div>
    );
  }
}

export default List;
