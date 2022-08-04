let inputUsd = document.querySelector('#inputUsd')
let btnUsd = document.querySelector('#btnUsd')
let inputEur = document.querySelector('#inputEur')
let btnEur = document.querySelector('#btnEur')
let output = document.querySelector('#output')
let svgUsd = document.querySelector('#svgUsd')
let svgEur = document.querySelector('#svgEur')

btnUsd.onclick = () => {
  output.innerHTML = parseFloat(inputUsd.value * 36.65).toFixed(2) + ' ₴'
  if (!inputUsd.value) {
    return (output.innerHTML = 'not valid')
  } else if (inputUsd.value <= 0) {
    return (output.innerHTML = 'not valid')
  } else if (inputUsd.value == undefined) {
    return (output.innerHTML = 'not valid')
  } else if (inputUsd.value == NaN) {
    return (output.innerHTML = 'not valid')
  } else if (inputUsd.value.length >= 6) {
    return (output.innerHTML = 'not valid')
  }
  svgUsd.style.border = '2px solid #FFD772'
  svgEur.style.border = 'none'
}
btnEur.onclick = () => {
  output.innerHTML = parseFloat(inputEur.value * 37.47).toFixed(2) + ' ₴'
  if (!inputEur.value) {
    return (output.innerHTML = 'not valid')
  } else if (inputEur.value <= 0) {
    return (output.innerHTML = 'not valid')
  } else if (inputEur.value == undefined) {
    return (output.innerHTML = 'not valid')
  } else if (inputEur.value == NaN) {
    return (output.innerHTML = 'not valid')
  } else if (inputEur.value.length >= 6) {
    return (output.innerHTML = 'not valid')
  }
  svgUsd.style.border = 'none'
  svgEur.style.border = '2px solid #FFD772'
}

//change theme
let title = document.querySelector('.title')
let container = document.querySelector('.container')
let currencyRate = document.querySelector('.currencyRate')
title.onclick = () => {
  container.classList.toggle('background')
  title.classList.toggle('titleText')
  inputUsd.classList.toggle('moneyText')
  output.classList.toggle('outputText')
  currencyRate.classList.toggle('currencyRateText')
}
