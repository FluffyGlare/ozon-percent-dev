export const createMonthGraphik = function (dateMonth){
    let td = document.querySelectorAll('td');
    td.forEach(item => {

            let cell = +item.innerHTML;
            cell = cell - 1;
            if(cell >= 0){
            let x = howManyDay(0,cell,dateMonth);
                if(x % 4 == 0){
                item.classList.add('active');
                } 
            let y = howManyDay(1,cell,dateMonth);
                if(y % 4 == 0){
                item.classList.add('active');
                }
            }                     
        });
}

function howManyDay(smena,value,dateMonth) {
    const pointDateOne = new Date(2021,3,0).getTime();
    let dayOne = 1000 * 60 * 60 * 24;
    let dayOnePoint = Math.floor(pointDateOne / dayOne);  
    let now = new Date();
    let whatDay = new Date(now.getFullYear(), dateMonth ,value).getTime();
    let whatDay1 = Math.floor(whatDay / dayOne);
    if (smena == 1){
        dayOnePoint = dayOnePoint + 1;
        return (whatDay1 - dayOnePoint);
    } else{
        return (whatDay1 - dayOnePoint);
    }
 }; 

export default createMonthGraphik;