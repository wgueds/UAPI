const INITIAL_STATE = {
    loading: false,
    check: false
};

export default function MessageBox(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MESSAGE_BOX_LOADING':
            return {...state, loading: action.payload}

        default:
            return state
    }
}