import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);

    const addCash = (cash) => dispatch({ type: "ADD_CASH", payload: cash });

    const getCash = (cash) => dispatch({ type: "GET_CASH", payload: cash });

    return (
        <div className="App">
            <h1>{cash}</h1>
            <button onClick={() => addCash(Number(prompt("enter: ")))}>
                Add
            </button>

            {cash > 0 && <button onClick={() => getCash(10)}>Get</button>}
        </div>
    );
}

export default App;
