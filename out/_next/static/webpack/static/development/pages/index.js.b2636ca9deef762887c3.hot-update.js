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
    className: "jsx-3024576778",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Plans & prices"), __jsx("ul", {
    className: "jsx-3024576778" + " " + "plans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, plans.map(function (plan) {
    return __jsx("li", {
      className: "jsx-3024576778" + " " + "plan",
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
    id: "3024576778",
    __self: this
  }, ".plans.jsx-3024576778{list-style:none;margin:2em;padding:0;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));}.plan.jsx-3024576778{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:5px;border:1px solid rgb(220,220,220);margin-bottom:30px;padding-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3R6aGFyZC9wcm9qZWN0cy9wbS1wcmljaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUcyQixBQVFILGdCQVBGLFdBQ0QsVUFDRyxhQUNDLGNBQzhDLFVBSWhELFlBQ1Usb0NBSnhCLDBDQUtvQixrQkFDa0Isa0NBQ2pCLG1CQUNDLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvbW90emhhcmQvcHJvamVjdHMvcG0tcHJpY2luZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUGxhbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QbGFuXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKHsgcGxhbnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+UGxhbnMgJiBwcmljZXM8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBsYW5zXCI+XG4gICAgICAgIHtwbGFucy5tYXAocGxhbiA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBsYW5cIj5cbiAgICAgICAgICAgIDxQbGFuIHsuLi5wbGFufSBrZXk9e3BsYW4uSUR9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGxhbnMge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAyZW07XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgICAgfVxuICAgICAgICAucGxhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIENhbGxlZCBhdCBidWlsZCB0aW1lIGFuZCByZW5kZXJzIHRoZSBwYWdlIHRvIHN0YXRpYyBIVE1MLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5wcm90b25tYWlsLmNoL3BheW1lbnRzL3BsYW5zXCIsIHtcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgXCJ4LXBtLWFwcHZlcnNpb25cIjogXCJPdGhlclwiLFxuICAgICAgICBcIngtcG0tYXBpdmVyc2lvblwiOiBcIjNcIixcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5wcm90b25tYWlsLnYxK2pzb25cIlxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENhbm5vdCBmZXRjaCBwbGFucyBkYXRhLCBzdGF0dXMgY29kZTogJHtyZXNwb25zZS5zdGF0dXN9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gQXMgcGVyIGFncmVlbWVudCwgaSdtIGZldGNoaW5nIHRoZSBBUEkgYW5kIGZpbHRlciBkb3duIG9ubHkgdGhlIHBsYW5zIGknbSBpbnRlcmVzdGVkIGluXG4gICAgY29uc3QgcGxhbnMgPSBqc29uLlBsYW5zLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnIuTmFtZSA9PT0gXCJwbHVzXCIgfHxcbiAgICAgICAgY3Vyci5OYW1lID09PSBcInByb2Zlc3Npb25hbFwiIHx8XG4gICAgICAgIGN1cnIuTmFtZSA9PT0gXCJ2aXNpb25hcnlcIlxuICAgICAgKSB7XG4gICAgICAgIGFjYy5wdXNoKGN1cnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBpJ20gYWRkaW5nIHRoZSBtaXNzaW5nIEZyZWUgcGxhblxuICAgIHBsYW5zLnVuc2hpZnQoe1xuICAgICAgSUQ6XG4gICAgICAgIFwiRnIzRS1CYWFhYWFhYWFhYWFhYXBxUWJkMUZJVFZXWWZUZktZVW1WX3dLS1IzR3N2ZU40SFpDaDllcjVkaGVsWXlsRXAtZmhqQmJVUERNSEdVNjk5Znc9PVwiLFxuICAgICAgVHlwZTogMSxcbiAgICAgIE5hbWU6IFwiZnJlZVwiLFxuICAgICAgVGl0bGU6IFwiVGhlIGJhc2ljIGZvciBwcml2YXRlIGFuZCBzZWN1cmUgY29tbXVuaWNhdGlvblwiLFxuICAgICAgTWF4RG9tYWluczogMCxcbiAgICAgIE1heEFkZHJlc3NlczogMSxcbiAgICAgIE1heFNwYWNlOiA1MzY4NzA5MTIsXG4gICAgICBNYXhNZW1iZXJzOiAxLFxuICAgICAgTWF4VlBOOiAwLFxuICAgICAgU2VydmljZXM6IDEsXG4gICAgICBGZWF0dXJlczogMCxcbiAgICAgIFByaWNpbmc6IHtcbiAgICAgICAgXCIxXCI6IDAsXG4gICAgICAgIFwiMTJcIjogMCxcbiAgICAgICAgXCIyNFwiOiAwXG4gICAgICB9LFxuICAgICAgQ3VycmVuY3k6IFwiQ0hGXCIsXG4gICAgICBRdWFudGl0eTogMSxcbiAgICAgIEN5Y2xlOiAxLFxuICAgICAgQW1vdW50OiA1MDBcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwbGFuc1xuICAgICAgfVxuICAgIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/motzhard/projects/pm-pricing/pages/index.js */"));
}; // Called at build time and renders the page to static HTML.


const __NEXT_COMP = HomePage;
__NEXT_COMP.__N_SSG = true
/* harmony default export */ __webpack_exports__["default"] = (__NEXT_COMP);

/***/ })

})
//# sourceMappingURL=index.js.b2636ca9deef762887c3.hot-update.js.map