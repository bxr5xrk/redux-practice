const initialState = {
    customers: [],
};

const ADD_CUSTOMERS = "ADD_CUSTOMERS";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";

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
        default:
            return state;
    }
};

export const addCustomers = (user) => ({ type: ADD_CUSTOMERS, payload: user });
export const removeCustomers = (id) => ({ type: REMOVE_CUSTOMERS, payload: id })