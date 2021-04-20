import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";

import Select from './components/Select';




function App() {
  const [value, setValue] = useState({
    value1: "",
    value2: ""

  });
  // const [curr, setCurr] = useState(0);
  const [select, setSelect] = useState({
    array: [],
    currency: "EUR",
    activeObj: {
      rate: 0,
      txt: ""
    },
  })

  async function getRate() {
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(response => response.data)
      // .then(data => data.find(item => item.cc === select.currency))
      // .then(obj => setSelect({ ...select, array: obj, activeObj: obj, rate: obj.rate }))
      .then(data => setSelect({ ...select, array: data, activeObj: data.find(item => item.cc === select.currency) }))



    // .then(object => object.rate)
    // .then(rate => setCurr(rate));
  }

  useEffect(() => {
    getRate();
  }, [select.currency])


  let changeNum = (e) => {
    setValue({
      ...value,
      value1: e.target.value,
      value2: +e.target.value * select.activeObj.rate
    })
  }
  let changeNum2 = (e) => {
    setValue({
      ...value,
      value2: +e.target.value,
      value1: +e.target.value / select.activeObj.rate
    })
  }




  let changeRes = (e) => {
    setSelect({ ...select, currency: e.target.value });
    setValue({
      ...value,
      value2: value.value1 * select.activeObj.rate
    })
  }

  console.log(value.value1, value.value2)
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <div className="inner">
          <div className="block">
            <input
              className="input"
              onChange={changeNum}
              value={value.value1} />
            <span className="uah">UAH</span>
          </div>
          <div className="block">
            <input
              className="input"
              onChange={changeNum2}
              // onChange={e => console.log(e.target.value)}
              value={(value.value1 * select.activeObj.rate).toFixed(2)}
            />
            <select value={select.currency}
              className="select"
              onChange={changeRes}>
              {select.array.map(item => {
                return <option key={item.cc}>{item.cc}</option>
              })
              }
            </select>

            <div>1 гривня - {(select.activeObj.rate).toFixed(2) + " " + select.activeObj.txt.toLowerCase()}</div>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default App;