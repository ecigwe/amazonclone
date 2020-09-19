export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => {
        return item.price + amount;
    }, 0);
};
export const getBasketPrice = (basket) => {
    let price = 0;
    basket.forEach(item => {
        price += item.price;
    });
    return price;
}

export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case "SET_USER":
            return {
                ...state, user: action.user
            }
            case "ADD_TO_BASKET":
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };
                break;
            case "REMOVE_FROM_BASKET":
                let newBasket = [...state.basket];
                const index = state.basket.findIndex((basketItem) => {
                    return basketItem.id === action.id;
                });
                console.log(index);
                if (index !== -1) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(`cant remove product  with (id:${action.id})`);
                }
                return {
                    ...state,
                    basket: newBasket,
                };

                break;
            default:
                return state;
    }
};

export default reducer;