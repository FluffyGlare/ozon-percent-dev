import calcDayBonus from "./calcDayBonus";
import calcTaxDeduction from "./calcTaxDeduction";

export const kvitok = function(){
    const addPercent = document.querySelector('#add');
    const list = document.querySelector('#list');
    let percentArray = [];
    addPercent.addEventListener('click', (e) => {
        e.preventDefault();    
        const listitem = document.querySelector('#listitem');
        if(listitem !== ''){
            let el = document.createElement('li');
            el.innerHTML = listitem.value;
            // let removeBtn =  document.createElement('button');  
            // removeBtn.className = 'close' ;
            // el.appendChild(removeBtn) ;      
            list.appendChild(el);
            percentArray.push(+listitem.value);
            listitem.value = '';
            
            const middle = document.querySelector('#out');
            let x = 0;
            let sum = percentArray.map(i=>x+=i, x=0).reverse()[0];
            let middlePercent = sum/percentArray.length;
            middle.textContent =  middlePercent;

            const liveBonus = document.querySelector('#outBonus');
            let outLiveBonus = (calcDayBonus(middlePercent)) *percentArray.length;
            liveBonus.textContent = calcTaxDeduction(outLiveBonus);

    
        }       
    })
    
}

export default kvitok;