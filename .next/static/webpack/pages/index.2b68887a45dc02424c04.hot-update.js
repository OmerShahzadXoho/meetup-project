webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/omershehzad/Downloads/next-course/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar url = 'https://images.unsplash.com/photo-1590738066647-164aa47af7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';\nvar DUMMY_MEETUPS = [{\n  id: 'm1',\n  title: 'A first Meetup',\n  image: url,\n  address: 'some address',\n  description: 'this is forst '\n}, {\n  id: 'm2',\n  title: 'A 2nd Meetup',\n  image: 'https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',\n  address: 'some address',\n  description: 'this is forst '\n}, {\n  id: 'm3',\n  title: 'A 3rd Meetup',\n  image: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',\n  address: 'some address',\n  description: 'this is forst '\n}];\n\nfunction HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      LoadedMeetup = _useState[0],\n      SetLoadedMeetsup = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {}, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    meetups: DUMMY_MEETUPS\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n\n_s(HomePage, \"zaQuzRaXsuGXAfrtu5tGP/KqKdw=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1cmwiLCJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsIkxvYWRlZE1lZXR1cCIsIlNldExvYWRlZE1lZXRzdXAiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRywrSkFBWjtBQUNBLElBQU1DLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFSixHQUhYO0FBSUlLLFNBQU8sRUFBRSxjQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQURrQixFQVFsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsY0FGWDtBQUdJQyxPQUFLLEVBQUUsZ0tBSFg7QUFJSUMsU0FBTyxFQUFFLGNBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBUmtCLEVBZWxCO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxjQUZYO0FBR0lDLE9BQUssRUFBRSxnS0FIWDtBQUlJQyxTQUFPLEVBQUUsY0FKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0Fma0IsQ0FBdEI7O0FBdUJBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDd0JDLHNEQUFRLEVBRGhDO0FBQUEsTUFDVkMsWUFEVTtBQUFBLE1BQ0lDLGdCQURKOztBQUVoQkMseURBQVMsQ0FBQyxZQUFNLENBRWYsQ0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNJLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFVjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDs7R0FUUU0sUTs7S0FBQUEsUTtBQVdNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MDczODA2NjY0Ny0xNjRhYTQ3YWY3Yzk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MCZxPTgwJztcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gICAge1xuICAgICAgICBpZDogJ20xJyxcbiAgICAgICAgdGl0bGU6ICdBIGZpcnN0IE1lZXR1cCcsXG4gICAgICAgIGltYWdlOiB1cmwsXG4gICAgICAgIGFkZHJlc3M6ICdzb21lIGFkZHJlc3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoaXMgaXMgZm9yc3QgJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ20yJyxcbiAgICAgICAgdGl0bGU6ICdBIDJuZCBNZWV0dXAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA0NzE0MTQ2MzQwLTk1OWNhMDdlMWYzOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAyNSZxPTgwJyxcbiAgICAgICAgYWRkcmVzczogJ3NvbWUgYWRkcmVzcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGhpcyBpcyBmb3JzdCAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnbTMnLFxuICAgICAgICB0aXRsZTogJ0EgM3JkIE1lZXR1cCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDkwMjQ2NDQ1NTgtMmY1NmNlNzZjNDkwP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTcwJnE9ODAnLFxuICAgICAgICBhZGRyZXNzOiAnc29tZSBhZGRyZXNzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICd0aGlzIGlzIGZvcnN0ICdcbiAgICB9XG5dO1xuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gICBjb25zdCBbTG9hZGVkTWVldHVwLCBTZXRMb2FkZWRNZWV0c3VwXSA9IHVzZVN0YXRlKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17RFVNTVlfTUVFVFVQU30gLz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})