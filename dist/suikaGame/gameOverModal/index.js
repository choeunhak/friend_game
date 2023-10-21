var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.scss';
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
var GameOverModal = function (_a) {
    var isVisible = _a.isVisible, onClick = _a.onClick, score = _a.score;
    if (!isVisible)
        return null;
    return (_jsxs("div", __assign({ className: cx('gameOverArea') }, { children: [_jsx("span", __assign({ className: cx('text') }, { children: "GAME OVER" })), _jsxs("span", __assign({ className: cx('score') }, { children: ["SCORE: ", score] })), _jsx("button", __assign({ className: cx('btn'), onClick: onClick }, { children: "\u21BB TRY AGAIN?" }))] })));
};
export default GameOverModal;
