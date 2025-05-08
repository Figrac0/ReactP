import { useState, useEffect } from "react";
import "./index.css";

//Rus

//БЕЗ ПОДСКАЗОК:
//Создайте интерфейс для конвертации валют с загрузкой данных валют из API Frankfurter в state, динамическим отображением options в select, обработкой выбранных валют, ввода суммы, расчётом конвертации через асинхронную функцию с try/catch/finally, отображением результата в UI, проверкой, что сумма больше 0, и состояниями для загрузки и ошибок.

//C ПОДСКАЗКАМИ:
/*
// 1 - Получите массив всех валют из API Frankfurter и запишите его в state.
// 2 - Используя map, динамически создайте options внутри select.
// 3 - Получите значения выбранных валют из обоих select и запишите их в state fromCurrency и toCurrency.
// 4 - Создайте state для записи amount из input. Запишите данные из input в этот state.
// 5 - Создайте вторую асинхронную функцию для получения значения конвертации двух валют. Запишите результат конвертации в новый state - convertedAmount. Покажите результат в интерфейсе.
// 6 - Добавьте в обе функции блоки try/catch/finally. Создайте state для loading (true/false) и error ("Сообщение ошибки").
// 7 - Внедрите логику отображения загрузки и ошибок в интерфейсе.
// 8 - Добавьте проверку, чтобы amount был больше 0.
*/

//https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

const API_URL = "https://api.frankfurter.app";

function App() {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrencies, setfromCurrencies] = useState("EUR");
    const [toCurrencies, setToCurrencies] = useState("USD");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getCurrencies() {
            try {
                const res = await fetch(`${API_URL}/latest`);
                const data = await res.json();
                setCurrencies(Object.keys(data.rates));
            } catch {
                setError("Failed to fetch currencies");
            }
        }
        getCurrencies();
    }, []);

    async function handleConvert() {
        if (!amount || amount <= 0) {
            setError("Amount must be greater than zero!");
            return;
        }

        setError(null);

        setIsLoading(true);
        try {
            const res = await fetch(
                `${API_URL}/latest?amount=${amount}&from=${fromCurrencies}&to=${toCurrencies}`
            );
            const data = await res.json();
            setConvertedAmount(data.rates[toCurrencies]);
        } catch {
            setError("Failed to convert currencies");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="app">
            <h1>Currency Exchange Calculator</h1>

            <div className="converter-container">
                {error && <p className="error">{error}</p>}

                <div className="input-group">
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        placeholder="Amount"
                        className="input-field"
                    />
                    <select
                        value={fromCurrencies}
                        onChange={(e) => setfromCurrencies(e.target.value)}
                        className="dropdown"
                    >
                        {currencies.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <span className="arrow">→</span>
                    <select
                        value={toCurrencies}
                        onChange={(e) => setToCurrencies(e.target.value)}
                        className="dropdown"
                    >
                        {currencies.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleConvert} className="convert-button">
                    Convert
                </button>
                {isLoading && <p className="loading">Converting...</p>}

                {convertedAmount !== null && !isLoading && (
                    <p className="result">
                        {amount} {fromCurrencies} = {convertedAmount.toFixed(2)}
                    </p>
                )}
            </div>
        </div>
    );
}

export default App;
