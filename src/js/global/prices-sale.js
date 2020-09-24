export const priceSale = {
  'pallets': {
    "first-grade-epal": 150,
    "first-grade-noepal": 120,
    "second-grade-epal": 110,
    "second-grade-noepal": 100,
    "third-grade-epal": 90,
    "different-grade": 80,

  },

  getPriceSelectedGradePallet(productName, selectedGrade) {
    return this[productName][selectedGrade];
  }
};
