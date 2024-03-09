// cartReducer.js
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    items: [], // Array to store cart items
};

const cartPersistConfig = {
    key: 'cart',
    storage,
    whitelist: ['items'], // Only items will be persisted
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload], // Add the new item to the cart
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload), // Remove the item from the cart
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: [], // Clear all items from the cart
            };
        default:
            return state;
    }
};

export default persistReducer(cartPersistConfig, cartReducer);
