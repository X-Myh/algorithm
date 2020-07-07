/**
 * author iWuzhi
 * date 2020-07-05 12:21:34
 */

// @ts-nocheck
import * as d3 from 'd3';

import TreeNode from "./TreeNode";

const LEVEL_H = 40;
const LEVEL_W = 40;

export const getTreeNodeInfoByArray = (heapData) => {
  // 1. 总共有多高log2(n)
  const TREE_H = Math.ceil(Math.log2(heapData.length));

  // 2. 最后一行有多少个元素 2 ^ h
  const LAST_AMOUNT = Math.pow(2, TREE_H - 1);

  // 3. 最后一行宽度
  const ELE_GAP_W = 40,
    GROUP_GAP_W = 30;
  const LAST_LINE_W =
    (LAST_AMOUNT / 2) * ELE_GAP_W + (LAST_AMOUNT / 2 - 1) * GROUP_GAP_W;

  // 4. 计算第一个点的位置
  const ROOT_POINT = {
    x: LEVEL_W + LAST_LINE_W / 2 + 400,
    y: LEVEL_H,
  };

  const treeData = heapData.map((v, i) => {
    const ln = Math.floor(Math.log2(i + 1));
    return new TreeNode(i, v, ln, i + 1 - Math.pow(2, ln));
  });
  
  treeData.forEach((treeNode, i) => {
    if (i !== 0) {
      const parentIndex = Math.floor((i - 1) / 2);
      treeNode.setParentNode(treeData[parentIndex]);
    }
    if (i < heapData.length) {
      const childLeftIndex = 2 * (i + 1) - 1, childRightIndex = childLeftIndex + 1;
      treeNode.childLeft = treeData[childLeftIndex];
      treeNode.childRight = treeData[childRightIndex];
    }
    if (i === 0) {
      treeNode.setPosition(ROOT_POINT);
    } else {
      const absX = 40 * (10 / Math.pow(2, treeNode.__lineN));
      const ox = treeNode.__dir === "left" ? -absX : absX;
      treeNode.setPosition({
        x: treeNode.parentNode.position.x + ox,
        y: treeNode.parentNode.position.y + LEVEL_H,
      });
    }
  });
  const path = d3.path();
  treeData.forEach((treeNode, i) => {
    if (treeNode) {
      const { position, childLeft, childRight } = treeNode;
      if (childLeft) {
        path.moveTo(position.x, position.y);
        path.lineTo(childLeft.position.x, childLeft.position.y);
      }
      if (childRight) {
        path.moveTo(position.x, position.y);
        path.lineTo(childRight.position.x, childRight.position.y);
      }
    }
  });
  return {
    treeData,
    path
  };
};