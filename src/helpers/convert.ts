export const convertCentimetersToMeter = (
  centimeters: number,
  withUnit: boolean = true
) => {
  const value = parseFloat((centimeters / 100).toString()).toFixed(2)
  return withUnit ? meterWithUnit(value) : value
}

const meterWithUnit = (withoutUnit: number | string) => {
  return withUnit(withoutUnit, "m")
}

export const kilogramWithUnit = (withoutUnit: number | string) => {
  return withUnit(withoutUnit, "kg")
}

export const withUnit = (value: string | number, unit: string) => {
  return `${value.toString()} ${unit}`
}
