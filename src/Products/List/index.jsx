import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Descr from './Description';
import Card from '../Card';
import LoadBtn from './LoadBtn';

const CategoryTitle = styled.h2`
  padding: 2rem 0 1rem 0rem;
  margin: 0;
  font-family: Lora;
  font-weight: 400;
  font-size: 1rem;
`;
const HrLine = styled.hr`
  margin: 1rem 0 1rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;
`;
const Loader = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  text-align: center;
`;
const LoadTitle = styled(CategoryTitle)`padding: 0 0 1rem;`;

export default () =>
  (<div>
    <Helmet>
      <title>Men’s clothing | Burberry</title>
      <meta
        name="description"
        content="Menswear collection for the season. Knitwear, sweatshirts, oversized cabans"
      />
    </Helmet>
    <Descr />
    <div className="container">
      <CategoryTitle>Heritage Trench Coats</CategoryTitle>
      <div className="row">
        <div className="col-xs-6">
          <Card
            href="./index.jsx"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors_number={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_9X16$&hei=196&wid=144"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6">
          <Card
            href="./index.jsx"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors_number={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_9X16$&hei=196&wid=144"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6">
          <Card
            href="./index.jsx"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors_number={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_9X16$&hei=196&wid=144"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6">
          <Card
            href="./index.jsx"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors_number={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_9X16$&hei=196&wid=144"
            alt="Long Heritage Trench Coat"
          />
        </div>
      </div>

      <HrLine />

      <CategoryTitle>Single Breasted Trench Coats</CategoryTitle>
      <div className="row">
        <div className="col-xs-6">
          <Card
            href="./index.jsx"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors_number={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_9X16$&hei=196&wid=144"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6">
          <Card
            href="./index.jsx"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors_number={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_9X16$&hei=196&wid=144"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6">
          <Card
            href="./index.jsx"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors_number={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_9X16$&hei=196&wid=144"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6">
          <Card
            href="./index.jsx"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors_number={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_9X16$&hei=196&wid=144"
            alt="Long Heritage Trench Coat"
          />
        </div>
      </div>
    </div>
    <Loader>
      <LoadTitle>Showing 8 of 17</LoadTitle>
      <LoadBtn>View 9 more</LoadBtn>
    </Loader>
  </div>);
