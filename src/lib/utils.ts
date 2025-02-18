import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export function compose<T>(
  ...fns: Array<(component: T) => T>
): (component: T) => T {
  return (component: T) =>
    fns.reduceRight((wrapped, fn) => fn(wrapped), component);
}

export const getIsDataEmpty = (data: unknown): boolean =>
  data === null ||
  data === undefined ||
  (Array.isArray(data) && data.length === 0);
