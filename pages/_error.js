"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Error extends React.Component {
    static getInitialProps({ res, jsonPageRes }) {
        const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null);
        return { statusCode };
    }
    render() {
        return (React.createElement("p", null, this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'));
    }
}
exports.default = Error;
