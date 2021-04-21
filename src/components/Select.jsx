import PropTypes from 'prop-types';

export default function Select({ currency, changeRate, arrayOfItems }) {
    return (
        <>
            <select value={currency}
                className="select"
                onChange={changeRate}>
                {arrayOfItems.map(item => {
                    return <option key={item.cc}>{item.cc}</option>
                })
                }
            </select>
        </>
    )
}
Select.propTypes = {
    currency: PropTypes.string.isRequired,
    changeRate: PropTypes.func.isRequired,
    arrayOfItems: PropTypes.arrayOf(PropTypes.object).isRequired
}
Select.defaultProps = {
    currency: "",
    changeRate: () => { },
    arrayOfItems: []
}