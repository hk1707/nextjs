module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./clientConfig.js":
/*!*************************!*\
  !*** ./clientConfig.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst clientConfig = {\n  siteuri: 'http://localhost:3000',\n  graphurl: 'http://hitesh.demoproject.info/graphql'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (clientConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnRDb25maWcuanM/YzI3MSJdLCJuYW1lcyI6WyJjbGllbnRDb25maWciLCJzaXRldXJpIiwiZ3JhcGh1cmwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsWUFBWSxHQUFHO0FBRWhCQyxTQUFPLEVBQUMsdUJBRlE7QUFHaEJDLFVBQVEsRUFBQztBQUhPLENBQXJCO0FBT2VGLDJFQUFmIiwiZmlsZSI6Ii4vY2xpZW50Q29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xpZW50Q29uZmlnID0ge1xuXG4gICAgIHNpdGV1cmk6J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgIGdyYXBodXJsOidodHRwOi8vaGl0ZXNoLmRlbW9wcm9qZWN0LmluZm8vZ3JhcGhxbCdcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50Q29uZmlnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./clientConfig.js\n");

/***/ }),

/***/ "./components/Apolloclient.js":
/*!************************************!*\
  !*** ./components/Apolloclient.js ***!
  \************************************/
/*! exports provided: middleware, afterware, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"middleware\", function() { return middleware; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"afterware\", function() { return afterware; });\n/* harmony import */ var _clientConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clientConfig */ \"./clientConfig.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n//import fetch from \"node-fetch\";\n//import { ApolloClient } from \"apollo-boost\";\n//import { ApolloClient } from \"apollo-client\";\n//import { InMemoryCache } from \"apollo-cache-inmemory\";\n//import { createHttpLink } from \"apollo-link-http\";\n // import { ApolloClient, InMemoryCache } from '@apollo/client';\n// /* const client = new ApolloClient({\n//     link:({\n//         uri:clientConfig.graphurl,\n//         fetch:fetch    \n//     }),\n//     cache: new InMemoryCache() \n// }); */\n// const client = new ApolloClient({\n//     uri: clientConfig.graphurl,\n//     cache: new InMemoryCache()\n// });\n// export default client;\n\n\n\n/**\n * Middleware operation\n * If we have a session token in localStorage, add it to the GraphQL request as a Session header.\n */\n\nconst middleware = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloLink\"]((operation, forward) => {\n  /**\n   * If session data exist in local storage, set value as session header.\n   */\n  const session = false ? undefined : null;\n\n  if (session) {\n    operation.setContext(({\n      headers = {}\n    }) => ({\n      headers: {\n        \"woocommerce-session\": `Session ${session}`\n      }\n    }));\n  }\n\n  return forward(operation);\n});\n/**\n * Afterware operation.\n *\n * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.\n */\n\nconst afterware = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloLink\"]((operation, forward) => {\n  return forward(operation).map(response => {\n    /**\n     * Check for session header and update session in local storage accordingly.\n     */\n    const context = operation.getContext();\n    const {\n      response: {\n        headers\n      }\n    } = context;\n    const session = headers.get(\"woocommerce-session\");\n\n    if (session) {\n      // Remove session data if session destroyed.\n      if (\"false\" === session) {\n        localStorage.removeItem(\"woo-session\"); // Update session new data if changed.\n      } else if (localStorage.getItem(\"woo-session\") !== session) {\n        localStorage.setItem(\"woo-session\", headers.get(\"woocommerce-session\"));\n      }\n    }\n\n    return response;\n  });\n}); // Apollo GraphQL client.\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n  link: middleware.concat(afterware.concat(Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"createHttpLink\"])({\n    uri: _clientConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].graphurl,\n    fetch: node_fetch__WEBPACK_IMPORTED_MODULE_1___default.a\n  }))),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"]()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fwb2xsb2NsaWVudC5qcz9mYjE1Il0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJBcG9sbG9MaW5rIiwib3BlcmF0aW9uIiwiZm9yd2FyZCIsInNlc3Npb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsImFmdGVyd2FyZSIsIm1hcCIsInJlc3BvbnNlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJnZXQiLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJjbGllbnRDb25maWciLCJncmFwaHVybCIsImZldGNoIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQSxVQUFVLEdBQUcsSUFBSUMseURBQUosQ0FBZ0IsQ0FBRUMsU0FBRixFQUFhQyxPQUFiLEtBQTBCO0FBQ25FO0FBQ0Q7QUFDQTtBQUNDLFFBQU1DLE9BQU8sR0FBRyxRQUF1QkMsU0FBdkIsR0FBK0QsSUFBL0U7O0FBRUEsTUFBS0QsT0FBTCxFQUFlO0FBQ2RGLGFBQVMsQ0FBQ0ksVUFBVixDQUFzQixDQUFFO0FBQUVDLGFBQU8sR0FBRztBQUFaLEtBQUYsTUFBMEI7QUFDL0NBLGFBQU8sRUFBRTtBQUNSLCtCQUF3QixXQUFXSCxPQUFTO0FBRHBDO0FBRHNDLEtBQTFCLENBQXRCO0FBS0E7O0FBRUQsU0FBT0QsT0FBTyxDQUFFRCxTQUFGLENBQWQ7QUFFQSxDQWhCeUIsQ0FBbkI7QUFrQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNTSxTQUFTLEdBQUcsSUFBSVAseURBQUosQ0FBZ0IsQ0FBRUMsU0FBRixFQUFhQyxPQUFiLEtBQTBCO0FBRWxFLFNBQU9BLE9BQU8sQ0FBRUQsU0FBRixDQUFQLENBQXFCTyxHQUFyQixDQUEwQkMsUUFBUSxJQUFJO0FBQzVDO0FBQ0Y7QUFDQTtBQUNFLFVBQU1DLE9BQU8sR0FBR1QsU0FBUyxDQUFDVSxVQUFWLEVBQWhCO0FBQ0EsVUFBTTtBQUFFRixjQUFRLEVBQUU7QUFBRUg7QUFBRjtBQUFaLFFBQTZCSSxPQUFuQztBQUNBLFVBQU1QLE9BQU8sR0FBR0csT0FBTyxDQUFDTSxHQUFSLENBQWEscUJBQWIsQ0FBaEI7O0FBRUEsUUFBS1QsT0FBTCxFQUFlO0FBRWQ7QUFDQSxVQUFLLFlBQVlBLE9BQWpCLEVBQTJCO0FBRTFCQyxvQkFBWSxDQUFDUyxVQUFiLENBQXlCLGFBQXpCLEVBRjBCLENBSTFCO0FBQ0EsT0FMRCxNQUtPLElBQUtULFlBQVksQ0FBQ1UsT0FBYixDQUFzQixhQUF0QixNQUEwQ1gsT0FBL0MsRUFBeUQ7QUFFL0RDLG9CQUFZLENBQUNXLE9BQWIsQ0FBc0IsYUFBdEIsRUFBcUNULE9BQU8sQ0FBQ00sR0FBUixDQUFhLHFCQUFiLENBQXJDO0FBRUE7QUFDRDs7QUFFRCxXQUFPSCxRQUFQO0FBRUEsR0F6Qk0sQ0FBUDtBQTBCQSxDQTVCd0IsQ0FBbEIsQyxDQThCUDs7QUFDQSxNQUFNTyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFDL0JDLE1BQUksRUFBRW5CLFVBQVUsQ0FBQ29CLE1BQVgsQ0FBbUJaLFNBQVMsQ0FBQ1ksTUFBVixDQUFrQkMscUVBQWMsQ0FBQztBQUN6REMsT0FBRyxFQUFFQyxxREFBWSxDQUFDQyxRQUR1QztBQUV6REMsU0FBSyxFQUFFQSxpREFBS0E7QUFGNkMsR0FBRCxDQUFoQyxDQUFuQixDQUR5QjtBQUsvQkMsT0FBSyxFQUFFLElBQUlDLDREQUFKO0FBTHdCLENBQWpCLENBQWY7QUFRZVYscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fwb2xsb2NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG4vL2ltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbi8vaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSBcImFwb2xsby1jbGllbnRcIjtcbi8vaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIjtcbi8vaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tIFwiYXBvbGxvLWxpbmstaHR0cFwiO1xuIGltcG9ydCBjbGllbnRDb25maWcgZnJvbSBcIi4uL2NsaWVudENvbmZpZ1wiO1xuLy8gaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5cbi8vIC8qIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuLy8gICAgIGxpbms6KHtcbi8vICAgICAgICAgdXJpOmNsaWVudENvbmZpZy5ncmFwaHVybCxcbi8vICAgICAgICAgZmV0Y2g6ZmV0Y2ggICAgXG4vLyAgICAgfSksXG4vLyAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCkgXG4gICAgXG4vLyB9KTsgKi9cblxuLy8gY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4vLyAgICAgdXJpOiBjbGllbnRDb25maWcuZ3JhcGh1cmwsXG4vLyAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbi8vIH0pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjbGllbnQ7XG5cbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcblxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlLCBjcmVhdGVIdHRwTGluayB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgb3BlcmF0aW9uXG4gKiBJZiB3ZSBoYXZlIGEgc2Vzc2lvbiB0b2tlbiBpbiBsb2NhbFN0b3JhZ2UsIGFkZCBpdCB0byB0aGUgR3JhcGhRTCByZXF1ZXN0IGFzIGEgU2Vzc2lvbiBoZWFkZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWRkbGV3YXJlID0gbmV3IEFwb2xsb0xpbmsoICggb3BlcmF0aW9uLCBmb3J3YXJkICkgPT4ge1xuXHQvKipcblx0ICogSWYgc2Vzc2lvbiBkYXRhIGV4aXN0IGluIGxvY2FsIHN0b3JhZ2UsIHNldCB2YWx1ZSBhcyBzZXNzaW9uIGhlYWRlci5cblx0ICovXG5cdGNvbnN0IHNlc3Npb24gPSAoIHByb2Nlc3MuYnJvd3NlciApID8gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBcIndvby1zZXNzaW9uXCIgKSA6IG51bGw7XG5cblx0aWYgKCBzZXNzaW9uICkge1xuXHRcdG9wZXJhdGlvbi5zZXRDb250ZXh0KCAoIHsgaGVhZGVycyA9IHt9IH0gKSA9PiAoIHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJ3b29jb21tZXJjZS1zZXNzaW9uXCI6IGBTZXNzaW9uICR7IHNlc3Npb24gfWBcblx0XHRcdH1cblx0XHR9ICkgKTtcblx0fVxuXG5cdHJldHVybiBmb3J3YXJkKCBvcGVyYXRpb24gKTtcblxufSApO1xuXG4vKipcbiAqIEFmdGVyd2FyZSBvcGVyYXRpb24uXG4gKlxuICogVGhpcyBjYXRjaGVzIHRoZSBpbmNvbWluZyBzZXNzaW9uIHRva2VuIGFuZCBzdG9yZXMgaXQgaW4gbG9jYWxTdG9yYWdlLCBmb3IgZnV0dXJlIEdyYXBoUUwgcmVxdWVzdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhZnRlcndhcmUgPSBuZXcgQXBvbGxvTGluayggKCBvcGVyYXRpb24sIGZvcndhcmQgKSA9PiB7XG5cblx0cmV0dXJuIGZvcndhcmQoIG9wZXJhdGlvbiApLm1hcCggcmVzcG9uc2UgPT4ge1xuXHRcdC8qKlxuXHRcdCAqIENoZWNrIGZvciBzZXNzaW9uIGhlYWRlciBhbmQgdXBkYXRlIHNlc3Npb24gaW4gbG9jYWwgc3RvcmFnZSBhY2NvcmRpbmdseS5cblx0XHQgKi9cblx0XHRjb25zdCBjb250ZXh0ID0gb3BlcmF0aW9uLmdldENvbnRleHQoKTtcblx0XHRjb25zdCB7IHJlc3BvbnNlOiB7IGhlYWRlcnMgfSB9ICA9IGNvbnRleHQ7XG5cdFx0Y29uc3Qgc2Vzc2lvbiA9IGhlYWRlcnMuZ2V0KCBcIndvb2NvbW1lcmNlLXNlc3Npb25cIiApO1xuXG5cdFx0aWYgKCBzZXNzaW9uICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgc2Vzc2lvbiBkYXRhIGlmIHNlc3Npb24gZGVzdHJveWVkLlxuXHRcdFx0aWYgKCBcImZhbHNlXCIgPT09IHNlc3Npb24gKSB7XG5cblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIFwid29vLXNlc3Npb25cIiApO1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSBzZXNzaW9uIG5ldyBkYXRhIGlmIGNoYW5nZWQuXG5cdFx0XHR9IGVsc2UgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggXCJ3b28tc2Vzc2lvblwiICkgIT09IHNlc3Npb24gKSB7XG5cblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oIFwid29vLXNlc3Npb25cIiwgaGVhZGVycy5nZXQoIFwid29vY29tbWVyY2Utc2Vzc2lvblwiICkgKTtcblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXNwb25zZTtcblxuXHR9ICk7XG59ICk7XG5cbi8vIEFwb2xsbyBHcmFwaFFMIGNsaWVudC5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuXHRsaW5rOiBtaWRkbGV3YXJlLmNvbmNhdCggYWZ0ZXJ3YXJlLmNvbmNhdCggY3JlYXRlSHR0cExpbmsoe1xuXHRcdHVyaTogY2xpZW50Q29uZmlnLmdyYXBodXJsLFxuXHRcdGZldGNoOiBmZXRjaFxuXHR9KSApICksXG5cdGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Apolloclient.js\n");

/***/ }),

/***/ "./components/loader.module.css":
/*!**************************************!*\
  !*** ./components/loader.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"loading\": \"loader_loading__2uzzt\",\n\t\"spinner\": \"loader_spinner__2W7H2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRlci5tb2R1bGUuY3NzPzA3NDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9hZGVyLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkaW5nXCI6IFwibG9hZGVyX2xvYWRpbmdfXzJ1enp0XCIsXG5cdFwic3Bpbm5lclwiOiBcImxvYWRlcl9zcGlubmVyX18yVzdIMlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/loader.module.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_loader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loader.module.css */ \"./components/loader.module.css\");\n/* harmony import */ var _components_loader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_loader_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Apolloclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Apolloclient */ \"./components/Apolloclient.js\");\n/* harmony import */ var _src_components_context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/context/AppContext */ \"./src/components/context/AppContext.js\");\n\nvar _jsxFileName = \"/opt/lampp/htdocs/wordpress/wp-content/themes/react-next/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_context_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"AppProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n      client: _components_Apolloclient__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 15\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBRzFDLHNCQUNNLHFFQUFDLDhFQUFEO0FBQUEsMkJBQ0kscUVBQUMsNkRBQUQ7QUFBZ0IsWUFBTSxFQUFFQyxnRUFBeEI7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUROO0FBUUQsQ0FYRDs7QUFhZUYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0Fwb2xsb2NsaWVudFwiO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29udGV4dC9BcHBDb250ZXh0XCI7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuXG4gXG4gIHJldHVybiAgKFxuICAgICAgICA8QXBwUHJvdmlkZXI+XG4gICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICA8L0FwcFByb3ZpZGVyPlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/components/context/AppContext.js":
/*!**********************************************!*\
  !*** ./src/components/context/AppContext.js ***!
  \**********************************************/
/*! exports provided: AppContext, AppProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppContext\", function() { return AppContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppProvider\", function() { return AppProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/opt/lampp/htdocs/wordpress/wp-content/themes/react-next/src/components/context/AppContext.js\";\n\nconst AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext([{}, () => {}]);\nconst AppProvider = props => {\n  const {\n    0: cart,\n    1: setCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    // @TODO Will add option to show the cart with localStorage later.\n    if (false) {}\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AppContext.Provider, {\n    value: [cart, setCart],\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 3\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L0FwcENvbnRleHQuanM/YzM4NiJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQXBwUHJvdmlkZXIiLCJwcm9wcyIsImNhcnQiLCJzZXRDYXJ0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxVQUFVLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLENBQzdDLEVBRDZDLEVBRTdDLE1BQU0sQ0FBRSxDQUZxQyxDQUFwQixDQUFuQjtBQUtBLE1BQU1DLFdBQVcsR0FBS0MsS0FBRixJQUFhO0FBRXZDLFFBQU07QUFBQSxPQUFFQyxJQUFGO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBRSxJQUFGLENBQWxDO0FBRUFDLHlEQUFTLENBQUUsTUFBTTtBQUVoQjtBQUNBLGVBQXVCLEVBUXRCO0FBRUQsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBLHNCQUNDLHFFQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRyxDQUFFSCxJQUFGLEVBQVFDLE9BQVIsQ0FBN0I7QUFBQSxjQUNHRixLQUFLLENBQUNLO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBS0EsQ0F4Qk0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L0FwcENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChbXG5cdHt9LFxuXHQoKSA9PiB7fVxuXSk7XG5cbmV4cG9ydCBjb25zdCBBcHBQcm92aWRlciA9ICggcHJvcHMgKSA9PiB7XG5cblx0Y29uc3QgWyBjYXJ0LCBzZXRDYXJ0IF0gPSB1c2VTdGF0ZSggbnVsbCApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXG5cdFx0Ly8gQFRPRE8gV2lsbCBhZGQgb3B0aW9uIHRvIHNob3cgdGhlIGNhcnQgd2l0aCBsb2NhbFN0b3JhZ2UgbGF0ZXIuXG5cdFx0aWYgKCBwcm9jZXNzLmJyb3dzZXIgKSB7XG5cblx0XHRcdGxldCBjYXJ0RGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCAnd29vLW5leHQtY2FydCcgKTtcblx0XHRcdGNhcnREYXRhID0gbnVsbCAhPT0gY2FydERhdGEgPyBKU09OLnBhcnNlKCBjYXJ0RGF0YSApIDogJyc7XG5cdFx0XHRzZXRDYXJ0KCBjYXJ0RGF0YSApO1xuXG5cdFx0IFx0Y29uc29sZS53YXJuKCAnY29tcGxldGVkIGNvbnRleHQgUnVuJyApO1xuXG5cdFx0fVxuXG5cdH0sIFtdICk7XG5cblx0cmV0dXJuIChcblx0XHQ8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IFsgY2FydCwgc2V0Q2FydCBdIH0+XG5cdFx0XHR7IHByb3BzLmNoaWxkcmVuIH1cblx0XHQ8L0FwcENvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/context/AppContext.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCI/NWNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-fetch\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });