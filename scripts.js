const form = document.querySelector('#form');
const modalOverlay = document.querySelector('.modal-overlay');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectValue('gender');
  const age = getNumberValue('age');
  const weight = getNumberValue('weight');
  const height = getNumberValue('height');
  const activity_level = getSelectValue('activity_level');

  const tmb = Math.round(
    gender == 'female'
    ? (655 + (9.5 * weight) + (1.9 * height) - (4.7 * age))
    : (66 + (13.8 * weight) + (5.0 * height) - (6.8 * age)) 
  );

  const get = Math.round(tmb * activity_level);
  const loseweight = get - 300;
  const gainweight = get + 350;

  insertValues(tmb, get, loseweight, gainweight);

  // Open modal
  modalOverlay.classList.add('active');
  document.querySelector('body').style.overflow = 'hidden';
}

function getNumberValue(id){
  return document.querySelector(`#${id}`).value;
}

function getSelectValue(id) {
  const select = document.querySelector(`#${id}`);
  return select.options[select.selectedIndex].value;
}

function insertValues(tmb, get, loseweight, gainweight) {
  document.querySelector('#tmb').innerHTML = tmb;
  document.querySelector('#get').innerHTML = get;
  document.querySelector('#loseweight').innerHTML = loseweight;
  document.querySelector('#gainweight').innerHTML = gainweight;
}

// Close modal
modalOverlay.querySelector('button').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  document.querySelector('body').style.overflow = 'auto';
});