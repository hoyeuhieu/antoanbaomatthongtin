export const bigPow = (a, x, n) => {
  let d = 1;
  while (x > 0) {
    if (x % 2 == 1) {
      d = (d * a) % n;
      x = Math.floor(x / 2);
      a = (a * a) % n;
    } else {
      x = Math.floor(x / 2);
      a = (a * a) % n;
    }
  }

  return d;
};


