import React, { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

// passing data from child to parent component
// https://www.youtube.com/watch?v=-N7auOijZts

function Search (props) {
    const [ text, setText ] = useState("");

    const typing = (e) => {
        e.preventDefault();
        const inputText = e.target.value;

        setText(inputText);
        props.getFilter(inputText);
    };

    return (
        <div id="search">
            <InputGroup
                size="lg"
                className="mb-3" >
                {/* <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                </InputGroup.Prepend> */}
                <FormControl
                    placeholder="Country name, currency code"
                    aria-label="CountryName"
                    aria-describedby="searchInputField"
                    value={ text }
                    onChange={ typing }
                />
            </InputGroup>
        </div>
    );
}

export default Search;