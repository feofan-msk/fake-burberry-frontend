import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
  margin-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 0;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.color};
`;
function ColourBtn(props) {
  return (
    <Btn color={props.value} active={props.active} type="button">
      Change colour to {props.label}
    </Btn>
  );
}
ColourBtn.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
export default ColourBtn;
