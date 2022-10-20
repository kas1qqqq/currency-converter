let inputUsd = document.querySelector('#inputUsd')
let btnUsd = document.querySelector('#btnUsd')
let inputEur = document.querySelector('#inputEur')
let btnEur = document.querySelector('#btnEur')
let output = document.querySelector('#output')
let svgUsd = document.querySelector('#svgUsd')
let svgEur = document.querySelector('#svgEur')
let exchangeDate = document.querySelector('#exchangeDate')

async function getCurrency() {
  const response = await fetch(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json'
  )
  const getArray = await response.json()
  return getArray
}

getCurrency().then((arr) => {
  const findExchangeDailyDate = arr.find((date) => date.exchangedate)
  const getDailyRateDate = findExchangeDailyDate.exchangedate
  return (exchangeDate.innerText = `Exchange rate at ${getDailyRateDate} by NBU`)
})

btnUsd.onclick = () => {
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

  svgUsd.classList.add('add-pulse-black')
  svgEur.classList.remove('add-pulse-black')

  getCurrency().then((arr) => {
    const findUsd = arr.find((usd) => usd.r030 === 840)
    const getUsd = findUsd.rate
    return (output.innerText = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'UAH',
    }).format(inputUsd.value * getUsd))
  })
}

btnEur.onclick = () => {
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
  
  svgUsd.classList.remove('add-pulse-black')
  svgEur.classList.add('add-pulse-black')

  getCurrency().then((arr) => {
    const findEur = arr.find((usd) => usd.r030 === 978)
    const getEur = findEur.rate
    return (output.innerText = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'UAH',
    }).format(inputEur.value * getEur))
  })
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
