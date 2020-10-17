import { formatDate } from './calendarHelpers';

export const fetchCnbExchnageRates = async (pickerDate) => {
    // dd.mm.yyyy
    const date = `${ formatDate(pickerDate.getDate()) }.${ formatDate(pickerDate.getMonth()) }.${ pickerDate.getFullYear() }`;
    const url = `https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/index.html?date=${ date }`;

    // cors anywhere proxy
    const proxy = "https://cors-anywhere.herokuapp.com/";

    const res = await fetch(`${ proxy }${ url }`)
        .catch((err) => {
            console.error(err);
        });
    return await res.text();
};