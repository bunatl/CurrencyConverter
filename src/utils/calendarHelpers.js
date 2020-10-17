export const isWeekday = date => date.getDay() !== 0 && date.getDay() !== 6;
export const formatDate = x => x.length === 1 ? `0${ x }` : x;

export const initPickerDate = () => {
    let date = new Date();
    switch (date.getDay()) {
        // sunday
        case 0:
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2);
        case 6:
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
        default:
            return date;
    }
};