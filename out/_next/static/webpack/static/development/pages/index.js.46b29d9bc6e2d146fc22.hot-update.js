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

var bitsConverter = function bitsConverter(b) {};

var Plan = function Plan(props) {
  var convertedSpace = bitsToGbit(props.MaxSpace);
  return __jsx("div", {
    className: "jsx-200402828" + " " + "plan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.Name), __jsx("p", {
    className: "jsx-200402828" + " " + "pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "$", props.Pricing["1"], "/mo"), __jsx("p", {
    className: "jsx-200402828" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.Title), __jsx("p", {
    className: "jsx-200402828" + " " + "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.MaxMembers, " user")), __jsx("p", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, convertedSpace < 1 ? "".concat(convertedSpace * 100, " Mb storage") : "".concat(convertedSpace, " Gb storage"))), __jsx("p", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.MaxAddresses, " address")), __jsx("p", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(Arrow, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.MaxDomains ? "Supports ".concat(props.MaxDomains, " domain") : "No domain support")), __jsx("p", {
    className: "jsx-200402828",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "ProtonVPN (optional)"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "68932288",
    __self: this
  }, ".plan.jsx-200402828{padding:1em;}h2.jsx-200402828{text-align:center;text-transform:uppercase;margin-bottom:0px;}.bullet.jsx-200402828{position:relative;display:inline-block;vertical-align:middle;width:100%;}.pricing.jsx-200402828{text-align:center;margin-top:2px;}.title.jsx-200402828{margin:30px 0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL2NvbXBvbmVudHMvUGxhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBR3VCLEFBR00sQUFLQSxBQU1BLEFBSUosWUFqQmhCLEVBa0JvQixJQWZPLEFBS0osQUFNTixjQUtqQixDQUpBLE1BTndCLElBTEosa0JBQ3BCLEFBS2EsV0FDYiIsImZpbGUiOiIvVXNlcnMvbW90emhhcmQvcHJvamVjdHMvcG0tcHJpY2luZy9jb21wb25lbnRzL1BsYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJyb3cgZnJvbSBcIi4uL3B1YmxpYy9hcnJvdy5zdmdcIjtcblxuY29uc3QgYml0c1RvR2JpdCA9IGIgPT4gYiAvIDEwNzM3NDE4MjQ7XG5jb25zdCBiaXRzQ29udmVydGVyID0gYiA9PiB7fTtcblxuY29uc3QgUGxhbiA9IHByb3BzID0+IHtcbiAgY29uc3QgY29udmVydGVkU3BhY2UgPSBiaXRzVG9HYml0KHByb3BzLk1heFNwYWNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW5cIj5cbiAgICAgIDxoMj57cHJvcHMuTmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2luZ1wiPiR7cHJvcHMuUHJpY2luZ1tcIjFcIl19L21vPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuVGl0bGV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYnVsbGV0XCI+XG4gICAgICAgIDxBcnJvdyBjbGFzc05hbWU9XCJzdmdcIiAvPlxuICAgICAgICA8c3Bhbj57cHJvcHMuTWF4TWVtYmVyc30gdXNlcjwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8QXJyb3cgY2xhc3NOYW1lPVwic3ZnXCIgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2NvbnZlcnRlZFNwYWNlIDwgMVxuICAgICAgICAgICAgPyBgJHtjb252ZXJ0ZWRTcGFjZSAqIDEwMH0gTWIgc3RvcmFnZWBcbiAgICAgICAgICAgIDogYCR7Y29udmVydGVkU3BhY2V9IEdiIHN0b3JhZ2VgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPEFycm93IGNsYXNzTmFtZT1cInN2Z1wiIC8+XG4gICAgICAgIDxzcGFuPntwcm9wcy5NYXhBZGRyZXNzZXN9IGFkZHJlc3M8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPEFycm93IGNsYXNzTmFtZT1cInN2Z1wiIC8+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtwcm9wcy5NYXhEb21haW5zXG4gICAgICAgICAgICA/IGBTdXBwb3J0cyAke3Byb3BzLk1heERvbWFpbnN9IGRvbWFpbmBcbiAgICAgICAgICAgIDogYE5vIGRvbWFpbiBzdXBwb3J0YH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHA+UHJvdG9uVlBOIChvcHRpb25hbCk8L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wbGFuIHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnVsbGV0IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNpbmcge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFuO1xuIl19 */\n/*@ sourceURL=/Users/motzhard/projects/pm-pricing/components/Plan.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3619804997",
    __self: this
  }, "svg{width:12px;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL2NvbXBvbmVudHMvUGxhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHlCLEFBR3NCLFdBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL2NvbXBvbmVudHMvUGxhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnJvdyBmcm9tIFwiLi4vcHVibGljL2Fycm93LnN2Z1wiO1xuXG5jb25zdCBiaXRzVG9HYml0ID0gYiA9PiBiIC8gMTA3Mzc0MTgyNDtcbmNvbnN0IGJpdHNDb252ZXJ0ZXIgPSBiID0+IHt9O1xuXG5jb25zdCBQbGFuID0gcHJvcHMgPT4ge1xuICBjb25zdCBjb252ZXJ0ZWRTcGFjZSA9IGJpdHNUb0diaXQocHJvcHMuTWF4U3BhY2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhblwiPlxuICAgICAgPGgyPntwcm9wcy5OYW1lfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcmljaW5nXCI+JHtwcm9wcy5QcmljaW5nW1wiMVwiXX0vbW88L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5UaXRsZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJidWxsZXRcIj5cbiAgICAgICAgPEFycm93IGNsYXNzTmFtZT1cInN2Z1wiIC8+XG4gICAgICAgIDxzcGFuPntwcm9wcy5NYXhNZW1iZXJzfSB1c2VyPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxBcnJvdyBjbGFzc05hbWU9XCJzdmdcIiAvPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7Y29udmVydGVkU3BhY2UgPCAxXG4gICAgICAgICAgICA/IGAke2NvbnZlcnRlZFNwYWNlICogMTAwfSBNYiBzdG9yYWdlYFxuICAgICAgICAgICAgOiBgJHtjb252ZXJ0ZWRTcGFjZX0gR2Igc3RvcmFnZWB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8QXJyb3cgY2xhc3NOYW1lPVwic3ZnXCIgLz5cbiAgICAgICAgPHNwYW4+e3Byb3BzLk1heEFkZHJlc3Nlc30gYWRkcmVzczwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8QXJyb3cgY2xhc3NOYW1lPVwic3ZnXCIgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3Byb3BzLk1heERvbWFpbnNcbiAgICAgICAgICAgID8gYFN1cHBvcnRzICR7cHJvcHMuTWF4RG9tYWluc30gZG9tYWluYFxuICAgICAgICAgICAgOiBgTm8gZG9tYWluIHN1cHBvcnRgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8cD5Qcm90b25WUE4gKG9wdGlvbmFsKTwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBsYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idWxsZXQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2luZyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW47XG4iXX0= */\n/*@ sourceURL=/Users/motzhard/projects/pm-pricing/components/Plan.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Plan);

/***/ })

})
//# sourceMappingURL=index.js.46b29d9bc6e2d146fc22.hot-update.js.map