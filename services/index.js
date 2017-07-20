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
const http_1 = require("./http");
function getList() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield http_1.get('https://api.tvmaze.com/shows/1234');
    });
}
exports.getList = getList;
function postData() {
    return __awaiter(this, void 0, void 0, function* () {
        return http_1.post('https://api.tvmaze.com/shows/1234', { "key": "66c36ac69805b4556460e9bdc5ae8f4d" });
    });
}
exports.postData = postData;
