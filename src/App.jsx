import { useState, useRef, useEffect } from "react";
import useFetch from "./hooks/useFetch";

// function CounterApp() {
//     const [count, setCount] = useState(0);

//     const { data, loading, error } = useFetch(
//         "https://jsonplaceholder.typicode.com/posts"
//     );

//     if (loading) {
//         return <p>Loading...</p>;
//     }
//     if (error) {
//         return <p>Error...</p>;
//     }

//     let clickCount = 0;
//     const clickRef = useRef(0);
//     console.log(clickRef);

//     const handleClick = () => {
//         setCount((prev) => prev + 1);

//         clickCount++;
//         clickRef.current++;
//     };

//     console.log("Component re-rendered");

//     const inputRef = useRef(null);

//     useEffect(() => {
//         // const el = document.querySelector(".input");
//         // console.log(el);
//         // el.focus();
//         console.log(inputRef.current);
//         inputRef.current.focus();
//     }, []);

//     function handleFocus() {
//         inputRef.current.focus();
//     }

//     return (
//         <div style={{ fontFamily: "Arial", padding: "20px" }}>
//             <ul>
//                 {data.map((post) => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>

//             <h1>Counter Example</h1>
//             <p>Current Count (useState): {count}</p>
//             <p>Total Clicks (variable): {clickCount}</p>
//             <p>Total Clicks (useRef): {clickRef.current}</p>

//             <button
//                 onClick={handleClick}
//                 style={{
//                     padding: "10px 20px",
//                     fontSize: "16px",
//                     cursor: "pointer",
//                     marginTop: "10px",
//                 }}
//             >
//                 Increment
//             </button>

//             <input
//                 ref={inputRef}
//                 type="text"
//                 className="input"
//                 placeholder="Type something..."
//             />
//             <button onClick={handleFocus}>Focus inpit</button>
//         </div>
//     );
// }

// export default CounterApp;

function CounterApp() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default CounterApp;
