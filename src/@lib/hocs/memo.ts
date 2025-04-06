import { ComponentType, createElement } from "react";
import { shallowEquals } from "../equalities";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  // 직접만든 훅으로 구현
  let prevProps: P | null = null;
  let prevResult: ReturnType<typeof createElement>;
  return (props: P) => {
    if (prevProps && _equals(prevProps, props)) {
      return prevResult;
    }
    prevProps = props;
    prevResult = createElement(Component, props);
    return prevResult;
  };
}
