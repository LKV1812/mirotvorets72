export const priceSale = {
  'pallets': {
    "first-grade-epal": 300,
    "first-grade-noepal": 160,
    "second-grade-epal": 280,
    "second-grade-noepal": 140,
    "third-grade-epal": 240,
    "different-grade": 220,

  },

  getPriceSelectedGradePallet(productName, selectedGrade) {
    return this[productName][selectedGrade];
  }
};
