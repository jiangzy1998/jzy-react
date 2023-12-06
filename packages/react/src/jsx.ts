import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
  Type,
  Key,
  Ref,
  Props,
  ReactElementType,
  ElementType
} from 'shared/ReactTypes';

// ReactElement
const ReactElement = function (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props
): ReactElementType {
  const element = {
    // 通过 $$typeof 来判断是不是一个 ReactElement
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    // 和真实的 react 中的 ReactElement 进行区分
    __mark: 'jzy'
  };
  return element;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
  let key: Key = null;
  const props: Props = {};
  let ref: Ref = null;

  for (const prop in config) {
    const val = config[prop];
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val;
      }
      continue;
    }
    if (prop == 'ref') {
      if (val !== undefined) {
        ref = val;
      }
      continue;
    }

    // 是不是 config 自己的 prop, 而不是原型上的
    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }
  }

  const maybeChildrenLength = maybeChildren.length;
  if (maybeChildren) {
    if (maybeChildrenLength === 1) {
      props.children = maybeChildren[0];
    } else {
      props.children = maybeChildren;
    }
  }
  return ReactElement(type, key, ref, props);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jsxDEV = (type: ElementType, config: any) => {
  let key: Key = null;
  const props: Props = {};
  let ref: Ref = null;

  for (const prop in config) {
    const val = config[prop];
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val;
      }
      continue;
    }
    if (prop == 'ref') {
      if (val !== undefined) {
        ref = val;
      }
      continue;
    }

    // 是不是 config 自己的 prop, 而不是原型上的
    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }
  }
  return ReactElement(type, key, ref, props);
};

// // 暂时定义开发环境 jsxDEV 和 生产环境 jsx 一致
// // 真实的 React 中的 jsxDev 会输出更多的内容，更严格的检查
// export const jsxDEV = jsx;
