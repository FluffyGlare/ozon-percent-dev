export const calcDayBonus = function(percent) {
    let dayBonus;
    if (percent >= 1 && percent < 70) {
        dayBonus = percent * 6;
    } else if (percent >= 70 && percent < 80) {
        dayBonus = percent * 7;
    } else if (percent >= 80 && percent < 90) {
        dayBonus = percent * 8;
    } else if (percent >= 90 && percent < 100) {
        dayBonus = percent * 10;
    } else if (percent >= 100 && percent < 110) {
        dayBonus = percent * 12;
    } else if (percent >= 110) {
        dayBonus = percent * 14;
    } else {
        dayBonus = 0;
    }
    return dayBonus;

}

export default calcDayBonus;