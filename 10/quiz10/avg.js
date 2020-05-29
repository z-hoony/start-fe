function avg(...numbers) {
  let count = 0;
  let sum = 0;

  function loop(nums) {
    nums.forEach((num) => {
      if (!isNaN(num)) {
        sum += num;
        count += 1;
      } else if (Array.isArray(num)) {
        loop(num);
      }
    });
  }

  loop(numbers);

  return sum / count;
}

module.exports = avg;
