import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Description from './Description';
import Card from '../Card';
import LoadBtn from './LoadBtn';
import loadList from '../actions/loadList';
import Spinner from '../../common/Spinner';

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
// const HrLine = styled.hr`
//   margin: 2rem 0 1rem;
//   border: none;
//   border-bottom: 1px solid #c6c6c6;

//   @media screen and (min-width: 48rem) {
//     margin-top: 2rem;
//   }
// `;
const Loader = styled.div`
  padding: 2rem 0 2rem;
  text-align: center;
  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
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
  transition: opacity 0.2s ease-out;
  position: absolute;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  background-color: #000000;
  height: 100%;
  width: 100%;
  top: 0;
  opacity: ${props => (props.visible ? 0.3 : 0)};
`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverlayVisible: false,
    };
  }

  componentDidMount() {
    this.props.load(
      `v1/products/${this.props.match.params.category}/${this.props.match.params.section}`,
    );
  }

  toggleOverlay = () => {
    this.setState(prevState => ({
      isOverlayVisible: !prevState.isOverlayVisible,
    }));
  };

  render() {
    const { list, isLoading } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${list.title} | Burberry`}</title>
          <meta name="description" content={list.description} />
        </Helmet>
        {isLoading ? (
          <Spinner />
        ) : (
          <section>
            <Description
              title={list.title}
              description={list.description}
              onFilterClick={this.toggleOverlay}
            />

            <div style={{ position: 'relative' }}>
              <div className="container">
                <CategoryTitle />

                <div className="row">
                  {list.items &&
                    list.items.map(product => (
                      <div className="col-xs-6 col-md-3" key={product.id}>
                        <Card
                          to={`/${this.props.match.params.category}/${this.props.match.params
                            .section}/${product.slug}`}
                          title={product.title}
                          coloursAmount={product.colours.length}
                          price={product.multiCurrencyPrices.RUB / 100}
                          image={`${product.images[0]}?$BBY_V2_ML_3X4$&hei=866&wid=650`}
                          id={parseInt(product.id, 10)}
                        />
                      </div>
                    ))}

                  {/* <HrLine /> */}
                </div>
              </div>

              {list.total > list.limit && (
                <Loader>
                  <LoadTitle>Showing 8 of 17</LoadTitle>
                  <LoadBtn>View 9 more</LoadBtn>
                </Loader>
              )}

              <Overlay visible={this.state.isOverlayVisible} />
            </div>
          </section>
        )}
      </div>
    );
  }
}

List.propTypes = {
  match: PropTypes.node.isRequired,
  load: PropTypes.func.isRequired,
  list: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  list: state.products.list.content,
  isLoading: state.products.list.isLoading,
});

const mapDispatchToProps = dispatch => ({
  load: path => dispatch(loadList(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
