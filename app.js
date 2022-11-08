/* Imports */
import { renderGoblin } from './render-utils.js';
/* Get DOM Elements */
const goblinsListEl = document.querySelector('.goblins');
const formEl = document.querySelector('form');
const playerHPEl = document.querySelector('#player-hp');
const goblinKillsEl = document.querySelector('#goblin-kills');
const playerImg = document.querySelector('#player-img');
/* State */
const goblins = [
    { id: 1, name: 'Mean One', hp: 5 },
    { id: 2, name: 'Big Bad One', hp: 5 },
];
let currentId = 3;
let playerHP = 5;
let killedGoblinCount = 0;
/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(formEl);
    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;
    goblins.push(newGoblin);
    displayGoblins();
});
/* Display Functions */
function displayGoblins() {
    goblinsListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinsListEl.append(goblinEl);
    }
}
displayGoblins();
// (don't forget to call any display functions you want to run on page load!)
