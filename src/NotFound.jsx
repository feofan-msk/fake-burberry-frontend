import React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`padding-left: 10%;`;

export default () => (
  <NotFound>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </NotFound>
);
