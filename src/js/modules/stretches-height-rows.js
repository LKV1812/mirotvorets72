let userHistoryOrders = document.querySelectorAll('.history');

userHistoryOrders.forEach(order => {
  setHeightRows(order);
});

function setHeightRows(elem) {
  let rowsLength = elem.querySelectorAll(`.history-appellation > .history-row`).length;

  for (let i = 1; i <= rowsLength; i++) {
    let rowAppellation = elem.querySelector(`.history-appellation > .history-row:nth-child(${i})`);
    let rowsData = elem.querySelectorAll(`.history-data > .history-row:nth-child(${i})`);
    let rowsHeight = [];

    rowsData.forEach(row => rowsHeight.push(row.clientHeight));
    rowsHeight.push(rowAppellation.clientHeight);

    let maxHeight = Math.max(...rowsHeight);

    rowAppellation.style.height = maxHeight + 'px';
    rowsData.forEach(row => row.style.height = maxHeight + 'px');
  }
}
