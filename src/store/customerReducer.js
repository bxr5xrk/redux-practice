const initialState = {
    customers: [],
};

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => dispatch(addManyCustomers(json)));
    };
};

const ADD_CUSTOMERS = "ADD_CUSTOMERS";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, action.payload],
            };
        case REMOVE_CUSTOMERS:
            return {
                ...state,
                customers: state.customers.filter(
                    (obj) => obj.id !== action.payload
                ),
            };
        case ADD_MANY_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, ...action.payload],
            };
        default:
            return state;
    }
};

export const addCustomers = (user) => ({ type: ADD_CUSTOMERS, payload: user });
export const removeCustomers = (id) => ({
    type: REMOVE_CUSTOMERS,
    payload: id,
});
export const addManyCustomers = (users) => ({
    type: ADD_MANY_CUSTOMERS,
    payload: users,
});
