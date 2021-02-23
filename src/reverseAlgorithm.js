export const reverseNumber = (a, n) => {
  let x0 = parseInt(n)
  let x1 = parseInt(a)
  let b0 = 0
  let b1 = 1
  let i = 1
  let x = [x0, x1]
  let b = [b0, b1]

  while (x[i] > 1) {
    let y = Math.floor(x[i - 1] / x[i])
    x[i + 1] = x[i - 1] - y * x[i]
    b[i + 1] = b[i - 1] - y * b[i]
    i = i + 1
    console.log(x)
    console.log(b)
  }

  console.log(x)
  console.log(b)
  console.log(i)
  if (x[i - 1] === 0) return 0
  else {
    if (b[i] > 0) {
      return b[i]
    } else return parseInt(n) + b[i]
  }
}
