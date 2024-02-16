function analyzeArray(array) {
  return {
    average: array.reduce((prev, cur) => prev + cur, 0) / this.length,
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array),
  }
}

module.exports = analyzeArray;
