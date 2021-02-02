export const getTotalMinutes = (hours, minutes, seconds) => {
    let totalMinutes = 0;
    totalMinutes += minutes;
    totalMinutes += hours * 60;
    totalMinutes += seconds / 60;
    return totalMinutes;
};
