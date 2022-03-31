// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of trianlge.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = (1 / 2) * base * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
