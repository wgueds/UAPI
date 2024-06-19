const INITIAL_STATE = {
    isAuth: false,
    token: null,
    user: {
        id: null,
        name: null,
        email: null,
        orders: [],
        payment_credit_cards: [
            // {
            //     string: 'MasterCard (5899)',
            //     access_token: '',
            //     card_flag: 'MasterCard',
            //     card_number: '',
            //     card_name: null,
            //     card_expiration_date: null,
            //     card_security_code: null,
            // },
            // {
            //     string: 'Visa (5412)',
            //     access_token: '',
            //     card_flag: null,
            //     card_number: null,
            //     card_name: null,
            //     card_expiration_date: null,
            //     card_security_code: null,
            // }
        ],
        addresses: [
            // {
            //     id: 1,
            //     title: 'Apartamento',
            //     address: 'Rua Doutor Eloy Chaves',
            //     zipcode: '13218050',
            //     number: '178',
            //     neighborhood: 'Ponte São João',
            //     city: 'Jundiaí',
            //     state: 'SP',
            //     latitude: '-23.199622',
            //     longitude: '-46.891083',
            //     active: false,
            // },
        ]
    },
    error: false,
    error_message: null
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return { ...state, email, password };

        case 'SUCCESS_LOGIN':
            return { ...state, isAuth: true, token: action.payload };

        case 'SAVE_DATA_USER':
            return { ...state, user: action.payload };

        case 'SAVE_DATA_PAYMENT':
            return {
                ...state,
                user: {
                    ...state.user,
                    payment_credit_cards: [
                        {
                            id: 2,
                            string: '',
                            access_token: '',
                            card_flag: '',
                            card_number: '',
                            card_name: null,
                            card_expiration_date: null,
                            card_security_code: null,
                            active: false,
                        }
                    ]
                }
            };

        case 'SAVE_DATA_ADDRESSES':
            return {
                ...state,
                user: {
                    ...state.user,
                    addresses: action.payload
                }
            };

        case 'USER_SET_DEFAULT_ADDRESS':
            return {
                ...state,
                user: {
                    ...state.user,
                    addresses: state.user.addresses.map(
                        item => item.id === action.payload
                            ? {
                                ...item,
                                check: true
                            }
                            : {
                                ...item,
                                check: false
                            }
                    )
                }
            };

        case 'USER_SET_DEFAULT_PAYMENT':
            return {
                ...state,
                user: {
                    ...state.user,
                    payment_credit_cards: state.user.payment_credit_cards.map(
                        item => item.id === action.payload
                            ? {
                                ...item,
                                check: true
                            }
                            : {
                                ...item,
                                check: false
                            }
                    )
                }
            };

        case 'LOGOUT':
            return INITIAL_STATE;

        case 'ERROR_LOGIN':
            // console.log('reducer/login:89');
            // console.log(action);
            return { ...state, isAuth: false, error: true, error_message: action.payload }

        default:
            return state
    }
}