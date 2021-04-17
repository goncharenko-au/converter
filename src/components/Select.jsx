export default function Select({ select, setSelect }) {
    return (
        <>
            <select
                className="select"
                value={select} onChange={(e) => setSelect(e.target.value)}>
                <option>USD</option>
                <option>EUR</option>
                <option>RUB</option>
                <option>PLN</option>
                <option>AUD</option>
                <option>CAD</option>
                <option>CNY</option>
                <option>HRK</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>HKD</option>
                <option>HUF</option>
                <option>MAD</option>
            </select>
        </>
    )
}