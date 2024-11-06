'use strict';

let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  const resultElement = document.querySelector('.result');
  calculation += value;
  resultElement.innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}
