const fizzBuzz = (n) => {
  for (let x = 1; x <= n; x++) {
    console.log((x % 3 === 0 ? 'fizz' : '') + (x % 5 === 0 ? 'buzz' : '') || x);
  }
};

module.exports = fizzBuzz;
