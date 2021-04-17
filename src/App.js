import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";

function App() {
  const [value, setValue] = useState("");
  const [curr, setCurr] = useState(0);
  const [select, setSel] = useState("EUR")

  async function getRate(num) {
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(response => response.data)
      .then(data => data.find(item => item.cc === select))
      .then(object => object.rate)
      .then(rate => setCurr(rate));
  }

  useEffect(() => {
    getRate(value);
  }, [select])

  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <Input value={value} setValue={setValue} curr={curr} />
        <select value={select} onChange={(e) => setSel(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
          <option>AUD</option>
          <option>CAD</option>
          <option>CNY</option>
        </select>
        <input value={(curr * +value).toFixed(1)} />
      </div>
    </Fragment>
  )
}

export default App;