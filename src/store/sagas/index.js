import {AsyncStorage} from 'react-native';
import {fork, take, takeLatest, put, call} from 'redux-saga/effects';

import {ERROR} from '../../errors';
import api from '../../service/api';
import oauth2 from '../../service/oauth2';

/**
 * Method responsible for register user
 *
 * @param {} name
 * @param {*} email
 * @param {*} password
 */
async function register(name, email, password) {
    // try {
    return await api.post('register', {name, email, password})
        .then(response => {
            // console.log('RESPONSE THEN');
            // console.log(response);

            return {success: true};
        })
        .catch(function (err) {

            console.log('saga register');
            console.log(err.response.data);

            if (err.response) {
                try {
                    let error = err.response.data.message;

                    if (err.response.data.hasOwnProperty('errors')) {
                        const errors = err.response.data.errors;
                        const propertyArray = Object.getOwnPropertyNames(errors);

                        /**
                         * get only errors from api
                         */
                        propertyArray.forEach(function (key, idx, array) {
                            error = errors[key][0];
                            return false;
                        });
                    }

                    if (err.response.data.hasOwnProperty('error')) {
                        error = err.response.data.error.message;
                    }

                    console.log('error message');
                    console.log(error);

                    return {success: false, error: error};
                } catch (try_err) {
                    return {success: false, error: ERROR.ERROR_REGISTER};
                }
            }
        });
}

/**
 * Method responsible for send request to api login
 *
 * @param {string} email
 * @param {string} password
 */
function requestLogin(email, password) {
    try {
        // const response = await api.post('user/login', {email, password});
        //client_id: 5,
        //             client_secret: 'W9DUQ2ISIUSIUWyjBaH7pfLkrnzruC4sKYOaIMMY',
        const form_params = {
            grant_type: 'password',
            client_id: 4,
            client_secret: 'CVYUfW1N95fIBgOo3SrDvuGFHdYjAqERuwxWukMt',
            username: email,
            password: password,
            scope: '*',
        };

        /**
         * "data": Object {
            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZjEwOTQzY2NjZDI3MzYxZThlZGE3N2VkZDk5NjhjODBhZmEzNDRmOWY1MGVhNWU4MDc2YTkxYWZiNzI5ZThiMmZlMDhjYTM1NTMxZGVhNzMiLCJpYXQiOjE1OTY5ODMwMTAsIm5iZiI6MTU5Njk4MzAxMCwiZXhwIjoxNjI4NTE5MDEwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.c5KC3NgcOkqNCywo-A5xty8cFff5czeUmqXP7dhEVb06QRLMPJhNqet_p9fpKI69C7HuJeuQpzHlt1flhlMH0rt1xyHSw5IGiTGlcKdNHpK4Aysq4X2L1cinDj95EtM4HXWDjRh-rVaWWDpWrdZK5izKMdJywVsITb8qYrY3IvHoxN06SWzOH8piSbB9goLylqEc9SjSnciiDJRHv0RDaHyJKYo8Pf9pvrz6B4zbRiEiMXRCJnhn_fNeM39Xm4uflLwbk49tPwK415i2Jz0ZtdzI0UeD32LzrK2eorqCJ7b4ZCfmxrZ02T6U-BNGwQVvVwaLQFSp9bwMCvFptkmQNJ1h21GOYJL1uEi9sItmnHR61hGaqQuKXjDLo_YtRDxFFe0m7gwI-gJ2XCUbuGufHwLH6aMgF2Oy09VrhWnY8ym24x_JIoVA3KCJfBAdEgXQ9SyfLCedwOffJRwfllr7DAr2bhtKhvLlfasrsiXhKsFA7e8fcZrbTNjsv-AXo7xf47ycUxFmDtOanfdsgHg73KPGfD2mGyqU6AAqH4_vm3Baw07ZaLr8grKUK-Kcjif65clI4GHdjDps6JRS-PvaozxrCqfXj1Wb6wcT6FsaQle2-o2VwVC2wSrq0X8syOiZXc6RqPkLWTdcPd5_pLvT4DcQMD5zO9lrymHbLv1rfdg",
            "expires_in": 31536000,
            "refresh_token": "def50200be91b8e0cb172b77d23bcef26a4156aa37044f1b3f89727b8bcc96ecf43e7e031fda28885f70d0152995331c1aa8d1eafcd32f9c288dea4a63136fdf968baa6c389b687af71037731528e601ae2d6a36d88628d9cf5c870d2d391f0dfee336250121bcd45c0eae52d9d4b755285a8dad542da0a2ac7f071d1d6e67e0547620e1072d4a80fa42f35b29b719705ccfa038d156239040ca9d935e7a41de87237362c7c06ef785185a4d20a748f5743af6b043756eccf1a1fb8db8cae225750057ffbb2bc440d05aee81f7d687750dbb8271e2a3cde66507202f4075a71a40a8f6308532df99e3d26e5e8b3706f703d11c665a85addd97c9a23b296648f36067cbcc45a4cebcb774a7184edb1313fe55d7e2b92af8db8cd15e172c35b134a19cad618c49991b89cd800c68f0c14835f0c930d1eec91a77b7144b9a10bbcb0352ed53e627877dbb5bb7946d2d49b1aceaedba8dbbb1b0a3a0a360ba1feea96d",
            "token_type": "Bearer",
          },
         */

        return oauth2.post('/oauth/token', form_params)

            .catch(function (err) {

                //console.log(err);

                // if (err.response) {
                //     let error = err.response.data.message;
                //
                //     const errors = err.response.data.errors;
                //     const propertyArray = Object.getOwnPropertyNames(errors);
                //
                //     /**
                //      * get only errors from api
                //      */
                //     propertyArray.forEach(function (key, idx, array) {
                //         error = errors[key][0];
                //         return false;
                //     });
                //
                //     return {success: false, error: error};
                // }
            });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

function getUserData(token) {
    try {
        return api.get('user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        throw new Error(error);
    }
}

function logout() {
    // todo
}

function* watchRegisterUser() {
    while (true) {
        const {name, email, password} = yield take('ASYNC_REQUEST_REGISTER');

        try {
            const response = yield call(register, name, email, password);

            if (response.success) {
                const responseLogin = yield call(requestLogin, email, password);

                // console.log(responseLogin.data);

                const token = responseLogin.data.access_token;
                const response = yield call(getUserData, token);

                yield put({type: 'SUCCESS_LOGIN', payload: token});
                yield put({type: 'SAVE_DATA_USER', payload: response.data});
                yield put({type: 'SAVE_DATA_PAYMENT'});
                // yield put({type: 'SAVE_DATA_ADDRESSES'});
            } else {
                yield put({type: 'ERROR_LOGIN', payload: response.error});
            }
        } catch (err) {
            yield put({type: 'ERROR_LOGIN', payload: err});
        }
    }
}

function* watchLoginRequest() {
    while (true) {
        const {email, password} = yield take('ASYNC_REQUEST_LOGIN');

        try {
            const responseLogin = yield call(requestLogin, email, password);
            const token = responseLogin.data.access_token;
            // console.log(token);

            const response = yield call(getUserData, token);
            // console.log(response);

            yield put({type: 'SUCCESS_LOGIN', payload: token});
            yield put({type: 'SAVE_DATA_USER', payload: response.data});
            yield put({type: 'SAVE_DATA_PAYMENT'});
            // yield put({type: 'SAVE_DATA_ADDRESSES'});
        } catch (err) {
            yield put({type: 'ERROR_LOGIN', payload: err});
        }
    }
}

function* watchLogout() {
    while (true) {
        const verify = yield take('ASYNC_LOGOUT');

        try {
            // yield call(logout);

            // if (response != null)
            yield put({type: 'LOGOUT'});
        } catch (error) {
            console.log('erro');
            console.log(error);
        }
    }
}

export default function* root() {
    yield fork(watchRegisterUser);
    // yield fork(watchVerifyLogin);
    yield fork(watchLoginRequest);
    yield fork(watchLogout);
}