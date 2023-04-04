export function incCount(value) {
  return {
    type: "inc",
    data: value,
  };
}

export function decCount(value) {
  return {
    type: "dec",
    data: value,
  };
}
