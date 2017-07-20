"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const link_1 = require("next/link");
const services_1 = require("../services");
const stylesheet = require("./index.less");
const PostLink = (props) => (React.createElement("li", null,
    React.createElement(link_1.default, { as: `/p/${props.id}`, href: `/post?title=${props.title}` },
        React.createElement("a", null, props.title))));
class default_1 extends React.Component {
    static getInitialProps(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield services_1.getList();
            return { json };
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("style", { dangerouslySetInnerHTML: { __html: stylesheet } }),
            React.createElement("ul", { className: "nav" },
                React.createElement("li", null,
                    React.createElement(link_1.default, { href: '/' },
                        React.createElement("a", null, "index"))),
                React.createElement("li", null,
                    React.createElement(link_1.default, { href: '/hello' },
                        React.createElement("a", null, "hello")))),
            React.createElement("ul", null,
                React.createElement(PostLink, { id: "hello-wolrd", title: "Hello Wolrd!" }),
                React.createElement(PostLink, { id: "hello-rabbit", title: "Hello Rabbit" }))));
    }
}
exports.default = default_1;
