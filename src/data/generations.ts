export type Generation = {
  number: number
  limit: {
    from: number
    to: number
  }
}

const generations: Generation[] = [
  { number: 1, limit: { from: 0, to: 151 } },
  { number: 2, limit: { from: 151, to: 251 } },
  { number: 3, limit: { from: 251, to: 386 } },
  { number: 4, limit: { from: 386, to: 493 } },
  { number: 5, limit: { from: 493, to: 649 } },
  { number: 6, limit: { from: 649, to: 721 } },
  { number: 7, limit: { from: 721, to: 809 } },
  { number: 8, limit: { from: 809, to: 905 } },
  { number: 9, limit: { from: 905, to: 1009 } },
]

export { generations }
