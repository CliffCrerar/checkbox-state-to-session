// Import stylesheets
import './style.css';

// Write Javascript code!
let number = 0;
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

appDiv.innerHTML += `<input id="checkbox-${number++}" class="checkbox" type="checkbox" name="${number}">`;
appDiv.innerHTML += `<input id="checkbox-${number++}" class="checkbox" type="checkbox" name="${number}">`;
appDiv.innerHTML += `<input id="checkbox-${number++}" class="checkbox" type="checkbox" name="${number}">`;
appDiv.innerHTML += `<input id="checkbox-${number++}" class="checkbox" type="checkbox" name="${number}">`;
appDiv.innerHTML += `<input id="checkbox-${number++}" class="checkbox" type="checkbox" name="${number}">`;
appDiv.innerHTML += `<input id="checkbox-${number++}" class="checkbox" type="checkbox" name="${number}">`;
appDiv.innerHTML += `<input id="checkbox-${number++}" class="checkbox" type="checkbox" name="${number}">`;
appDiv.innerHTML += `<input id="checkbox-${number++}" class="checkbox" type="checkbox" name="${number}">`;

const inputArray = document.querySelectorAll('.checkbox');

function marActionStateSimItem(action, id) {
  this.action = action;
  this.id = id;
}
const key = 'inputArrayState';
inputArray.forEach((el) => {
  el.addEventListener('change', (event) => {
    let inputArrayStore = JSON.parse(sessionStorage.getItem(key)); // get store

    if (inputArrayStore === null) {
      // check store initialized
      inputArrayStore = []; // if not initialized
    }
    const action = event.target.checked; // state
    const id = event.target.id; // subject
    const initNewState = new marActionStateSimItem(action, id); // state object to upsert

    if (
      inputArrayStore.some((itm) => {
        return itm.id === event.target.id;
      }) // true / false
    ) {
      inputArrayStore.find((itm) => {
        return itm.id === event.target.id;
      }).action = event.target.checked; // if item exists update
    } else {
      inputArrayStore = [...inputArrayStore, initNewState]; // if item does not exist append
    }

    sessionStorage.setItem(key, JSON.stringify(inputArrayStore));
    console.log(initNewState);
    console.log(event);
    console.log(inputArrayStore);
  });
});
