"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../constants/index");
function enthusiasm(state, action) {
    switch (action.type) {
        case index_1.INCREMENT_ENTHUSIASM:
            return Object.assign({}, state, { enthusiasmLevel: state.enthusiasmLevel + 1 });
        case index_1.DECREMENT_ENTHUSIASM:
            return Object.assign({}, state, { enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) });
        default:
            return state;
    }
}
exports.enthusiasm = enthusiasm;
