"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ \"./components/Banner.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var posts = param.posts;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Medium Blog\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6\",\n                children: posts.map(function(post) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/post/\".concat(post.slug.current),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border rounded-lg group cursor-pointer overflow-hidden \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"\",\n                                    src: (0,_sanity__WEBPACK_IMPORTED_MODULE_5__.urlFor)(post.mainImage).url(),\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between bg-white p-5 items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-lg font-bold \",\n                                                    children: post.title\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xs \",\n                                                    children: [\n                                                        post.description,\n                                                        \" by \",\n                                                        post.author.name\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_5__.urlFor)(post.author.image).url(),\n                                            alt: \"\",\n                                            className: \"h-12 w-12 rounded-full border border-red-500 \"\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this)\n                    }, post._id, false, {\n                        fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Javascript Mastery\\\\Sanity Project\\\\MediumClone\\\\medium-clone\\\\pages\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNBO0FBQ2E7QUFDQTtBQUNLOztBQU8vQixRQUFRLENBQUNLLElBQUksQ0FBQyxLQUFjLEVBQUUsQ0FBQztRQUFoQkMsS0FBSyxHQUFOLEtBQWMsQ0FBYkEsS0FBSzs7SUFFakMsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBbUI7O3dGQUMvQlIsa0RBQUk7O2dHQUNGUyxDQUFLO2tDQUFDLENBQVc7Ozs7OztnR0FDakJDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUd2Q1QsMERBQU07Ozs7O3dGQUVKRCwwREFBTTs7Ozs7d0ZBR05LLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUEwRTswQkFDdEZGLEtBQUssQ0FBQ08sR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7a0NBQ2IsTUFBTUMsQ0FBQUEsNkRBQUFBLENBQUxkLGtEQUFJO3dCQUFnQlcsSUFBSSxFQUFHLENBQU0sUUFBb0IsT0FBbEJFLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxPQUFPOzhHQUNsRFYsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQXlEOzs0R0FDckVVLENBQUc7b0NBQUNWLFNBQVMsRUFBQyxDQUFFO29DQUFDVyxHQUFHLEVBQUVmLCtDQUFNLENBQUNVLElBQUksQ0FBQ00sU0FBUyxFQUFFQyxHQUFHO29DQUFLQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7OzRHQUMzRGYsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQWlEOztvSEFDN0RELENBQUc7OzRIQUNEZ0IsQ0FBQztvREFBQ2YsU0FBUyxFQUFDLENBQW9COzhEQUFFTSxJQUFJLENBQUNMLEtBQUs7Ozs7Ozs0SEFDNUNjLENBQUM7b0RBQUNmLFNBQVMsRUFBQyxDQUFVOzt3REFBRU0sSUFBSSxDQUFDVSxXQUFXO3dEQUFDLENBQUk7d0RBQUNWLElBQUksQ0FBQ1csTUFBTSxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7O29IQUdoRVIsQ0FBRzs0Q0FBQ0MsR0FBRyxFQUFFZiwrQ0FBTSxDQUFDVSxJQUFJLENBQUNXLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFTixHQUFHOzRDQUFLQyxHQUFHLEVBQUMsQ0FBRTs0Q0FBQ2QsU0FBUyxFQUFDLENBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBVHZHTSxJQUFJLENBQUNjLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI3QixDQUFDO0tBakN1QnZCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQge3Nhbml0eUNsaWVudCwgdXJsRm9yfSBmcm9tIFwiLi4vc2FuaXR5XCJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi90eXBpbmcnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3RzOiBbUG9zdF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cG9zdHN9OiBQcm9wcykge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NZWRpdW0gQmxvZzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgIDxIZWFkZXIgLz5cblxuICAgICAgPEJhbm5lciAvPlxuXG4gICAgICB7LyogUG9zdHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtMyBtZDpnYXAtNiBwLTIgbGc6cC02Jz5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8TGluayBrZXk9e3Bvc3QuX2lkfSBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWcuY3VycmVudH1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIFwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nJyBzcmM9e3VybEZvcihwb3N0Lm1haW5JbWFnZSkudXJsKCkhfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgcC01ICBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkICc+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBcIj57cG9zdC5kZXNjcmlwdGlvbn0gYnkge3Bvc3QuYXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihwb3N0LmF1dGhvci5pbWFnZSkudXJsKCkhfSBhbHQ9XCJcIiBjbGFzc05hbWU9J2gtMTIgdy0xMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1yZWQtNTAwICcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIl17XG4gICAgX2lkLFxuICAgIHRpdGxlLFxuICAgIGF1dGhvci0+IHtcbiAgICAgIG5hbWUsIFxuICAgICAgaW1hZ2VcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIG1haW5JbWFnZSxcbiAgICBzbHVnXG4gIH1gO1xuXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiQmFubmVyIiwiSGVhZGVyIiwidXJsRm9yIiwiSG9tZSIsInBvc3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1hcCIsInBvc3QiLCJrZXkiLCJzbHVnIiwiY3VycmVudCIsImltZyIsInNyYyIsIm1haW5JbWFnZSIsInVybCIsImFsdCIsInAiLCJkZXNjcmlwdGlvbiIsImF1dGhvciIsIm5hbWUiLCJpbWFnZSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});