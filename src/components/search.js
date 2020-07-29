import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Search () {

    return (
        <div id="search">
            <InputGroup size="lg" className="mb-3">
                {/* <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                </InputGroup.Prepend> */}
                <FormControl
                    placeholder="Country name"
                    aria-label="CountryName"
                    aria-describedby="searchInputField"
                />
            </InputGroup>


            <InputGroup size="lg" className="mb-3">
                <FormControl
                    placeholder="Currency Code"
                    aria-label="CountryCode"
                    aria-describedby="searchInputField"
                />
            </InputGroup>
        </div>
    );
}

export default Search;