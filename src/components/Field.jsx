import { useState, useEffect, Fragment } from 'react';
import { Input, Select } from "./index"
import axios from "axios";

export default function Body() {
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
    });

    function getRate() {
        axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then(response => response.data)
            .then(data => setSelect({
                ...select, arrayOfItems: data,
                activeObj: data.find(item => item.cc === select.currency)
            }))
            .catch(e => console.log(e));
    }

    const changeRate = (e) => {
        setSelect({ ...select, currency: e.target.value });
    };

    const resValue = (e, valueOfInput) => {
        setInputValue({
            name: valueOfInput,
            valueOfItem: +e.target.value.replace(/[^\d]/g) ? +e.target.value.replace(/[^\d]/g) : ""
        })
    };

    const currencyOne = `1 ${select.activeObj.txt.toLowerCase()} - ${(select.activeObj.rate).toFixed(2)} гривень`;

    const ua = inputValue.name === "ua" ? (inputValue.valueOfItem / select.activeObj.rate).toFixed(2) : inputValue.valueOfItem;
    const etc = inputValue.name === "etc" ? (inputValue.valueOfItem * select.activeObj.rate).toFixed(2) : inputValue.valueOfItem;


    useEffect(() => {
        getRate();
    }, [select.currency]);

    return (
        <Fragment>
            <div className="block">
                <Input name="etc" rate={ua}
                    onChange={e => resValue(e, "etc")} />
                <Select currency={select.currency}
                    changeRate={changeRate}
                    arrayOfItems={select.arrayOfItems} />
            </div>
            <div className="block">
                <Input name="ua" rate={etc}
                    onChange={e => resValue(e, "ua")} />
                <span className="uah">UAH</span>
                <div className="text">
                    {currencyOne}
                </div>
            </div>
            <button
                className="clear"
                onClick={() => setInputValue({
                    valueOfItem: "",
                    name: ""
                })}>
                Очистити </button>
        </Fragment>

    )
}