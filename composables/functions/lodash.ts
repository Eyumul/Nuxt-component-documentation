import type { StringKeyedObject } from "~/types/components";

export function _set(obj: StringKeyedObject, path: string, value: string) {
  const pathParts = path.split(".");
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    if (i === pathParts.length - 1) {
      current[pathParts[i]] = value;
    } else {
      current[pathParts[i]] = current[pathParts[i]] || {};
      current = current[pathParts[i]];
    }
  }

  return obj;
}

export function _get(obj: StringKeyedObject, path: string, defaultValue: string = "-") {
  const pathParts = path.split(".");
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    if (current == null || current[pathParts[i]] === undefined) {
      return defaultValue;
    } else {
      current = current[pathParts[i]];
    }
  }

  return current;
}