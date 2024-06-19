import {PURGE, REHYDRATE} from 'redux-persist';

const INITIAL_STATE = {
    address: {},
    hasAddress: false,
    company_id: null,
    loading: false
};

export default function App(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_ADDRESS':
            return {...state, address: {...state.address, ...action.data}, hasAddress: true};

        case 'ADD_COMPANY':
            return {...state, company_id: action.companyId}

        case 'REMOVE_ADDRESS':
            return {_persist: state._persist, hasAddress: false, company_id: null}

        case 'SET_LOADING':
            return {...state, loading: action.payload}

        default:
            return state
    }
}