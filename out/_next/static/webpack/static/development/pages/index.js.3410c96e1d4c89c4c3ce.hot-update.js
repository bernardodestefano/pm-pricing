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
    className: "jsx-3401193672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Plans & prices"), __jsx("ul", {
    className: "jsx-3401193672" + " " + "plans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, plans.map(function (plan) {
    return __jsx("li", {
      className: "jsx-3401193672" + " " + "plan",
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
    id: "3401193672",
    __self: this
  }, ".plans.jsx-3401193672{list-style:none;margin:2em;padding:0;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));}.plan.jsx-3401193672{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:5px;border:1px solid rgb(220,220,220);margin-bottom:10px;padding-bottom:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUcyQixBQVFILGdCQVBGLFdBQ0QsVUFDRyxhQUNDLGNBQzhDLFVBSWhELFlBQ1Usb0NBSnhCLDBDQUtvQixrQkFDa0Isa0NBQ2pCLG1CQUNBLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvbW90emhhcmQvcHJvamVjdHMvcG0tcHJpY2luZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUGxhbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QbGFuXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKHsgcGxhbnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+UGxhbnMgJiBwcmljZXM8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBsYW5zXCI+XG4gICAgICAgIHtwbGFucy5tYXAocGxhbiA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBsYW5cIj5cbiAgICAgICAgICAgIDxQbGFuIHsuLi5wbGFufSBrZXk9e3BsYW4uSUR9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGxhbnMge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAyZW07XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgICAgfVxuICAgICAgICAucGxhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuLy8gQ2FsbGVkIGF0IGJ1aWxkIHRpbWUgYW5kIHJlbmRlcnMgdGhlIHBhZ2UgdG8gc3RhdGljIEhUTUwuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnByb3Rvbm1haWwuY2gvcGF5bWVudHMvcGxhbnNcIiwge1xuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOFwiLFxuICAgICAgICBcIngtcG0tYXBwdmVyc2lvblwiOiBcIk90aGVyXCIsXG4gICAgICAgIFwieC1wbS1hcGl2ZXJzaW9uXCI6IFwiM1wiLFxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLnByb3Rvbm1haWwudjEranNvblwiXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ2Fubm90IGZldGNoIHBsYW5zIGRhdGEsIHN0YXR1cyBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c31gXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyBBcyBwZXIgYWdyZWVtZW50LCBpJ20gZmV0Y2hpbmcgdGhlIEFQSSBhbmQgZmlsdGVyIGRvd24gb25seSB0aGUgcGxhbnMgaSdtIGludGVyZXN0ZWQgaW5cbiAgICBjb25zdCBwbGFucyA9IGpzb24uUGxhbnMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY3Vyci5OYW1lID09PSBcInBsdXNcIiB8fFxuICAgICAgICBjdXJyLk5hbWUgPT09IFwicHJvZmVzc2lvbmFsXCIgfHxcbiAgICAgICAgY3Vyci5OYW1lID09PSBcInZpc2lvbmFyeVwiXG4gICAgICApIHtcbiAgICAgICAgYWNjLnB1c2goY3Vycik7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIGknbSBhZGRpbmcgdGhlIG1pc3NpbmcgRnJlZSBwbGFuXG4gICAgcGxhbnMudW5zaGlmdCh7XG4gICAgICBJRDpcbiAgICAgICAgXCJGcjNFLUJhYWFhYWFhYWFhYWFhcHFRYmQxRklUVldZZlRmS1lVbVZfd0tLUjNHc3ZlTjRIWkNoOWVyNWRoZWxZeWxFcC1maGpCYlVQRE1IR1U2OTlmdz09XCIsXG4gICAgICBUeXBlOiAxLFxuICAgICAgTmFtZTogXCJmcmVlXCIsXG4gICAgICBUaXRsZTogXCJUaGUgYmFzaWMgZm9yIHByaXZhdGUgYW5kIHNlY3VyZSBjb21tdW5pY2F0aW9uXCIsXG4gICAgICBNYXhEb21haW5zOiAwLFxuICAgICAgTWF4QWRkcmVzc2VzOiAxLFxuICAgICAgTWF4U3BhY2U6IDUzNjg3MDkxMixcbiAgICAgIE1heE1lbWJlcnM6IDEsXG4gICAgICBNYXhWUE46IDAsXG4gICAgICBTZXJ2aWNlczogMSxcbiAgICAgIEZlYXR1cmVzOiAwLFxuICAgICAgUHJpY2luZzoge1xuICAgICAgICBcIjFcIjogMCxcbiAgICAgICAgXCIxMlwiOiAwLFxuICAgICAgICBcIjI0XCI6IDBcbiAgICAgIH0sXG4gICAgICBDdXJyZW5jeTogXCJDSEZcIixcbiAgICAgIFF1YW50aXR5OiAxLFxuICAgICAgQ3ljbGU6IDEsXG4gICAgICBBbW91bnQ6IDUwMFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBsYW5zXG4gICAgICB9XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdfQ== */\n/*@ sourceURL=/Users/motzhard/projects/pm-pricing/pages/index.js */"));
}; // Called at build time and renders the page to static HTML.


const __NEXT_COMP = HomePage;
__NEXT_COMP.__N_SSG = true
/* harmony default export */ __webpack_exports__["default"] = (__NEXT_COMP);

/***/ })

})
//# sourceMappingURL=index.js.3410c96e1d4c89c4c3ce.hot-update.js.map