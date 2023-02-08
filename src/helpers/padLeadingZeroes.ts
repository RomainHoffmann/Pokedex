export const padLeadingZeroes = (num: number, size: number) => {
  let s = num + ""
  while (s.length < size) s = "0" + s
  return s
}
