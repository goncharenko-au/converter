import React from "react";

export default function Input(props) {
    // const [curr, setCurr] = useState(0);


    // async function getRate(v2) {
    //     let response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    //     let format = await response.json();
    //     let search = await format.find(item => item.cc === "USD");
    //     let val = await search.rate;
    //     return setCurr(val);
    // }

    // useEffect(() => {
    //     getRate(props.value);
    // }, [])


    return (
        <>
            <input placeholder="Введите"
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />

        </>
    )
}