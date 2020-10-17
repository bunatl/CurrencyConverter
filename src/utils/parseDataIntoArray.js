// https://stackoverflow.com/questions/36631762/returning-html-with-fetch
export function parseDataIntoArray (html) {
    // Initialize the DOM parser
    var parser = new DOMParser();

    // Parse the HTML text
    var doc = parser.parseFromString(html, "text/html");

    // table with exchange rates
    const exchnages = doc.querySelector('.currency-table');
    const countriesRate = exchnages.querySelectorAll('tr');

    var newCurrencyTable = [];

    // parse single row
    countriesRate.forEach(el => {
        // split the row
        const rowCols = el.querySelectorAll('td');

        if (rowCols.length !== 0) {
            // assign
            const countryName = rowCols[ 0 ].innerText;
            const currencyCode = rowCols[ 3 ].innerText;
            const exchangeRate = rowCols[ 4 ].innerText;
            const exchangeAmount = rowCols[ 2 ].innerText;

            const row = {
                code: currencyCode,
                country: countryName,
                amount: exchangeAmount,
                rate: exchangeRate
            };
            newCurrencyTable.push(row);
        }
    });
    return newCurrencyTable;
}