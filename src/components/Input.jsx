import React, { useState, useEffect } from "react";

export default function Input() {
    const [value, setValue] = useState("");
    const [curr, setCurr] = useState(0);
    // let val = null;

    async function r(v2) {
        let response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
        let format = await response.json();
        let search = await format.find(item => item.cc === "USD");
        let val = await search.rate;
        return setCurr(val);

    }
    useEffect(() => {
        r(value);
    }, [])


    return (
        <>
            <input placeholder="Введите"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <span >Результат:{(curr * +value).toFixed(2)}</span>
        </>
    )
}