"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hello_1 = require("../components/Hello");
const actions = require("../actions/");
const react_redux_1 = require("react-redux");
function mapStateToProps({ enthusiasmLevel, languageName }) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Hello_1.default);
