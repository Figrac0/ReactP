import { useReducer } from "react";
import "./index.css";

const initialState = { date: new Date(), inputValue: "" };

function reducer(state, action) {
    switch (action.type) {
        case "reset":
            return { ...state, date: new Date() };
        case "updateInput":
            return { ...state, inputValue: action.payload };
        case "updateDate": {
            const days = parseInt(state.inputValue, 10);
            if (isNaN(days)) return state;

            const updateDate = new Date(state.date);
            updateDate.setDate(updateDate.getDate() + days);
            return { ...state, date: updateDate, inputValue: "" };
        }
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="app-container">
            <p className="date-text">{state.date.toDateString()}</p>

            <button className="btn" onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>

            <div className="input-group">
                <input
                    className="input"
                    type="number"
                    placeholder="Days after today"
                    value={state.inputValue}
                    onChange={(e) =>
                        dispatch({
                            type: "updateInput",
                            payload: e.target.value,
                        })
                    }
                />
                <button
                    className="btn primary-btn"
                    onClick={() => dispatch({ type: "updateDate" })}>
                    Show result
                </button>
            </div>
        </div>
    );
}

export default App;
