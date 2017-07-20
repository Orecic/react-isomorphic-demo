"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class default_1 extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, this.props.url.query.title),
            React.createElement("p", null, "just a demo.")));
    }
}
exports.default = default_1;
