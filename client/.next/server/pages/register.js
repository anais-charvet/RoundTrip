"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Register = ()=>{\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // console.table({name, email, password})\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`http://localhost:8000/api/register`);\n        console.log(\"Register response\", data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center bg-primary square\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/Alvina/SolidRealm/RoundTrip/client/pages/register.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pd-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value)\n                            ,\n                            placeholder: \"Enter name\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/Alvina/SolidRealm/RoundTrip/client/pages/register.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                            ,\n                            placeholder: \"Enter email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/Alvina/SolidRealm/RoundTrip/client/pages/register.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                            ,\n                            placeholder: \"Enter password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/Alvina/SolidRealm/RoundTrip/client/pages/register.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn w-100 btn-primary\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Alvina/SolidRealm/RoundTrip/client/pages/register.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Alvina/SolidRealm/RoundTrip/client/pages/register.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Alvina/SolidRealm/RoundTrip/client/pages/register.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNMO0FBRXpCLEtBQUssQ0FBQ0UsUUFBUSxPQUFTLENBQUM7SUFDcEIsS0FBSyxNQUFFQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUosK0NBQVEsQ0FBQyxDQUFFO0lBQ25DLEtBQUssTUFBRUssS0FBSyxNQUFFQyxRQUFRLE1BQUlOLCtDQUFRLENBQUMsQ0FBRTtJQUNyQyxLQUFLLE1BQUVPLFFBQVEsTUFBRUMsV0FBVyxNQUFJUiwrQ0FBUSxDQUFDLENBQUU7SUFFM0MsS0FBSyxDQUFDUyxZQUFZLFVBQVVDLENBQUMsR0FBSyxDQUFDO1FBQy9CQSxDQUFDLENBQUNDLGNBQWM7UUFDaEIsRUFBeUM7UUFDekMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNYLGlEQUFVLEVBQUUsa0NBQWtDO1FBQ3JFYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQixvQkFBRUgsSUFBSTtJQUN6QyxDQUFDO0lBRUQsTUFBTTs7d0ZBRUdJLENBQUU7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5QzswQkFBQyxDQUFROzs7Ozs7d0ZBQy9EQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBcUM7c0dBQ25ERSxDQUFJO29CQUFDQyxRQUFRLEVBQUVYLFlBQVk7O29HQUMzQlksQ0FBSzs0QkFDRkMsSUFBSSxFQUFDLENBQU07NEJBQ1hMLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNNLEtBQUssRUFBRXBCLElBQUk7NEJBQ1hxQixRQUFRLEdBQUdkLENBQUMsR0FBS04sT0FBTyxDQUFDTSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSzs7NEJBQ3ZDRyxXQUFXLEVBQUMsQ0FBWTs0QkFDeEJDLFFBQVE7Ozs7OztvR0FHWE4sQ0FBSzs0QkFDRkMsSUFBSSxFQUFDLENBQU87NEJBQ1pMLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNNLEtBQUssRUFBRWxCLEtBQUs7NEJBQ1ptQixRQUFRLEdBQUdkLENBQUMsR0FBS0osUUFBUSxDQUFDSSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSzs7NEJBQ3hDRyxXQUFXLEVBQUMsQ0FBYTs0QkFDekJDLFFBQVE7Ozs7OztvR0FHWE4sQ0FBSzs0QkFDRkMsSUFBSSxFQUFDLENBQVU7NEJBQ2ZMLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNNLEtBQUssRUFBRWhCLFFBQVE7NEJBQ2ZpQixRQUFRLEdBQUdkLENBQUMsR0FBS0YsV0FBVyxDQUFDRSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSzs7NEJBQzNDRyxXQUFXLEVBQUMsQ0FBZ0I7NEJBQzVCQyxRQUFROzs7Ozs7b0dBRVhDLENBQU07NEJBQUNOLElBQUksRUFBQyxDQUFROzRCQUFDTCxTQUFTLEVBQUMsQ0FBdUI7c0NBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxRSxDQUFDO0FBRUQsaUVBQWVmLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc29sZS50YWJsZSh7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSlcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXIgcmVzcG9uc2VcIiwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgYmctcHJpbWFyeSBzcXVhcmVcIj5SZWdpc3RlcjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtNCBvZmZzZXQtbWQtNCBwZC01XCI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz4gICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biB3LTEwMCBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();