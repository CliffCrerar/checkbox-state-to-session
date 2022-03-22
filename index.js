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

inputArray.forEach((el) => {
  el.addEventListener('change', (event) => {
    const key = 'inputArrayState';
    let inputArray = JSON.parse(sessionStorage.getItem(key));
    console.log(inputArray);
    if (inputArray === null) {
      inputArray = [];
    }
    const action = event.target.checked;
    const id = event.target.id;
    const initNewState = new marActionStateSimItem(action, id);

    if (inputArray.some((itm) => itm.id === event.target.id)) {
      inputArray.find((itm) => itm.id === event.target.id).action =
        event.target.checked;
    } else {
      inputArray = [...inputArray, initNewState];
    }

    sessionStorage.setItem(key, JSON.stringify(inputArray));
    console.log(initNewState);
    console.log(event);
    console.log(inputArray);
  });
});
