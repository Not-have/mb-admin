/* eslint-disable regexp/no-unused-capturing-group */
/* eslint-disable no-new */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
// copy to vben-admin

const { toString } = Object.prototype;

export const is = (val: unknown, type: string) =>
  toString.call(val) === `[object ${type}]`;

export const isDef = <T = unknown>(val?: T): val is T => val !== undefined;

export const isUnDef = <T = unknown>(val?: T): val is T => !isDef(val);

export const isObject = (val: any): val is Record<any, any> =>
  val !== null && is(val, "Object");

export const isEmpty = <T = unknown>(val: T): val is T => {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
};

export const isDate = (val: unknown): val is Date => is(val, "Date");

export const isNull = (val: unknown): val is null => val === null;

export const isNullAndUnDef = (val: unknown): val is null | undefined =>
  isUnDef(val) && isNull(val);

export const isNullOrUnDef = (val: unknown): val is null | undefined =>
  isUnDef(val) || isNull(val);

export const isNumber = (val: unknown): val is number => is(val, "Number");

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  is(val, "Promise") &&
  isObject(val) &&
  isFunction(val.then) &&
  isFunction(val.catch);

export const isString = (val: unknown): val is string => is(val, "String");

export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";

export const isBoolean = (val: unknown): val is boolean => is(val, "Boolean");

export const isRegExp = (val: unknown): val is RegExp => is(val, "RegExp");

export const isArray = (val: any): val is Array<any> =>
  val && Array.isArray(val);

export const isWindow = (val: any): val is Window =>
  typeof window !== "undefined" && is(val, "Window");

export const isElement = (val: unknown): val is Element =>
  isObject(val) && !!val.tagName;

export const isMap = (val: unknown): val is Map<any, any> => is(val, "Map");

export const isServer = typeof window === "undefined";

export const isClient = !isServer;

export const isUrl = (path: string): boolean => {
  try {
    new URL(path);

    return true;
  } catch {
    return false;
  }
};

export const isDark = (): boolean =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// 是否是图片链接
export const isImgPath = (path: string): boolean =>
  /(https?:\/\/|data:image\/).*?\.(png|jpg|jpeg|gif|svg|webp|ico)/i.test(path);

export const isEmptyVal = (val: any): boolean =>
  val === "" || val === null || val === undefined;
