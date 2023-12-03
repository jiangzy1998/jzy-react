// 为了防止滥用 ReactElement，所以需用通过 Symbol 定义一个独一无二的值
// 判断当前宿主环境是否支持 Symbol
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
  ? Symbol.for('react.element')
  : 0xeac7;
