// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of trianlge.
 */
function calculate () {
  // input
  const height = parseInt(document.getElementById('height-of-triangle').value)
  const base = parseInt(document.getElementById('base-of-triangle').value)

  // process
  const perimeter = height + base + Math.sqrt(height * height + base * base)


  // output
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}