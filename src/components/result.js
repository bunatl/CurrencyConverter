import React from 'react';

import Table from 'react-bootstrap/Table';

// data is array of objects
// with properties: code, country, amount, rate
function Search ({ data }) {
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
                    { data.map((item, i) => (
                        <tr>
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