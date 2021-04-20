import React, { Fragment } from "react";
import "./App.css";

export default function Myapp() {




    return (
        <Fragment>
            <div className="wrapper">
                <h1 className="title">Конвертація гривні в іноземну валюту <br />(курс Національного банку України)</h1>
                <div className="inner">
                    <div className="block">
                        <input className="input" />
                        <span className="uah">UAH</span>
                    </div>
                    <div className="block">
                        <input className="input" />
                    </div>
                </div>
            </div>
        </Fragment >
    )


}