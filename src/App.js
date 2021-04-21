import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";
import Select from './components/Select';



function App() {
  const [inputValue, setInputValue] = useState({
    valueOfItem: "",
    name: ""
  });

  const [select, setSelect] = useState({
    arrayOfItems: [],
    currency: "EUR",
    activeObj: {
      rate: 0,
      txt: ""
    },
  })

  async function getRate() {
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(response => response.data)
      .then(data => setSelect({ ...select, arrayOfItems: data, activeObj: data.find(item => item.cc === select.currency) }))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getRate();
  }, [select.currency])


  const changeRate = (e) => {
    setSelect({ ...select, currency: e.target.value });
  }

  const ua = inputValue.name === "ua" ? (inputValue.valueOfItem / select.activeObj.rate).toFixed(2) : inputValue.valueOfItem;
  const etc = inputValue.name === "etc" ? (inputValue.valueOfItem * select.activeObj.rate).toFixed(2) : inputValue.valueOfItem;


  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <div className="inner">
          <div className="block">
            <Input name="etc" rate={ua} onChange={e => setInputValue({
              name: "etc", valueOfItem: +e.target.value.replace(/[^\d]/g) ? +e.target.value.replace(/[^\d]/g) : ""
            })} />
            <Select currency={select.currency} changeRate={changeRate} arrayOfItems={select.arrayOfItems} />
          </div>
          <div className="block">
            <Input name="ua" rate={etc} onChange={e => setInputValue({
              name: "ua", valueOfItem: +e.target.value.replace(/[^\d]/g) ? +e.target.value.replace(/[^\d]/g) : ""
            })} />
            <span className="uah">UAH</span>
            <div>{`1 ${select.activeObj.txt.toLowerCase()} - ${(select.activeObj.rate).toFixed(2)}  гривень`}</div>

          </div>
          <button
            className="input"
            onClick={() => setInputValue({ valueOfItem: "", name: "" })}
          >Очистити </button>
        </div>
      </div>
    </Fragment >
  )
}

export default App;

