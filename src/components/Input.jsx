import PropTypes from 'prop-types';

export default function Input({ name, rate, onChange }) {
    return (
        <>
            <input name={name}
                className="input"
                value={rate}
                onChange={onChange}
            />
        </>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
Input.defaultProps = {
    name: "",
    rate: "",
    onChange: () => { }
}