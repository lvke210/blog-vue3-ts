export type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

export const isBottom = (distance: number) => {
  // 滚动过的距离
  const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  //窗口高度
  const windowHeight =
    document.compatMode == "CSS1Compat"
      ? document.documentElement.clientHeight
      : document.body.clientHeight;
  //获取页面文档的总高度
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
  return scrollTop + windowHeight + distance > documentHeight;
};
/**
 * 函数防抖
 * @param func 要防抖的函数
 * @param wait 防抖时间 默认500ms
 */
export interface DebouncedFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
}

export function throttle<T extends (...args: any) => any>(func: T, wait = 500): DebouncedFunc<T> {
  let leading = true;
  return function (this: void, ...args: Array<any>) {
    if (!leading) {
      return {};
    }
    leading = false;
    setTimeout(() => {
      leading = true;
    }, wait);
    return func.apply(this, args);
  };
}
export function debounce<T extends (...args: any) => any>(func: T, wait = 500) {
  let index: number | undefined;
  return function (this: void, ...args: Array<any>) {
    if (index) {
      window.clearTimeout(index);
      index = undefined;
    }
    index = window.setTimeout(() => {
      return func.apply(this, args);
    }, wait);
  };
}
