/**
 * author iWuzhi
 * date 2020-07-05 11:48:39
 */
// @ts-nocheck

import * as React from "react";
import * as d3 from "d3";

import { getTreeNodeInfoByArray } from "./utils";

import { Container, Circle } from "./style";

import { Heapify } from '.';

const HeapVisual = ({ initSourceList }) => {
  const [sourceList, setSourceList] = React.useState(initSourceList);
  const refSource = React.useRef(sourceList);
  // 只要sourceList改变  就要重新生成tree info
  const { treeData, path } = getTreeNodeInfoByArray(refSource.current);
  const [actives, setActives] = React.useState([]);
  const swicthTwoNode = (node_1, node_2) => {
    const n1Index = node_1.__index;
    const n2Index = node_2.__index;
    const shallowCopySourceList = [...refSource.current];
    shallowCopySourceList[n1Index] = node_2.__value;
    shallowCopySourceList[n2Index] = node_1.__value;
    node_1.__value = node_2.__value;
    node_2.__value = shallowCopySourceList[n2Index];
    refSource.current = shallowCopySourceList;
    return shallowCopySourceList;
  };
  const startSwitch = (a1, a2) => {
    a1--;
    a2--;
    setActives([a1, a2]);
    setTimeout(() => {
      const nextList = swicthTwoNode(treeData[a1], treeData[a2]);
      setSourceList(nextList);
      setActives([]);
    }, 3000);
  };
  React.useEffect(() => {
    const effectList = [];
    Heapify([...sourceList], undefined, effectList);
    effectList.forEach((elist, i) => {
      setTimeout(() => {
        startSwitch(...elist);
      }, i * 4000);
    });
  }, []);
  return (
    <Container>
      <svg id="alv-heap" width="100%" height="302px">
        <path d={path.toString()} stroke="black" />
        {treeData.map((d, i) => {
          const { position, __value } = d;
          const circleStyle = {};
          if (!actives.includes(i)) circleStyle.animation = "none";
          return (
            <g key={d.__uuid}>
              <Circle
                cx={position.x}
                cy={position.y}
                r={12}
                strokeWidth={1}
                active={actives.includes(i)}
                stroke="#000"
                style={circleStyle}
                title={d.toString()}
              />
              <text
                x={position.x - 6}
                y={position.y + 4}
                fill="#fff"
                fontSize={12}
              >
                {__value}
              </text>
            </g>
          );
        })}
      </svg>
    </Container>
  );
};

export default HeapVisual;
