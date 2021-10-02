export const getMaxDay = function(selector, value_1, value_2){
    let checks = document.getElementsByName(selector);
    let maxDay;
    if (checks[value_1].checked) {
        return maxDay = 14;
    } else if (checks[value_2].checked) {
        return maxDay = 16;
    } else {
        return maxDay = 15;
    };
}

export default getMaxDay;