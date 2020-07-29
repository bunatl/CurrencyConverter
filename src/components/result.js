import React from 'react';

import Table from 'react-bootstrap/Table';

// data is array of objects
// with properties: code, country, amount, rate
function Search ({ data, filter }) {

    return (
        <div id="result">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Country</th>
                        <th>Amount</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    { data.filter((line) => {
                        // filter object properties are cName & cCode

                        console.log(filter);
                        // console.log(line);

                        /* 
                            we are checking if we can find an index of the term specified in filter inseide our object 
                            (one line/object in our array with all date taht will be shown in the table)
                        */
                        // filter is nt case sensitive therefore chars in both expressions will be lowered beforehand
                        /*
                            1. no text is given by the user (has to be first, so method to lower case wont be used on undefinied)
                            2. country names match
                            3. currency codes match
                        */
                        return (
                            (filter === "" || filter === undefined) ||
                            (line.country.toLowerCase().indexOf(filter.toLowerCase()) != -1) ||
                            (line.code.toLowerCase().indexOf(filter.toLowerCase()) != -1)
                        );
                    })
                        .map((item, i) => (
                            <tr key={ i }>
                                <td>{ item.code }</td>
                                <td>{ item.country }</td>
                                <td>{ item.amount }</td>
                                <td>{ item.rate }</td>
                            </tr>
                        )) }
                </tbody>
            </Table>
        </div>
    );
}

export default Search;