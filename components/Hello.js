"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const stylesheet = require("./Hello.less");
function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    return (React.createElement("div", { className: "hello" },
        React.createElement("style", { dangerouslySetInnerHTML: { __html: stylesheet } }),
        React.createElement("div", { className: "greeting" },
            "Hello ",
            name + getExclamationMarks(enthusiasmLevel)),
        React.createElement("div", null,
            React.createElement("button", { onClick: onDecrement }, "-"),
            React.createElement("button", { onClick: onIncrement }, "+"))));
}
exports.default = Hello;
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
