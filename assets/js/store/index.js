import { createStore, combineReducers } from 'redux';
import Immutable from 'immutable';

/** Test Store **/
const testInitialState = Immutable.fromJS({
    user: {}
})

const testReducer = function (state = testInitialState, action) {
    switch (action.type) {
        case 'GET_USER':
            return state.set('user', action.user);
    }

    return state;
}

const reducers = combineReducers({
    testState: testReducer
});

const store = createStore(reducers);

export default store;
