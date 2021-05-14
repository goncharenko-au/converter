import React from "react";

function Header() {
    return (
        <div>
            <h1 className="title"><span>Конвертер валют</span><br />
            (курс Національного банку України)</h1>
        </div>
    )
}
export default React.memo(Header);