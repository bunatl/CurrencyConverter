import React, { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

// passing data from child to parent component
// https://www.youtube.com/watch?v=-N7auOijZts

function Search (props) {
    const [ text, setText ] = useState({
        cName: "",
        cCode: ""
    });


    const typing = (e) => {
        e.preventDefault();
        const inputText = e.target.value;

        setText({
            ...text,
            [ e.target.name ]: inputText
        });

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
                    placeholder="Country name"
                    aria-label="CountryName"
                    aria-describedby="searchInputField"
                    name="cName"
                    value={ text.cName }
                    onChange={ typing }
                />
            </InputGroup>

            <InputGroup
                size="lg"
                className="mb-3" >
                <FormControl
                    placeholder="Currency Code"
                    aria-label="CountryCode"
                    aria-describedby="searchInputField"
                    name="cCode"
                    value={ text.cCode }
                    onChange={ typing }
                />
            </InputGroup>
        </div>
    );
}

export default Search;