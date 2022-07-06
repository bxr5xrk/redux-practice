import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCustomers, removeCustomers } from "./store/customerReducer";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);

    const addCash = (cash) => dispatch({ type: "ADD_CASH", payload: cash });

    const getCash = (cash) => dispatch({ type: "GET_CASH", payload: cash });

    const addCustomer = (name) => {
        const user = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomers(user));
    };

    const removeCustomer = (id) => dispatch(removeCustomers(id));

    return (
        <div className="App">
            <h1>{cash}</h1>
            <div>
                <button onClick={() => addCash(Number(prompt("enter: ")))}>
                    Add
                </button>

                {cash > 0 && <button onClick={() => getCash(10)}>Get</button>}
            </div>

            <button onClick={() => addCustomer(prompt("enter: "))}>
                Add Customer
            </button>

            {customers.length ? (
                customers.map((obj, id) => (
                    <div key={id} className="user">
                        <h3>
                            {id + 1}. {obj.name}
                        </h3>
                        <h4 onClick={() => removeCustomer(obj.id)}>remove</h4>
                    </div>
                ))
            ) : (
                <h1>користувачів немає</h1>
            )}
        </div>
    );
}

export default App;
