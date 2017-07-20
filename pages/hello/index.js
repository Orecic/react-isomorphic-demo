"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const redux_thunk_1 = require("redux-thunk");
const Hello_1 = require("containers/Hello");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const index_1 = require("reducers/index");
require("../index.less");
const store = redux_1.createStore(index_1.enthusiasm, {
    enthusiasmLevel: 2,
    languageName: 'Rabbit',
}, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
exports.default = () => React.createElement("div", null,
    React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(Hello_1.default, null)));
