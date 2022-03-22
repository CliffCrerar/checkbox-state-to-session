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
    let inputArrayStore = JSON.parse(sessionStorage.getItem(key));

    console.log(inputArrayStore);
    if (inputArrayStore === null) {
      inputArrayStore = [];
    }
    const action = event.target.checked;
    const id = event.target.id;
    const initNewState = new marActionStateSimItem(action, id);

    if (inputArrayStore.some((itm) => itm.id === event.target.id)) {
      inputArrayStore.find((itm) => itm.id === event.target.id).action =
        event.target.checked;
    } else {
      inputArrayStore = [...inputArrayStore, initNewState];
    }

    sessionStorage.setItem(key, JSON.stringify(inputArrayStore));
    console.log(initNewState);
    console.log(event);
    console.log(inputArrayStore);
  });
});
