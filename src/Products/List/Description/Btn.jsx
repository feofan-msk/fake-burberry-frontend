import styled from 'styled-components';

import arrow from '../../../assets/arrow.svg';

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
    content: '';
    background-image: url(${arrow});
    background-size: 12px 6px;
    background-repeat: no-repeat;
    background-position: center right;
    padding-left: 1.25rem;
  }
`;
