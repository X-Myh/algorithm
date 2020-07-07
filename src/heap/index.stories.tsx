import * as React from 'react';

import HeapDescription from './description';
import HeapVisual from './visual';

export const Description = () => (
  <HeapDescription />
)

const initSourceList = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
export const Demo = () => (
  <HeapVisual initSourceList={initSourceList} />
);

export default {
  title: 'HeapVisual',
  component: HeapVisual,
};