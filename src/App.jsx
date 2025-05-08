// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from "react";
import { useEffect } from "react";

export default function App() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convert, setConverted] = useState("");

    useEffect(() => {
        async function convert() {
            if (fromCurrency === toCurrency) {
                setConverted(amount);
                return;
            }
            const res = await fetch(
                `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
            );
            const data = await res.json();
            setConverted(data.rates[toCurrency]);
            console.log(convert);
        }
        convert();
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div>
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{convert}</p>
        </div>
    );
}
