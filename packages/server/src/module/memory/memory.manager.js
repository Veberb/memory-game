module.exports.getRandomNumbersList = ({ length = 4 }) => {
  const nums = new Set()

  while (nums.size !== +length) {
    nums.add(Math.floor(Math.random() * 100) + 1)
  }

  return [...nums]
}
