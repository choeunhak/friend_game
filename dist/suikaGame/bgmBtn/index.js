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
var BGMBtn = function (_a) {
    var isPlaying = _a.isPlaying, handleMusic = _a.handleMusic;
    return (_jsxs("button", __assign({ className: cx("bgmBtn", { playing: isPlaying }), onClick: handleMusic }, { children: [_jsx("div", { className: cx("border") }), _jsx("div", { className: cx("play") })] })));
};
export default BGMBtn;
