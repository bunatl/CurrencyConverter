import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import cs from 'date-fns/locale/cs';

import Search from './Search';
import Result from './Result';
import Footer from './Footer';

import { parseDataIntoArray } from '../utils/parseDataIntoArray';
import { fetchCnbExchnageRates } from '../utils/fetchCnbExchnageRates';
import {
  isWeekday,
  initPickerDate
} from '../utils/calendarHelpers';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/App.css';

function App () {
  const [ loading, setLoading ] = useState(true);
  const [ currencyTable, setCurrencyTable ] = useState([]);
  const [ filter, setFilter ] = useState('');
  const [ pickerDate, setPickerDate ] = useState(initPickerDate);

  const changeDate = date => setPickerDate(date);
  registerLocale('cs', cs);

  useEffect(() => {
    // async function has to be called separetly since useEffect cant return a promise
    async function fetchExchnagerates () {
      setLoading(true);
      // fetches data from czech national bank website
      const data = await fetchCnbExchnageRates(pickerDate);
      // state has to updated ater all iterations have finished
      setCurrencyTable(parseDataIntoArray(data));
      // fetching has finished and data are parsed
      setLoading(false);
    };

    fetchExchnagerates();
  }, [ pickerDate ]); // use only on mount and when date in picker date changes

  return (
    <div className="App">
      {/* header */ }
      <header><h1>Currency converter <span role="img" aria-labelledby="icon">💱</span></h1></header>
      {/* main */ }
      <main>
        {/* search */ }
        {/* getFilter recive data from child and here in parent component set state of 'filter' */ }
        <div id="control">
          <Search getFilter={ (x) => setFilter(x) } />
          {/* DatePicker docs: https://reactdatepicker.com/ */ }
          <DatePicker
            id="dateInput"
            closeOnScroll={ true }
            dateFormat="📅 d MMMM yyyy"
            locale="cs"
            withPortal
            selected={ pickerDate }
            // future rates rates aren't available yet
            maxDate={ new Date() }
            onChange={ changeDate }
            filterDate={ isWeekday }
          />
        </div>
        {/* res */ }
        { loading
          ? <h2>Your data are being loaded. Please wait a moment. <span role="img" aria-labelledby="waitIcon">⏳</span></h2>
          : <Result data={ currencyTable } filter={ filter } />
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
