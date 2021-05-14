import React from "react";

function Theme({ theme, setIsThemeLight }) {
    console.log("theme")
    return (
        <>
            <input className="theme__input" type="checkbox" id="checkbox" onChange={() => setIsThemeLight(!theme)} />
            <label htmlFor="checkbox" className="theme__label">
            </label>
        </>
    )
}
export default React.memo(Theme);