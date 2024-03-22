export default {

    namespace: 'loginPage',

    state: {
        start: 0
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *login({ user }, { call, put }) {  // eslint-disable-line
            if( user.username == 'admin' &&  user.password == 'qwerty' ) { window.location.hash = '/home' }
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
