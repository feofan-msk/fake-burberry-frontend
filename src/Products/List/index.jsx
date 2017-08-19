import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Descr from './Description';
import Card from '../Card';
import LoadBtn from './LoadBtn';

const CategoryTitle = styled.h2`
  padding: 2rem 0 1rem;
  margin: 0;

  font-family: Lora;
  font-weight: 400;
  font-size: 1rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding: 0;
    margin: 4rem 0 2rem;
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
  margin-top: 2rem;
  margin-bottom: 5rem;
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
        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Kensington – Mid-Length Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={1}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={1}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={1}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={1}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>
      </div>

      <HrLine />

      <CategoryTitle>Single Breasted Trench Coats</CategoryTitle>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Brighton – Longline Car Coat"
            label="Online Exclusive"
            ColoursAmount={7}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="The Brighton – Longline Car Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={1}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={3}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
            alt="Long Heritage Trench Coat"
          />
        </div>

        <div className="col-xs-6 col-md-3">
          <Card
            href="/men/clothing/id"
            title="The Westminster – Long Heritage Trench Coat"
            label="Relaxed fit"
            ColoursAmount={1}
            price={100000}
            src="https://assets.burberry.com/is/image/Burberryltd/3f123eb975f37da85e355636079a3cbf29b02e8a.jpg?$BBY_V2_ML_3X4$&hei=866&wid=650"
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
