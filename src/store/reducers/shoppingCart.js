const INITIAL_STATE = {
    quantity: 0,
    total: 0,
    payment: {
        id: null,
        string: null,
        card_flag: null,
        card_number: null,
        card_name: null,
        card_expiration_date: null,
        card_security_code: null,
    },
    cart: []
};

export default function ShoppingCart(state = INITIAL_STATE, action) {
    let _cart = [];

    switch (action.type) {
        case 'ADD_SHOPPING_CART':
            // remove if exists item
            _cart = state.cart.filter(item => action.payload.id !== item.id);

            return {
                ...state,
                cart: [..._cart, action.payload]
            };

        case 'ADD_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.payload.id
                        ? {
                            ...product,
                            quantity: product.quantity + 1,
                            price: product.original_price * (product.quantity + 1)
                        }
                        : product,
                ),
            };

        case 'REMOVE_QUANTITY':
            /**
             * if quantity < 1 remove to cart
             */
            if (action.payload.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter(item => action.payload.id !== item.id)
                };
            }

            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.payload.id
                        ? {
                            ...product,
                            quantity: product.quantity - 1,
                            price: product.original_price * (product.quantity - 1)
                        }
                        : product,
                ),
            };

        case 'REMOVE_SHOPPING_CART_ITEM':
            return [...state, state.cart.filter(item => action.payload.id !== item.id)];

        case 'ADD_PAYMENT':
            return {
                ...state,
                payment: action.payload
            };

        case 'CALC_TOTALS':
            _cart = state.cart;
            let _quantity = 0;
            let _total = 0;

            _cart.map(item => {
                _quantity += parseInt(item.quantity);
                _total += parseFloat(item.price);
            });

            return {...state, quantity: _quantity, total: _total};

        case 'REMOVE_SHOPPING_CART_ALL':
            return INITIAL_STATE;

        default:
            return state
    }
}