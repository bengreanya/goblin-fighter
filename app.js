/* Imports */
import { renderGoblin } from './render-utils.js';
/* Get DOM Elements */
const goblinsListEl = document.querySelector('goblins');
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

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
