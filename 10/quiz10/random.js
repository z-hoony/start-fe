function random(num1, num2) {
  if (!isNaN(num1) && num2 === undefined) {
    return parseInt(Math.random() * num1, 10);
  }

  if (isNaN(num1) || isNaN(num2)) {
    return -1;
  }

  return parseInt(Math.random() * (num2 - num1) + num1, 10);
}

module.exports = random;
