import { isEqual } from "lodash";

export const isObjectsEqual = <T>(obj1: T, obj2: T): boolean =>
  isEqual(obj1, obj2);
