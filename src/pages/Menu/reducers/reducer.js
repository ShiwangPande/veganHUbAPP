export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id !== action.payload;
            }),
        };
    }

    if (action.type === "CLEAR_CART") {
        return { ...state, item: [] };
    }

    if (action.type === "INCREMENT") {
        const updatedCart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity + 1 };
            }
            return curElem;
        });

        return { ...state, item: updatedCart };
    }
    // add to cart with img and title

    if (action.type === "ADD_CART") {
//  replicate item for differt cart and shift to cart
        const { item } = state;
        const { id, img, title, price } = action.payload;
        const updatedItem = item.map((curElem) => {
            if (curElem.id === id) {
                return { ...curElem, quantity: curElem.quantity + 1 };
            }
            return curElem;
        }
        );
        return { ...state, item: updatedItem };

    


    }

    if (action.type === "DECREMENT") {
        const updatedCart = state.item
            .map((curElem) => {
                if (curElem.id === action.payload) {
                    return { ...curElem, quantity: curElem.quantity - 1 };
                }
                return curElem;
            })
            .filter((curElem) => curElem.quantity !== -1);
        return { ...state, item: updatedCart };
    }

    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
            (accum, curVal) => {
                let { price, quantity } = curVal;


                let updatedTotalAmount = price * quantity;
                accum.totalAmount += updatedTotalAmount;

                accum.totalItem += quantity;
                return accum;
            },
            {
                totalItem: 0,
                totalAmount: 0,
            }
        );
        return { ...state, totalItem, totalAmount };
    }
    return state;
};
