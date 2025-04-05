export const shallowEquals = <T>(objA: T, objB: T): boolean => {
  // 타입이 다른 지 먼처 확인
  if (typeof objA !== typeof objB) return false;
  // 배열이 아닌 객체 확인
  if (isObject(objA) && isObject(objB)) {
    // 객체인 지
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      if (objA[key as keyof T] !== objB[key as keyof T]) {
        return false;
      }
    }
    return true;
    // 배열 확인
  } else if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    return objA.every((a, idx) => a === objB[idx]);
  }
  // 나머지 === 확인
  return objA === objB;
};

const isObject = (
  value: unknown,
): value is Record<string | number | symbol, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};
