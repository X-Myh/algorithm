/**
 * author iWuzhi
 * date 2020-07-05 11:45:51
 */
// @ts-nocheck

import 'normalize.css';

import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
  /* padding: 24px; */
  & > h3:first-child {
    margin-top: 0;
  }
`;

const active = keyframes`
  from {
    fill: red;
  }
  to {
    fill: green;
  }
`;

export const Circle = styled.circle`
  fill: green;
  animation: ${active} 1s linear infinite ;
`;