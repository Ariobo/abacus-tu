export function isEmpty(value: unknown) {
  const result = false;
  if (value === undefined) return true;

  if (typeof value === "number") {
    if (value === 0) return true;
  } else if (typeof value === "string") {
    if (value === "" || value.length === 0) return true;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      if (value.length === 0) return true;
    } else if (!value) {
      return true;
    } else {
      if (Object.keys(value).length === 0) return true;
    }
  }
  return result;
}

export function prettyNumber(number: number) {
  if (isEmpty(number)) return "0";
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
