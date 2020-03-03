webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Plan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Plan */ "./components/Plan.js");

var _jsxFileName = "/Users/motzhard/projects/pm-pricing/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var HomePage = function HomePage(_ref) {
  var plans = _ref.plans;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-3760588874",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Plans & prices"), __jsx("ul", {
    className: "jsx-3760588874" + " " + "plans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, plans.map(function (plan) {
    return __jsx("li", {
      className: "jsx-3760588874" + " " + "plan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_components_Plan__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, plan, {
      key: plan.ID,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3760588874",
    __self: this
  }, ".plans.jsx-3760588874{list-style:none;margin:2em;padding:0;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));}.plan.jsx-3760588874{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:5px;border:1px solid rgb(220,220,220);padding-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUcyQixBQVFILGdCQVBGLFdBQ0QsVUFDRyxhQUNDLGNBQzhDLFVBSXRDLGdEQUh4Qiw4QkFJb0Isa0JBQ2tCLGtDQUNoQixvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL21vdHpoYXJkL3Byb2plY3RzL3BtLXByaWNpbmcvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IFBsYW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxhblwiO1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHBsYW5zIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPlBsYW5zICYgcHJpY2VzPC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwbGFuc1wiPlxuICAgICAgICB7cGxhbnMubWFwKHBsYW4gPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwbGFuXCI+XG4gICAgICAgICAgICA8UGxhbiB7Li4ucGxhbn0ga2V5PXtwbGFuLklEfSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBsYW5zIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBDYWxsZWQgYXQgYnVpbGQgdGltZSBhbmQgcmVuZGVycyB0aGUgcGFnZSB0byBzdGF0aWMgSFRNTC5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkucHJvdG9ubWFpbC5jaC9wYXltZW50cy9wbGFuc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgIFwieC1wbS1hcHB2ZXJzaW9uXCI6IFwiT3RoZXJcIixcbiAgICAgICAgXCJ4LXBtLWFwaXZlcnNpb25cIjogXCIzXCIsXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQucHJvdG9ubWFpbC52MStqc29uXCJcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBDYW5ub3QgZmV0Y2ggcGxhbnMgZGF0YSwgc3RhdHVzIGNvZGU6ICR7cmVzcG9uc2Uuc3RhdHVzfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIEFzIHBlciBhZ3JlZW1lbnQsIGknbSBmZXRjaGluZyB0aGUgQVBJIGFuZCBmaWx0ZXIgZG93biBvbmx5IHRoZSBwbGFucyBpJ20gaW50ZXJlc3RlZCBpblxuICAgIGNvbnN0IHBsYW5zID0ganNvbi5QbGFucy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyLk5hbWUgPT09IFwicGx1c1wiIHx8XG4gICAgICAgIGN1cnIuTmFtZSA9PT0gXCJwcm9mZXNzaW9uYWxcIiB8fFxuICAgICAgICBjdXJyLk5hbWUgPT09IFwidmlzaW9uYXJ5XCJcbiAgICAgICkge1xuICAgICAgICBhY2MucHVzaChjdXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gaSdtIGFkZGluZyB0aGUgbWlzc2luZyBGcmVlIHBsYW5cbiAgICBwbGFucy51bnNoaWZ0KHtcbiAgICAgIElEOlxuICAgICAgICBcIkZyM0UtQmFhYWFhYWFhYWFhYWFwcVFiZDFGSVRWV1lmVGZLWVVtVl93S0tSM0dzdmVONEhaQ2g5ZXI1ZGhlbFl5bEVwLWZoakJiVVBETUhHVTY5OWZ3PT1cIixcbiAgICAgIFR5cGU6IDEsXG4gICAgICBOYW1lOiBcImZyZWVcIixcbiAgICAgIFRpdGxlOiBcIlRoZSBiYXNpYyBmb3IgcHJpdmF0ZSBhbmQgc2VjdXJlIGNvbW11bmljYXRpb25cIixcbiAgICAgIE1heERvbWFpbnM6IDAsXG4gICAgICBNYXhBZGRyZXNzZXM6IDEsXG4gICAgICBNYXhTcGFjZTogNTM2ODcwOTEyLFxuICAgICAgTWF4TWVtYmVyczogMSxcbiAgICAgIE1heFZQTjogMCxcbiAgICAgIFNlcnZpY2VzOiAxLFxuICAgICAgRmVhdHVyZXM6IDAsXG4gICAgICBQcmljaW5nOiB7XG4gICAgICAgIFwiMVwiOiAwLFxuICAgICAgICBcIjEyXCI6IDAsXG4gICAgICAgIFwiMjRcIjogMFxuICAgICAgfSxcbiAgICAgIEN1cnJlbmN5OiBcIkNIRlwiLFxuICAgICAgUXVhbnRpdHk6IDEsXG4gICAgICBDeWNsZTogMSxcbiAgICAgIEFtb3VudDogNTAwXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcGxhbnNcbiAgICAgIH1cbiAgICB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/motzhard/projects/pm-pricing/pages/index.js */"));
}; // Called at build time and renders the page to static HTML.


const __NEXT_COMP = HomePage;
__NEXT_COMP.__N_SSG = true
/* harmony default export */ __webpack_exports__["default"] = (__NEXT_COMP);

/***/ })

})
//# sourceMappingURL=index.js.edc95a5974dd6b19606f.hot-update.js.map