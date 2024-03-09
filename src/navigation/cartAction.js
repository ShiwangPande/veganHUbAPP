export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

// cartReducer.js
const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Handle adding item to cart
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case 'REMOVE_FROM_CART':
            // Handle removing item from cart
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        case 'CLEAR_CART':
            // Handle clearing cart
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};

export default cartReducer;