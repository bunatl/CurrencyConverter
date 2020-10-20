import React from 'react';

function footer (props) {
    return (
        <footer>
            <div>Developed by <b><a href="https://github.com/bunatl" target="_blank" rel="noopener noreferrer">Lukas Bunat</a></b> in <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React</a> with ❤</div>
            <div>Source code is hosted on <a href="https://github.com/bunatl/CurrencyConverter">GitHub</a>.</div>
            <div>&copy; All Rights Reserved</div>
            <div>2020{ (new Date().getFullYear()) === 2020 ? "" : "-" + (new Date().getFullYear()) }</div>
        </footer>
    );
}

export default footer;