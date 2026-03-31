import { get, set, isObject, isArray, cloneDeep } from 'lodash';

/**
 * @description
 * Recursively adds elements from source to target
 * If an array is encountered at a path, elements from the source array are appended to the target array
 * If an object is encountered, the function continues to traverse deeper
 * Ignore primitive value
 */
export function deepAdd(target: any, source: any): any {
  const result = cloneDeep(target) || {};

  function recurse(t: any, s: any, path: string[] = []) {
    for (const key in s) {
      const currentPath = [...path, key];
      const sValue = s[key];
      const tValue = get(result, currentPath);

      if (isArray(sValue)) {
        const existingArray = isArray(tValue) ? tValue : [];
        set(result, currentPath, [...existingArray, ...sValue]);
      } else if (isObject(sValue) && sValue !== null) {
        if (!isObject(tValue)) {
          set(result, currentPath, {});
        }
        recurse(tValue, sValue, currentPath);
      }
    }
  }

  recurse(result, source);
  return result;
}

/**
 * @description
 * Recursively removes elements from target that are present in the source
 * For arrays: filters the target array, removing elements found in the source array
 * Ignore other types
 * 
 * @param target The original data object
 * @param source The object containing elements to remove
 * @param comparator A function to compare elements in arrays (returns true if items are equal)
 */
export function deepRemove(
  target: any,
  source: any,
  comparator: (item: any, toRemove: any, path?: string[]) => boolean,
): any {
  const result = cloneDeep(target) || {};

  function recurse(t: any, s: any, path: string[] = []) {
    for (const key in s) {
      const currentPath = [...path, key];
      const sValue = s[key];
      const tValue = get(result, currentPath);

      if (isArray(sValue) && isArray(tValue)) {
        const filtered = tValue.filter(
          (item) => !sValue.some((toRemove) => comparator(item, toRemove, currentPath))
        );
        set(result, currentPath, filtered);
      } else if (isObject(sValue) && sValue !== null && tValue) {
        recurse(tValue, sValue, currentPath);
      }
    }
  }

  recurse(result, source);
  return result;
}