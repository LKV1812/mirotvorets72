import './entry';
import './modules/stretches-height-rows';
import './section/carousel-personal-account';
import {editUserData} from './modules/edit-user-data';

let currentElemntsData = document.querySelectorAll('.user-data__output');
let buttonEdit = document.querySelectorAll('.icon-edit');

currentElemntsData.forEach(item => {
  item.addEventListener('click', function() {
    editUserData(this, 'user-data__enter');
  });
});

buttonEdit.forEach(item => {
  if (!item.matches('.icon-edit--photo')) {
    let parentRow = item.closest('.user-data__body-row');
    let editField = parentRow.querySelector('.user-data__output');

    item.addEventListener('click', function() {
      editUserData(editField, 'user-data__enter');
    });
  }
});
