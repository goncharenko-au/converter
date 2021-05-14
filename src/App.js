import React, { Fragment, useState } from "react";
import { Theme, Header, Field } from "./components";
import './App.css';



export default function App() {
  const [isThemeLight, setIsThemeLight] = useState(true);

  return (
    <Fragment>
      {isThemeLight === false ?
        document.body.classList.add("dark") : document.body.classList.remove("dark")
      }
      <div className="container">
        <div className="theme">
          <Theme theme={isThemeLight} setIsThemeLight={setIsThemeLight} />
        </div>
        <div className="wrapper">
          <Header />
          <div className="inner">
            <Field />
          </div>
        </div>
      </div >
    </Fragment >
  )
}


