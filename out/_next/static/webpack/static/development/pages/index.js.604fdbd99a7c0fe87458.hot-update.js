webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Plan.js":
/*!****************************!*\
  !*** ./components/Plan.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/motzhard/projects/pm-pricing/components/Plan.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Arrow = function Arrow(props) {
  return __jsx("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("path", {
    d: "M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z",
    fill: "#1e201d",
    __self: this
  }));
};

Arrow.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 31.49 31.49"
};

var bitsToGbit = function bitsToGbit(b) {
  return b / 1073741824;
};

var Plan = function Plan(props) {
  var convertedSpace = bitsToGbit(props.MaxSpace);
  return __jsx("div", {
    className: "jsx-3082544559" + " " + "plan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3082544559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.Name), __jsx("p", {
    className: "jsx-3082544559" + " " + "pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "$", props.Pricing["1"], "/mo"), __jsx("p", {
    className: "jsx-3082544559" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.Title), __jsx("p", {
    className: "jsx-3082544559" + " " + "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3082544559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.MaxMembers, " user")), __jsx("p", {
    className: "jsx-3082544559" + " " + "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3082544559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, convertedSpace < 1 ? "".concat(convertedSpace * 1000, " Mb storage") : "".concat(convertedSpace, " Gb storage"))), __jsx("p", {
    className: "jsx-3082544559" + " " + "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3082544559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.MaxAddresses, " address")), __jsx("p", {
    className: "jsx-3082544559" + " " + "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3082544559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.MaxDomains ? "Supports ".concat(props.MaxDomains, " domain") : "No domain support")), __jsx("p", {
    className: "jsx-3082544559" + " " + "bullet asdomare",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3082544559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "ProtonVPN (optional)")), __jsx("div", {
    className: "jsx-3082544559" + " " + "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3082544559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Select")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1510110691",
    __self: this
  }, ".plan.jsx-3082544559{padding:1em;height:100%;margin-top:auto;}h2.jsx-3082544559{text-align:center;text-transform:uppercase;margin-bottom:0px;}.bullet.jsx-3082544559{position:relative;display:inline-block;vertical-align:middle;width:100%;}.pricing.jsx-3082544559{text-align:center;margin-top:2px;}.title.jsx-3082544559{margin:30px 0;text-align:center;}.asdomare.jsx-3082544559{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.cta.jsx-3082544559{text-align:center;}a.jsx-3082544559{font-size:13px;background-color:#9199cb;border-radius:5px;color:#fff;padding:1em 2em;text-align:center;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL2NvbXBvbmVudHMvUGxhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2tCLEFBR3VCLEFBS00sQUFLQSxBQU1BLEFBSUosQUFJTSxBQUdGLEFBR0gsWUE3QkgsRUFvQk0sQ0FVTyxHQXpCQSxBQUtKLEFBTU4sQUFXakIsTUExQmtCLFFBb0JsQixDQUpBLE1BTndCLENBVHhCLEFBNkJvQixHQXpCQSxlQTBCUCxHQXpCYixBQUthLFFBcUJLLEdBcEJsQixBQVdBLGFBVW9CLGtCQUNILGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL2NvbXBvbmVudHMvUGxhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnJvdyBmcm9tIFwiLi4vcHVibGljL2Fycm93LnN2Z1wiO1xuXG5jb25zdCBiaXRzVG9HYml0ID0gYiA9PiBiIC8gMTA3Mzc0MTgyNDtcblxuY29uc3QgUGxhbiA9IHByb3BzID0+IHtcbiAgY29uc3QgY29udmVydGVkU3BhY2UgPSBiaXRzVG9HYml0KHByb3BzLk1heFNwYWNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW5cIj5cbiAgICAgIDxoMj57cHJvcHMuTmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2luZ1wiPiR7cHJvcHMuUHJpY2luZ1tcIjFcIl19L21vPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuVGl0bGV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XG4gICAgICAgIDxBcnJvdyBjbGFzc05hbWU9XCJzdmdcIiAvPlxuICAgICAgICA8c3Bhbj57cHJvcHMuTWF4TWVtYmVyc30gdXNlcjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImJ1bGxldFwiPlxuICAgICAgICA8QXJyb3cgY2xhc3NOYW1lPVwic3ZnXCIgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2NvbnZlcnRlZFNwYWNlIDwgMVxuICAgICAgICAgICAgPyBgJHtjb252ZXJ0ZWRTcGFjZSAqIDEwMDB9IE1iIHN0b3JhZ2VgXG4gICAgICAgICAgICA6IGAke2NvbnZlcnRlZFNwYWNlfSBHYiBzdG9yYWdlYH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XG4gICAgICAgIDxBcnJvdyBjbGFzc05hbWU9XCJzdmdcIiAvPlxuICAgICAgICA8c3Bhbj57cHJvcHMuTWF4QWRkcmVzc2VzfSBhZGRyZXNzPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XG4gICAgICAgIDxBcnJvdyBjbGFzc05hbWU9XCJzdmdcIiAvPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7cHJvcHMuTWF4RG9tYWluc1xuICAgICAgICAgICAgPyBgU3VwcG9ydHMgJHtwcm9wcy5NYXhEb21haW5zfSBkb21haW5gXG4gICAgICAgICAgICA6IGBObyBkb21haW4gc3VwcG9ydGB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImJ1bGxldCBhc2RvbWFyZVwiPlxuICAgICAgICA8QXJyb3cgY2xhc3NOYW1lPVwic3ZnXCIgLz5cbiAgICAgICAgPHNwYW4+UHJvdG9uVlBOIChvcHRpb25hbCk8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiPlxuICAgICAgICA8YT5TZWxlY3Q8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBsYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idWxsZXQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2luZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYXNkb21hcmUge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5jdGEge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkxOTljYjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbjtcbiJdfQ== */\n/*@ sourceURL=/Users/motzhard/projects/pm-pricing/components/Plan.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3619804997",
    __self: this
  }, "svg{width:12px;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL2NvbXBvbmVudHMvUGxhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRnlCLEFBR3NCLFdBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL2NvbXBvbmVudHMvUGxhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnJvdyBmcm9tIFwiLi4vcHVibGljL2Fycm93LnN2Z1wiO1xuXG5jb25zdCBiaXRzVG9HYml0ID0gYiA9PiBiIC8gMTA3Mzc0MTgyNDtcblxuY29uc3QgUGxhbiA9IHByb3BzID0+IHtcbiAgY29uc3QgY29udmVydGVkU3BhY2UgPSBiaXRzVG9HYml0KHByb3BzLk1heFNwYWNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW5cIj5cbiAgICAgIDxoMj57cHJvcHMuTmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2luZ1wiPiR7cHJvcHMuUHJpY2luZ1tcIjFcIl19L21vPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuVGl0bGV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XG4gICAgICAgIDxBcnJvdyBjbGFzc05hbWU9XCJzdmdcIiAvPlxuICAgICAgICA8c3Bhbj57cHJvcHMuTWF4TWVtYmVyc30gdXNlcjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImJ1bGxldFwiPlxuICAgICAgICA8QXJyb3cgY2xhc3NOYW1lPVwic3ZnXCIgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2NvbnZlcnRlZFNwYWNlIDwgMVxuICAgICAgICAgICAgPyBgJHtjb252ZXJ0ZWRTcGFjZSAqIDEwMDB9IE1iIHN0b3JhZ2VgXG4gICAgICAgICAgICA6IGAke2NvbnZlcnRlZFNwYWNlfSBHYiBzdG9yYWdlYH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XG4gICAgICAgIDxBcnJvdyBjbGFzc05hbWU9XCJzdmdcIiAvPlxuICAgICAgICA8c3Bhbj57cHJvcHMuTWF4QWRkcmVzc2VzfSBhZGRyZXNzPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XG4gICAgICAgIDxBcnJvdyBjbGFzc05hbWU9XCJzdmdcIiAvPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7cHJvcHMuTWF4RG9tYWluc1xuICAgICAgICAgICAgPyBgU3VwcG9ydHMgJHtwcm9wcy5NYXhEb21haW5zfSBkb21haW5gXG4gICAgICAgICAgICA6IGBObyBkb21haW4gc3VwcG9ydGB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImJ1bGxldCBhc2RvbWFyZVwiPlxuICAgICAgICA8QXJyb3cgY2xhc3NOYW1lPVwic3ZnXCIgLz5cbiAgICAgICAgPHNwYW4+UHJvdG9uVlBOIChvcHRpb25hbCk8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiPlxuICAgICAgICA8YT5TZWxlY3Q8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBsYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idWxsZXQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2luZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYXNkb21hcmUge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5jdGEge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkxOTljYjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbjtcbiJdfQ== */\n/*@ sourceURL=/Users/motzhard/projects/pm-pricing/components/Plan.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Plan);

/***/ })

})
//# sourceMappingURL=index.js.604fdbd99a7c0fe87458.hot-update.js.map