import React, { Fragment } from 'react';
import styled from 'styled-components';

const Wave = styled.div`
  opacity: .4;
  position: absolute;
  left: 50%;
  background: #fd3838;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -150px;
  -webkit-transform-origin: 50% 48%;
  transform-origin: 50% 48%;
  border-radius: 43%;
  -webkit-animation: drift 3000ms infinite linear;
  animation: drift 3000ms infinite linear;
`;
const WaveTwo = styled(Wave)`
  -webkit-animation: drift 5000ms infinite linear;
  animation: drift 5000ms infinite linear;
`;
const WaveThree = styled(Wave)`
  -webkit-animation: drift 7000ms infinite linear;
  animation: drift 7000ms infinite linear;
  opacity: .1;
  background: yellow;
`;

export default ({ isLoading }) => (
  isLoading &&
  <Fragment>
    <Wave/>
    <WaveTwo/>
    <WaveThree/>
  </Fragment>
)
