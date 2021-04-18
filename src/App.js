import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";

import Select from './components/Select';




function App() {
  const [value, setValue] = useState("");
  const [curr, setCurr] = useState(0);
  // const [select, setSelect] = useState("EUR")
  const [select, setSelect] = useState({
    currency: "EUR",
    // rate: 33.525


  })

  async function getRate(v2) {
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(response => response.data)
      .then(data => data.find(item => item.cc === select.currency))
      .then(object => object.rate)
      .then(rate => setCurr(rate));
  }

  useEffect(() => {
    getRate(value);
  }, [select, value])


  const result = +value.replace(/[^\d]/g) ? (+value * curr).toFixed(1) : "";
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <div className="inner">
          <div className="block">
            <Input value={+value.replace(/[^\d]/g) ? +value : ""} setValue={setValue} curr={curr} />
            <span className="uah">UAH</span>
          </div>
          <div className="block">
            <Input value={result} />
            <Select select={select.currency} setSelect={setSelect} />
            <div>1 гривня = {select.rate}</div>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default App;