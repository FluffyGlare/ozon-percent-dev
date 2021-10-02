export const calcTaxDeduction = function(value){
    return Number((value * 0.87).toFixed(0));
}

export default calcTaxDeduction;