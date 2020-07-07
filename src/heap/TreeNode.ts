// @ts-nocheck
function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}
class TreeNode {
  __index = 0;
  __value = '';
  __dir = 'mid';
  __lineN = 0;
  __lineIndex = 0;
  __uuid = uuid();
  parentNode = null;
  childLeft = null;
  childRight = null;
  position = {
    x: undefined,
    y: undefined
  }
  constructor(i, v, ln, li) {
    this.__index = i;
    this.__value = v;
    this.__dir = i !== 0 && (i + 1) % 2 === 0 ? 'left' : 'right';
    this.__lineN = ln;
    this.__lineIndex = li;
  }
  getPosition() {
    return this.position;
  }
  setPosition(position) {
    this.position = position;
  }
  getParentNode() {
    return this.parentNode;
  }
  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }
  getIndex() {
    return this.__index;
  }
  toString() {
    return `{
              __value: ${this.__value}, 
              parentNode: ${this.parentNode?.__value}, 
              childLeft: ${this.childLeft?.__value}, 
              childRight: ${this.childRight?.__value}
            }`
  }
}

export default TreeNode;