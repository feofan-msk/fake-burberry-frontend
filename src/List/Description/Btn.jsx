import styled from 'styled-components';

import arrow from '../../assets/arrow.svg';

export default styled.button`
  padding: 1.5rem 1rem 1.5rem 0;

  border: none;
  background-color: transparent;
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;

  ::after {
    content: url(${arrow});
    padding-left: 0.5rem;
  }
`;
