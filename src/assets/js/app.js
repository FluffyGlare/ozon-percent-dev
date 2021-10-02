import tabs from './modules/tabs';
import calcDayBonus from './modules/calcDayBonus';
import getMaxDay from './modules/getMaxDay';
import calcTaxDeduction from './modules/calcTaxDeduction';

let appData = {
    factDay: 0,
    percent: 0,
    monthWage: 0,
    maxDay: 0
}    

window.addEventListener('DOMContentLoaded', () => {
    tabs('.menu','.menu-tabs', '.tabcontent', 'show');
})
const app = document.querySelector('.app');
const priem = document.querySelector('.btn-priem');
const razm = document.querySelector('.btn-razm');

priem.addEventListener('click', () => {
    appData.monthWage = 33500;
    preloader.style.display = 'none';
    app.style.display = 'flex';
})

razm.addEventListener('click', () => {
    appData.monthWage = 29500;
    preloader.style.display = 'none';
    app.style.display = 'flex';
})

// application input value

const start = document.getElementById('start'),
      factDay = document.querySelector('.factDay-item'),
      percent = document.querySelector('.percent-item');

// application output value

let wageValue = document.querySelector('.wage-value'),
    factWageValue = document.querySelector('.factWage-value'),
    bonusValue = document.querySelector('.bonus-value'),
    factBonusValue = document.querySelector('.factBonus-value'),
    dayWage = document.querySelector('.dayWage-value'),
    allWage = document.querySelector('.allWage-value'),
    factWage = document.querySelector('.factWages-value');

start.addEventListener('click', function(){
    appData.maxDay = getMaxDay('maxDay-item',0, 2);
    appData.factDay = factDay.value;
    appData.percent = percent.value;

    if (factDay.value == ''){appData.factDay = 15};
    if (percent.value == ''){appData.percent = 0}; 

    let a = +(appData.monthWage * (appData.factDay / appData.maxDay)).toFixed(0);
    wageValue.textContent = a;
    factWageValue.textContent = calcTaxDeduction(a);

    let b = calcDayBonus(appData.percent)*appData.factDay;
    bonusValue.textContent = b;
    factBonusValue.textContent = calcTaxDeduction(b);

    allWage.textContent = a + b;
    let daySum = (a + b) / appData.factDay;
    dayWage.textContent = calcTaxDeduction(daySum);
    factWage.textContent = calcTaxDeduction(a + b);
    
})