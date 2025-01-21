"use strict";
(self['webpackChunkdemo'] = self['webpackChunkdemo'] || []).push([["src_modules_App_index_js"], {
"./src/modules/App/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return App; }
});
/* ESM import */var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.promise.js");
/* ESM import */var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.object.to-string.js");
/* ESM import */var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");




var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('aaaaaaa');
    }, 1000);
});
function App() {
    // 使用Promise
    console.log(p) // 希望对Promise做polyfill
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
            children: "App"
        })
    });
}


}),

}]);