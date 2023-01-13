export function random(min = 0, max = 1) {
  return min + Math.random() * (max - min)
}

export function randomInt(min = 0, max = 1) {
  return Math.round(random(min, max))
}
