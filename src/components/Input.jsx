import React from "react";
import PropTypes from 'prop-types';

function Input({ name, rate, onChange }) {
    console.log("input")
    return (
        <>
            <input name={name}
                className="input"
                value={rate}
                onChange={onChange}
                placeholder="..."
            />
        </>
    )
}
export default React.memo(Input);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
Input.defaultProps = {
    name: "",
    rate: "",
    onChange: () => { }
}