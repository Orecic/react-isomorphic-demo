"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.default = () => (react_1.default.createElement("div", null,
    react_1.default.createElement("h3", null, "Loading..."),
    react_1.default.createElement("style", { jsx: true }, `
      div {
        align-items: center;
        display: flex;
        height: 50vh;
        justify-content: center;
      }
    `)));
