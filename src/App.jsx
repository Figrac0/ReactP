import { useReducer } from "react";
import { useEffect } from "react";

function VoteTracker() {
    const initialState = {
        candidates: [],
        newCandidate: "",
        status: "loading",
        error: null,
    };

    function reducer(state, action) {
        switch (action.type) {
            case "dataRecived":
                return {
                    ...state,
                    candidates: action.payload,
                    status: "ready",
                };
            case "fetchError":
                return {
                    ...state,
                    status: "error",
                    error: action.payload,
                };
            case "resetVote":
                return {
                    ...state,
                    candidates: state.candidates.map((candidate) => ({
                        ...candidate,
                        votes: 0,
                    })),
                };

            case "setNewCandidate":
                return {
                    ...state,
                    newCandidate: action.payload,
                };

            case "addCandidate":
                if (
                    !action.payload.trim() ||
                    state.candidates.some(
                        (candidate) => candidate.name === action.payload
                    )
                ) {
                    return state;
                }
                return {
                    ...state,
                    candidates: [
                        ...state.candidates,
                        {
                            name: action.payload,
                            votes: 0,
                            id: Date.now(),
                        },
                    ],
                    newCandidate: "",
                };
            case "incrementVote":
                return incrementVoteF(state, action.payload);

            case "decrementVote":
                return decrementVoteF(state, action.payload);
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function incrementVoteF(state, name) {
        return {
            ...state,
            candidates: state.candidates.map((candidate) =>
                candidate.name === name
                    ? { ...candidate, votes: candidate.votes + 1 }
                    : candidate
            ),
        };
    }

    function decrementVoteF(state, name) {
        return {
            ...state,
            candidates: state.candidates.map((candidate) =>
                candidate.name === name
                    ? { ...candidate, votes: Math.max(0, candidate.votes - 1) }
                    : candidate
            ),
        };
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:9000/candidates");
                if (!res.ok) {
                    throw new Error("Failed to fetch candidates");
                }
                const data = await res.json();
                dispatch({ type: "dataRecived", payload: data });
            } catch (error) {
                dispatch({ type: "fetchError", payload: error.message });
            }
        }
        fetchData();
    }, []);

    if (state.status === "loading") {
        return <p>Loading data, please wait...</p>;
    }

    if (state.status === "error") {
        return <p>Error fetching data: {state.error}</p>;
    }

    return (
        <>
            <h1>Vote Tracker</h1>
            <ul>
                {state.candidates.map((candidate) => (
                    <li key={candidate.id}>
                        {candidate.name} : {candidate.votes} votes
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "incrementVote",
                                    payload: candidate.name,
                                })
                            }>
                            +
                        </button>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "decrementVote",
                                    payload: candidate.name,
                                })
                            }>
                            -
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch({ type: "resetVote" })}>
                Reset Votes
            </button>

            <div>
                <h2>Add Candidate</h2>
                <input
                    value={state.newCandidate}
                    type="text"
                    placeholder="Candidate name"
                    onChange={(e) =>
                        dispatch({
                            type: "setNewCandidate",
                            payload: e.target.value,
                        })
                    }
                />
                <button
                    onClick={() => {
                        dispatch({
                            type: "addCandidate",
                            payload: state.newCandidate,
                        });
                    }}>
                    Add
                </button>
            </div>
        </>
    );
}

export default VoteTracker;
