import React from 'react';
import styled from 'styled-components';
import Subheading from '../../common/Subheading';
import Card from '../Card';

const Recommendations = styled.section`
  margin: 3rem 0 1rem;
  @media screen and (min-width: 48rem) {
    margin: 1.25rem 0 0;
  }
  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

export default () =>
  (<Recommendations>
    <Subheading>WE RECOMMEND</Subheading>

    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          to="/men/clothing/id"
          title="Emroided Hooded Content For Three Lines"
          label="Relaxed fit"
          ColoursAmount={3}
          price={27000}
          src="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=628&wid=464"
          alt="Recommend 1"
        />
      </div>

      <div className="col-xs-6 col-md-3">
        <Card
          to="/men/clothing/id"
          title="Relaxed Fit Stretch Jeans Content For Three Lines"
          label="Relaxed fit"
          ColoursAmount={3}
          price={22500}
          src="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=628&wid=464"
          alt="Recommend 2"
        />
      </div>

      <div className="col-xs-6 col-md-3">
        <Card
          to="/men/clothing/id"
          title="Leather and House Check Content For Three Lines"
          label="Relaxed fit"
          ColoursAmount={3}
          price={120000}
          src="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=628&wid=464"
          alt="Recommend 3"
        />
      </div>

      <div className="col-xs-6 col-md-3">
        <Card
          to="/men/clothing/id"
          title="Leather Wingtip Check Content For Three Lines"
          label="Relaxed fit"
          ColoursAmount={3}
          price={46000}
          src="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=628&wid=464"
          alt="Recommend 4"
        />
      </div>
    </div>
  </Recommendations>);
