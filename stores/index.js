"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const redux_thunk_1 = require("redux-thunk");
const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
};
exports.actionTypes = {
    ADD: 'ADD',
    TICK: 'TICK'
};
// REDUCERS
exports.reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case exports.actionTypes.TICK:
            return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light });
        case exports.actionTypes.ADD:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        default: return state;
    }
};
// ACTIONS
exports.serverRenderClock = (isServer) => dispatch => {
    return dispatch({ type: exports.actionTypes.TICK, light: !isServer, ts: Date.now() });
};
exports.startClock = () => dispatch => {
    return setInterval(() => dispatch({ type: exports.actionTypes.TICK, light: true, ts: Date.now() }), 800);
};
exports.addCount = () => dispatch => {
    return dispatch({ type: exports.actionTypes.ADD });
};
exports.initStore = (initialState = exampleInitialState) => {
    return redux_1.createStore(exports.reducer, initialState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
};
