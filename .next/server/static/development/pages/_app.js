module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/MDJiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./src/i18n.ts":
/*!*********************!*\
  !*** ./src/i18n.ts ***!
  \*********************/
/*! exports provided: appWithTranslation, Link, useTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appWithTranslation\", function() { return appWithTranslation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useTranslation\", function() { return useTranslation; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst {\n  localeSubpaths\n} = next_config__WEBPACK_IMPORTED_MODULE_2___default()().publicRuntimeConfig;\nconst {\n  appWithTranslation,\n  Link,\n  useTranslation\n} = new next_i18next__WEBPACK_IMPORTED_MODULE_1___default.a({\n  otherLanguages: ['jp'],\n  localeSubpaths,\n  localePath: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi50cz84OGMzIl0sIm5hbWVzIjpbImxvY2FsZVN1YnBhdGhzIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIkxpbmsiLCJ1c2VUcmFuc2xhdGlvbiIsIk5leHRJMThOZXh0Iiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicGF0aCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQXFCQyxrREFBUyxHQUFHQyxtQkFBdkM7QUFFTyxNQUFNO0FBQUVDLG9CQUFGO0FBQXNCQyxNQUF0QjtBQUE0QkM7QUFBNUIsSUFBK0MsSUFBSUMsbURBQUosQ0FBZ0I7QUFDMUVDLGdCQUFjLEVBQUUsQ0FBQyxJQUFELENBRDBEO0FBRTFFUCxnQkFGMEU7QUFHMUVRLFlBQVUsRUFBRUMsMkNBQUksQ0FBQ0MsT0FBTCxDQUFhLHlCQUFiO0FBSDhELENBQWhCLENBQXJEIiwiZmlsZSI6Ii4vc3JjL2kxOG4udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBOZXh0STE4TmV4dCBmcm9tICduZXh0LWkxOG5leHQnO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XG5cbmNvbnN0IHsgbG9jYWxlU3VicGF0aHMgfSA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWc7XG5cbmV4cG9ydCBjb25zdCB7IGFwcFdpdGhUcmFuc2xhdGlvbiwgTGluaywgdXNlVHJhbnNsYXRpb24gfSA9IG5ldyBOZXh0STE4TmV4dCh7XG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2pwJ10sXG4gIGxvY2FsZVN1YnBhdGhzLFxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcbn0gYXMgYW55KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/i18n.ts\n");

/***/ }),

/***/ "./src/lib/graphql-client.ts":
/*!***********************************!*\
  !*** ./src/lib/graphql-client.ts ***!
  \***********************************/
/*! exports provided: initializeGraphQL, useGraphQLClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeGraphQL\", function() { return initializeGraphQL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGraphQLClient\", function() { return useGraphQLClient; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-hooks */ \"graphql-hooks\");\n/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_hooks_memcache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-hooks-memcache */ \"graphql-hooks-memcache\");\n/* harmony import */ var graphql_hooks_memcache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_hooks_memcache__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet graphQLClient;\n\nfunction createClient(initialState) {\n  return new graphql_hooks__WEBPACK_IMPORTED_MODULE_1__[\"GraphQLClient\"]({\n    ssrMode: true,\n    url: 'http://localhost:4000/api/graphql',\n    // Server URL (must be absolute)\n    cache: graphql_hooks_memcache__WEBPACK_IMPORTED_MODULE_2___default()({\n      initialState\n    })\n  });\n}\n\nfunction initializeGraphQL(initialState = null) {\n  var _graphQLClient2;\n\n  const _graphQLClient = (_graphQLClient2 = graphQLClient) !== null && _graphQLClient2 !== void 0 ? _graphQLClient2 : createClient(initialState); // After navigating to a page with an initial GraphQL state, create a new cache with the\n  // current state merged with the incoming state and set it to the GraphQL client.\n  // This is necessary because the initial state of `memCache` can only be set once\n\n\n  if (initialState && graphQLClient) {\n    graphQLClient.cache = graphql_hooks_memcache__WEBPACK_IMPORTED_MODULE_2___default()({\n      initialState: Object.assign(graphQLClient.cache.getInitialState(), initialState)\n    });\n  } // For SSG and SSR always create a new GraphQL Client\n\n\n  if (true) return _graphQLClient; // Create the GraphQL Client once in the client\n\n  if (!graphQLClient) graphQLClient = _graphQLClient;\n  return _graphQLClient;\n}\nfunction useGraphQLClient(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeGraphQL(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2dyYXBocWwtY2xpZW50LnRzP2MzYTUiXSwibmFtZXMiOlsiZ3JhcGhRTENsaWVudCIsImNyZWF0ZUNsaWVudCIsImluaXRpYWxTdGF0ZSIsIkdyYXBoUUxDbGllbnQiLCJzc3JNb2RlIiwidXJsIiwiY2FjaGUiLCJtZW1DYWNoZSIsImluaXRpYWxpemVHcmFwaFFMIiwiX2dyYXBoUUxDbGllbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRJbml0aWFsU3RhdGUiLCJ1c2VHcmFwaFFMQ2xpZW50Iiwic3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxhQUFKOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLFlBQXRCLEVBQW9DO0FBQ2xDLFNBQU8sSUFBSUMsMkRBQUosQ0FBa0I7QUFDdkJDLFdBQU8sTUFEZ0I7QUFFdkJDLE9BQUcsRUFBRSxtQ0FGa0I7QUFFbUI7QUFDMUNDLFNBQUssRUFBRUMsNkRBQVEsQ0FBQztBQUFFTDtBQUFGLEtBQUQ7QUFIUSxHQUFsQixDQUFQO0FBS0Q7O0FBRU0sU0FBU00saUJBQVQsQ0FBMkJOLFlBQVksR0FBRyxJQUExQyxFQUFnRDtBQUFBOztBQUNyRCxRQUFNTyxjQUFjLHNCQUFHVCxhQUFILDZEQUFvQkMsWUFBWSxDQUFDQyxZQUFELENBQXBELENBRHFELENBR3JEO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSUEsWUFBWSxJQUFJRixhQUFwQixFQUFtQztBQUNqQ0EsaUJBQWEsQ0FBQ00sS0FBZCxHQUFzQkMsNkRBQVEsQ0FBQztBQUM3Qkwsa0JBQVksRUFBRVEsTUFBTSxDQUFDQyxNQUFQLENBQ1pYLGFBQWEsQ0FBQ00sS0FBZCxDQUFvQk0sZUFBcEIsRUFEWSxFQUVaVixZQUZZO0FBRGUsS0FBRCxDQUE5QjtBQU1ELEdBYm9ELENBY3JEOzs7QUFDQSxZQUFtQyxPQUFPTyxjQUFQLENBZmtCLENBZ0JyRDs7QUFDQSxNQUFJLENBQUNULGFBQUwsRUFBb0JBLGFBQWEsR0FBR1MsY0FBaEI7QUFFcEIsU0FBT0EsY0FBUDtBQUNEO0FBRU0sU0FBU0ksZ0JBQVQsQ0FBMEJYLFlBQTFCLEVBQXdDO0FBQzdDLFFBQU1ZLEtBQUssR0FBR0MscURBQU8sQ0FBQyxNQUFNUCxpQkFBaUIsQ0FBQ04sWUFBRCxDQUF4QixFQUF3QyxDQUFDQSxZQUFELENBQXhDLENBQXJCO0FBQ0EsU0FBT1ksS0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL2xpYi9ncmFwaHFsLWNsaWVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1ob29rcyc7XG5pbXBvcnQgbWVtQ2FjaGUgZnJvbSAnZ3JhcGhxbC1ob29rcy1tZW1jYWNoZSc7XG5cbmxldCBncmFwaFFMQ2xpZW50O1xuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBuZXcgR3JhcGhRTENsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXG4gICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9ncmFwaHFsJywgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgICBjYWNoZTogbWVtQ2FjaGUoeyBpbml0aWFsU3RhdGUgfSlcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplR3JhcGhRTChpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9ncmFwaFFMQ2xpZW50ID0gZ3JhcGhRTENsaWVudCA/PyBjcmVhdGVDbGllbnQoaW5pdGlhbFN0YXRlKTtcblxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgR3JhcGhRTCBzdGF0ZSwgY3JlYXRlIGEgbmV3IGNhY2hlIHdpdGggdGhlXG4gIC8vIGN1cnJlbnQgc3RhdGUgbWVyZ2VkIHdpdGggdGhlIGluY29taW5nIHN0YXRlIGFuZCBzZXQgaXQgdG8gdGhlIEdyYXBoUUwgY2xpZW50LlxuICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBpbml0aWFsIHN0YXRlIG9mIGBtZW1DYWNoZWAgY2FuIG9ubHkgYmUgc2V0IG9uY2VcbiAgaWYgKGluaXRpYWxTdGF0ZSAmJiBncmFwaFFMQ2xpZW50KSB7XG4gICAgZ3JhcGhRTENsaWVudC5jYWNoZSA9IG1lbUNhY2hlKHtcbiAgICAgIGluaXRpYWxTdGF0ZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgZ3JhcGhRTENsaWVudC5jYWNoZS5nZXRJbml0aWFsU3RhdGUoKSxcbiAgICAgICAgaW5pdGlhbFN0YXRlXG4gICAgICApXG4gICAgfSk7XG4gIH1cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgR3JhcGhRTCBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2dyYXBoUUxDbGllbnQ7XG4gIC8vIENyZWF0ZSB0aGUgR3JhcGhRTCBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghZ3JhcGhRTENsaWVudCkgZ3JhcGhRTENsaWVudCA9IF9ncmFwaFFMQ2xpZW50O1xuXG4gIHJldHVybiBfZ3JhcGhRTENsaWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdyYXBoUUxDbGllbnQoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplR3JhcGhRTChpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/graphql-client.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-hooks */ \"graphql-hooks\");\n/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_hooks__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/i18n */ \"./src/i18n.ts\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/theme */ \"./src/theme.ts\");\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/state/store */ \"./src/state/store.ts\");\n/* harmony import */ var _lib_graphql_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/lib/graphql-client */ \"./src/lib/graphql-client.ts\");\nvar _jsxFileName = \"/Users/wescopeland/Documents/github/scoretrackr-original/src/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\n\nconst store = Object(_state_store__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\nconst myApp = ({\n  Component,\n  pageProps\n}) => {\n  const graphQLClient = Object(_lib_graphql_client__WEBPACK_IMPORTED_MODULE_9__[\"useGraphQLClient\"])(pageProps.initialGraphQLState);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Scoretrackr\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"minimum-scale=1, initial-scale=1, width=device-width\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx(graphql_hooks__WEBPACK_IMPORTED_MODULE_4__[\"ClientContext\"].Provider, {\n    value: graphQLClient,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CssBaseline\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }))))));\n};\n\nmyApp.getInitialProps = async appContext => {\n  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext);\n  return _objectSpread({}, appProps);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__[\"appWithTranslation\"])(myApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwibXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJncmFwaFFMQ2xpZW50IiwidXNlR3JhcGhRTENsaWVudCIsImluaXRpYWxHcmFwaFFMU3RhdGUiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0aGVtZSIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJhcHBQcm9wcyIsIkFwcCIsImFwcFdpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyw0REFBYyxFQUE1Qjs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUF3QztBQUNwRCxRQUFNQyxhQUFhLEdBQUdDLDRFQUFnQixDQUFDRixTQUFTLENBQUNHLG1CQUFYLENBQXRDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxXQUFPLEVBQUMsc0RBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFTRSxNQUFDLDJEQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVKLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFUyw4Q0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBZSxTQUFLLEVBQUVkLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsU0FBRCxlQUFlSSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQURGLENBREYsQ0FURixDQURGO0FBb0JELENBL0JEOztBQWlDQUYsS0FBSyxDQUFDYSxlQUFOLEdBQXdCLE1BQU9DLFVBQVAsSUFBc0I7QUFDNUMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtDQUFHLENBQUNILGVBQUosQ0FBb0JDLFVBQXBCLENBQXZCO0FBQ0EsMkJBQVlDLFFBQVo7QUFDRCxDQUhEOztBQUtlRSwrSEFBa0IsQ0FBQ2pCLEtBQUQsQ0FBakMiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCwgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IENsaWVudENvbnRleHQgfSBmcm9tICdncmFwaHFsLWhvb2tzJztcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlZHV4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XG5pbXBvcnQgdGhlbWUgZnJvbSAnfi90aGVtZSc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnfi9zdGF0ZS9zdG9yZSc7XG5pbXBvcnQgeyB1c2VHcmFwaFFMQ2xpZW50IH0gZnJvbSAnfi9saWIvZ3JhcGhxbC1jbGllbnQnO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbmNvbnN0IG15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgZ3JhcGhRTENsaWVudCA9IHVzZUdyYXBoUUxDbGllbnQocGFnZVByb3BzLmluaXRpYWxHcmFwaFFMU3RhdGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TY29yZXRyYWNrcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxDbGllbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtncmFwaFFMQ2xpZW50fT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8UmVkdXhQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9SZWR1eFByb3ZpZGVyPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L0NsaWVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5teUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG4gIHJldHVybiB7IC4uLmFwcFByb3BzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24obXlBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/state/active-game/active-game.selectors.ts":
/*!********************************************************!*\
  !*** ./src/state/active-game/active-game.selectors.ts ***!
  \********************************************************/
/*! exports provided: selectActiveGameState, selectCurrentTrack, selectActiveGameColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectActiveGameState\", function() { return selectActiveGameState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectCurrentTrack\", function() { return selectCurrentTrack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectActiveGameColor\", function() { return selectActiveGameColor; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst selectActiveGameState = state => state.activeGame;\nconst selectCurrentTrack = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectActiveGameState, activeGameState => ({\n  id: activeGameState.selectedTrackId,\n  friendlyId: activeGameState.selectedTrackFriendlyId\n}));\nconst selectActiveGameColor = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectActiveGameState, activeGameState => activeGameState.hexColor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvYWN0aXZlLWdhbWUvYWN0aXZlLWdhbWUuc2VsZWN0b3JzLnRzPzBiYmUiXSwibmFtZXMiOlsic2VsZWN0QWN0aXZlR2FtZVN0YXRlIiwic3RhdGUiLCJhY3RpdmVHYW1lIiwic2VsZWN0Q3VycmVudFRyYWNrIiwiY3JlYXRlU2VsZWN0b3IiLCJhY3RpdmVHYW1lU3RhdGUiLCJpZCIsInNlbGVjdGVkVHJhY2tJZCIsImZyaWVuZGx5SWQiLCJzZWxlY3RlZFRyYWNrRnJpZW5kbHlJZCIsInNlbGVjdEFjdGl2ZUdhbWVDb2xvciIsImhleENvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlPLE1BQU1BLHFCQUFxQixHQUFJQyxLQUFELElBQXFCQSxLQUFLLENBQUNDLFVBQXpEO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUdDLHVFQUFjLENBQzlDSixxQkFEOEMsRUFFN0NLLGVBQUQsS0FBc0I7QUFDcEJDLElBQUUsRUFBRUQsZUFBZSxDQUFDRSxlQURBO0FBRXBCQyxZQUFVLEVBQUVILGVBQWUsQ0FBQ0k7QUFGUixDQUF0QixDQUY4QyxDQUF6QztBQVFBLE1BQU1DLHFCQUFxQixHQUFHTix1RUFBYyxDQUNqREoscUJBRGlELEVBRWhESyxlQUFELElBQXFCQSxlQUFlLENBQUNNLFFBRlksQ0FBNUMiLCJmaWxlIjoiLi9zcmMvc3RhdGUvYWN0aXZlLWdhbWUvYWN0aXZlLWdhbWUuc2VsZWN0b3JzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2VyJztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEFjdGl2ZUdhbWVTdGF0ZSA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmFjdGl2ZUdhbWU7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RDdXJyZW50VHJhY2sgPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0QWN0aXZlR2FtZVN0YXRlLFxuICAoYWN0aXZlR2FtZVN0YXRlKSA9PiAoe1xuICAgIGlkOiBhY3RpdmVHYW1lU3RhdGUuc2VsZWN0ZWRUcmFja0lkLFxuICAgIGZyaWVuZGx5SWQ6IGFjdGl2ZUdhbWVTdGF0ZS5zZWxlY3RlZFRyYWNrRnJpZW5kbHlJZFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEFjdGl2ZUdhbWVDb2xvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RBY3RpdmVHYW1lU3RhdGUsXG4gIChhY3RpdmVHYW1lU3RhdGUpID0+IGFjdGl2ZUdhbWVTdGF0ZS5oZXhDb2xvclxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/state/active-game/active-game.selectors.ts\n");

/***/ }),

/***/ "./src/state/active-game/active-game.slice.ts":
/*!****************************************************!*\
  !*** ./src/state/active-game/active-game.slice.ts ***!
  \****************************************************/
/*! exports provided: initialState, activeGame, activeGameActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeGame\", function() { return activeGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeGameActions\", function() { return activeGameActions; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_create_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/create-initial-state */ \"./src/utils/create-initial-state.ts\");\n\n\nconst initialState = Object(_utils_create_initial_state__WEBPACK_IMPORTED_MODULE_1__[\"createInitialState\"])({\n  canShowTracksBar: true,\n  isDesktopSidenavOpen: true,\n  isMobileSidenavOpen: false\n});\nconst activeGame = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'activeGame',\n  initialState,\n  reducers: {\n    setGameDetails: (state, action) => {\n      state.hexColor = action.payload.color;\n      state.name = action.payload.name;\n    },\n    setSelectedTrack: (state, action) => {\n      state.selectedTrackId = action.payload.id;\n      state.selectedTrackFriendlyId = action.payload.friendlyId;\n    },\n    toggleIsDesktopSidenavOpen: (state, action) => {\n      state.isDesktopSidenavOpen = !state.isDesktopSidenavOpen;\n    },\n    toggleIsMobileSidenavOpen: (state, action) => {\n      state.isMobileSidenavOpen = !state.isMobileSidenavOpen;\n    }\n  }\n});\nconst activeGameActions = activeGame.actions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvYWN0aXZlLWdhbWUvYWN0aXZlLWdhbWUuc2xpY2UudHM/MzhjNiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjcmVhdGVJbml0aWFsU3RhdGUiLCJjYW5TaG93VHJhY2tzQmFyIiwiaXNEZXNrdG9wU2lkZW5hdk9wZW4iLCJpc01vYmlsZVNpZGVuYXZPcGVuIiwiYWN0aXZlR2FtZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0R2FtZURldGFpbHMiLCJzdGF0ZSIsImFjdGlvbiIsImhleENvbG9yIiwicGF5bG9hZCIsImNvbG9yIiwic2V0U2VsZWN0ZWRUcmFjayIsInNlbGVjdGVkVHJhY2tJZCIsImlkIiwic2VsZWN0ZWRUcmFja0ZyaWVuZGx5SWQiLCJmcmllbmRseUlkIiwidG9nZ2xlSXNEZXNrdG9wU2lkZW5hdk9wZW4iLCJ0b2dnbGVJc01vYmlsZVNpZGVuYXZPcGVuIiwiYWN0aXZlR2FtZUFjdGlvbnMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHTyxNQUFNQSxZQUFZLEdBQUdDLHNGQUFrQixDQUFrQjtBQUM5REMsa0JBQWdCLEVBQUUsSUFENEM7QUFFOURDLHNCQUFvQixFQUFFLElBRndDO0FBRzlEQyxxQkFBbUIsRUFBRTtBQUh5QyxDQUFsQixDQUF2QztBQU1BLE1BQU1DLFVBQVUsR0FBR0Msb0VBQVcsQ0FBQztBQUNwQ0MsTUFBSSxFQUFFLFlBRDhCO0FBRXBDUCxjQUZvQztBQUdwQ1EsVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQWlEO0FBQy9ERCxXQUFLLENBQUNFLFFBQU4sR0FBaUJELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxLQUFoQztBQUNBSixXQUFLLENBQUNILElBQU4sR0FBYUksTUFBTSxDQUFDRSxPQUFQLENBQWVOLElBQTVCO0FBQ0QsS0FKTztBQU1SUSxvQkFBZ0IsRUFBRSxDQUFDTCxLQUFELEVBQVFDLE1BQVIsS0FBa0Q7QUFDbEVELFdBQUssQ0FBQ00sZUFBTixHQUF3QkwsTUFBTSxDQUFDRSxPQUFQLENBQWVJLEVBQXZDO0FBQ0FQLFdBQUssQ0FBQ1EsdUJBQU4sR0FBZ0NQLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlTSxVQUEvQztBQUNELEtBVE87QUFXUkMsOEJBQTBCLEVBQUUsQ0FBQ1YsS0FBRCxFQUFRQyxNQUFSLEtBQTZDO0FBQ3ZFRCxXQUFLLENBQUNQLG9CQUFOLEdBQTZCLENBQUNPLEtBQUssQ0FBQ1Asb0JBQXBDO0FBQ0QsS0FiTztBQWVSa0IsNkJBQXlCLEVBQUUsQ0FBQ1gsS0FBRCxFQUFRQyxNQUFSLEtBQTZDO0FBQ3RFRCxXQUFLLENBQUNOLG1CQUFOLEdBQTRCLENBQUNNLEtBQUssQ0FBQ04sbUJBQW5DO0FBQ0Q7QUFqQk87QUFIMEIsQ0FBRCxDQUE5QjtBQXdCQSxNQUFNa0IsaUJBQWlCLEdBQUdqQixVQUFVLENBQUNrQixPQUFyQyIsImZpbGUiOiIuL3NyYy9zdGF0ZS9hY3RpdmUtZ2FtZS9hY3RpdmUtZ2FtZS5zbGljZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmltcG9ydCB7IEdhbWUsIFRyYWNrIH0gZnJvbSAnfi9lbnRpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVJbml0aWFsU3RhdGUgfSBmcm9tICd+L3V0aWxzL2NyZWF0ZS1pbml0aWFsLXN0YXRlJztcbmltcG9ydCB7IEFjdGl2ZUdhbWVTdGF0ZSB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IGNyZWF0ZUluaXRpYWxTdGF0ZTxBY3RpdmVHYW1lU3RhdGU+KHtcbiAgY2FuU2hvd1RyYWNrc0JhcjogdHJ1ZSxcbiAgaXNEZXNrdG9wU2lkZW5hdk9wZW46IHRydWUsXG4gIGlzTW9iaWxlU2lkZW5hdk9wZW46IGZhbHNlXG59KTtcblxuZXhwb3J0IGNvbnN0IGFjdGl2ZUdhbWUgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhY3RpdmVHYW1lJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEdhbWVEZXRhaWxzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPEdhbWU+PikgPT4ge1xuICAgICAgc3RhdGUuaGV4Q29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvcjtcbiAgICAgIHN0YXRlLm5hbWUgPSBhY3Rpb24ucGF5bG9hZC5uYW1lO1xuICAgIH0sXG5cbiAgICBzZXRTZWxlY3RlZFRyYWNrOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPFRyYWNrPj4pID0+IHtcbiAgICAgIHN0YXRlLnNlbGVjdGVkVHJhY2tJZCA9IGFjdGlvbi5wYXlsb2FkLmlkO1xuICAgICAgc3RhdGUuc2VsZWN0ZWRUcmFja0ZyaWVuZGx5SWQgPSBhY3Rpb24ucGF5bG9hZC5mcmllbmRseUlkO1xuICAgIH0sXG5cbiAgICB0b2dnbGVJc0Rlc2t0b3BTaWRlbmF2T3BlbjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dW5kZWZpbmVkPikgPT4ge1xuICAgICAgc3RhdGUuaXNEZXNrdG9wU2lkZW5hdk9wZW4gPSAhc3RhdGUuaXNEZXNrdG9wU2lkZW5hdk9wZW47XG4gICAgfSxcblxuICAgIHRvZ2dsZUlzTW9iaWxlU2lkZW5hdk9wZW46IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVuZGVmaW5lZD4pID0+IHtcbiAgICAgIHN0YXRlLmlzTW9iaWxlU2lkZW5hdk9wZW4gPSAhc3RhdGUuaXNNb2JpbGVTaWRlbmF2T3BlbjtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgYWN0aXZlR2FtZUFjdGlvbnMgPSBhY3RpdmVHYW1lLmFjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/state/active-game/active-game.slice.ts\n");

/***/ }),

/***/ "./src/state/active-game/index.ts":
/*!****************************************!*\
  !*** ./src/state/active-game/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _active_game_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-game.selectors */ \"./src/state/active-game/active-game.selectors.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectActiveGameState\", function() { return _active_game_selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectActiveGameState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectCurrentTrack\", function() { return _active_game_selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectCurrentTrack\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectActiveGameColor\", function() { return _active_game_selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectActiveGameColor\"]; });\n\n/* harmony import */ var _active_game_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-game.slice */ \"./src/state/active-game/active-game.slice.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return _active_game_slice__WEBPACK_IMPORTED_MODULE_1__[\"initialState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"activeGame\", function() { return _active_game_slice__WEBPACK_IMPORTED_MODULE_1__[\"activeGame\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"activeGameActions\", function() { return _active_game_slice__WEBPACK_IMPORTED_MODULE_1__[\"activeGameActions\"]; });\n\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ \"./src/state/active-game/models/index.ts\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models__WEBPACK_IMPORTED_MODULE_2__) if([\"selectActiveGameState\",\"selectCurrentTrack\",\"selectActiveGameColor\",\"initialState\",\"activeGame\",\"activeGameActions\",\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvYWN0aXZlLWdhbWUvaW5kZXgudHM/NzU3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSIsImZpbGUiOiIuL3NyYy9zdGF0ZS9hY3RpdmUtZ2FtZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWN0aXZlLWdhbWUuc2VsZWN0b3JzJztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aXZlLWdhbWUuc2xpY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL21vZGVscyc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/state/active-game/index.ts\n");

/***/ }),

/***/ "./src/state/active-game/models/active-game-state.model.ts":
/*!*****************************************************************!*\
  !*** ./src/state/active-game/models/active-game-state.model.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdGF0ZS9hY3RpdmUtZ2FtZS9tb2RlbHMvYWN0aXZlLWdhbWUtc3RhdGUubW9kZWwudHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/state/active-game/models/active-game-state.model.ts\n");

/***/ }),

/***/ "./src/state/active-game/models/index.ts":
/*!***********************************************!*\
  !*** ./src/state/active-game/models/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _active_game_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-game-state.model */ \"./src/state/active-game/models/active-game-state.model.ts\");\n/* harmony import */ var _active_game_state_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_active_game_state_model__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _active_game_state_model__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _active_game_state_model__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvYWN0aXZlLWdhbWUvbW9kZWxzL2luZGV4LnRzPzljYjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvc3RhdGUvYWN0aXZlLWdhbWUvbW9kZWxzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hY3RpdmUtZ2FtZS1zdGF0ZS5tb2RlbCc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/state/active-game/models/index.ts\n");

/***/ }),

/***/ "./src/state/reducer.ts":
/*!******************************!*\
  !*** ./src/state/reducer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _active_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-game */ \"./src/state/active-game/index.ts\");\n\n\nconst rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  activeGame: _active_game__WEBPACK_IMPORTED_MODULE_1__[\"activeGame\"].reducer\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvcmVkdWNlci50cz9lZWQxIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiYWN0aXZlR2FtZSIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0Msd0VBQWUsQ0FBQztBQUNsQ0MsWUFBVSxFQUFFQSx1REFBVSxDQUFDQztBQURXLENBQUQsQ0FBbkM7QUFLZUgsMEVBQWYiLCJmaWxlIjoiLi9zcmMvc3RhdGUvcmVkdWNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQgeyBhY3RpdmVHYW1lIH0gZnJvbSAnLi9hY3RpdmUtZ2FtZSc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYWN0aXZlR2FtZTogYWN0aXZlR2FtZS5yZWR1Y2VyXG59KTtcblxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/state/reducer.ts\n");

/***/ }),

/***/ "./src/state/store.ts":
/*!****************************!*\
  !*** ./src/state/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/state/reducer.ts\");\n\n\n\n\n\nconst configureStore = preloadedState => {\n  const composeEnhancers = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])({});\n  let store;\n\n  if (preloadedState) {\n    store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], preloadedState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultMiddleware\"])())));\n  } else {\n    store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultMiddleware\"])())));\n  }\n\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvc3RvcmUudHM/ZjQyYSJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY29tcG9zZUVuaGFuY2VycyIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLGNBQWMsR0FBSUMsY0FBRCxJQUErQjtBQUNwRCxRQUFNQyxnQkFBZ0IsR0FBR0Msb0ZBQW1CLENBQUMsRUFBRCxDQUE1QztBQUVBLE1BQUlDLEtBQUo7O0FBQ0EsTUFBSUgsY0FBSixFQUFvQjtBQUNsQkcsU0FBSyxHQUFHQyx5REFBVyxDQUNqQkMsZ0RBRGlCLEVBRWpCTCxjQUZpQixFQUdqQkMsZ0JBQWdCLENBQUNLLDZEQUFlLENBQUMsR0FBR0MsNkVBQW9CLEVBQXhCLENBQWhCLENBSEMsQ0FBbkI7QUFLRCxHQU5ELE1BTU87QUFDTEosU0FBSyxHQUFHQyx5REFBVyxDQUNqQkMsZ0RBRGlCLEVBRWpCSixnQkFBZ0IsQ0FBQ0ssNkRBQWUsQ0FBQyxHQUFHQyw2RUFBb0IsRUFBeEIsQ0FBaEIsQ0FGQyxDQUFuQjtBQUlEOztBQUVELFNBQU9KLEtBQVA7QUFDRCxDQWxCRDs7QUFvQmVKLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL3N0YXRlL3N0b3JlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgQ29tYmluZWRTdGF0ZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxuaW1wb3J0IHJvb3RSZWR1Y2VyLCB7IEFwcFN0YXRlIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAocHJlbG9hZGVkU3RhdGU/OiBBcHBTdGF0ZSkgPT4ge1xuICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gY29tcG9zZVdpdGhEZXZUb29scyh7fSk7XG5cbiAgbGV0IHN0b3JlOiBDb21iaW5lZFN0YXRlPGFueT47XG4gIGlmIChwcmVsb2FkZWRTdGF0ZSkge1xuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICByb290UmVkdWNlcixcbiAgICAgIHByZWxvYWRlZFN0YXRlLFxuICAgICAgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUoLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKSkpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgcm9vdFJlZHVjZXIsXG4gICAgICBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSguLi5nZXREZWZhdWx0TWlkZGxld2FyZSgpKSlcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/state/store.ts\n");

/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createMuiTheme\"])({\n  palette: {\n    background: {\n      default: '#fafafa' // default: '#121212'\n\n    },\n    primary: {\n      main: '#696969'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__[\"red\"].A400\n    },\n    type: 'light' // type: 'dark'\n\n  },\n  breakpoints: {\n    values: {\n      xs: 0,\n      sm: 576,\n      md: 768,\n      lg: 992,\n      xl: 1200\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUudHM/YzMyOSJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsInJlZCIsIkE0MDAiLCJ0eXBlIiwiYnJlYWtwb2ludHMiLCJ2YWx1ZXMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUUsU0FEQyxDQUVWOztBQUZVLEtBREw7QUFLUEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDLEtBTEY7QUFRUEMsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRTtBQURHLEtBUko7QUFXUEUsU0FBSyxFQUFFO0FBQ0xGLFVBQUksRUFBRUcsNERBQUcsQ0FBQ0M7QUFETCxLQVhBO0FBY1BDLFFBQUksRUFBRSxPQWRDLENBZVA7O0FBZk8sR0FEa0I7QUFtQjNCQyxhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFO0FBQ05DLFFBQUUsRUFBRSxDQURFO0FBRU5DLFFBQUUsRUFBRSxHQUZFO0FBR05DLFFBQUUsRUFBRSxHQUhFO0FBSU5DLFFBQUUsRUFBRSxHQUpFO0FBS05DLFFBQUUsRUFBRTtBQUxFO0FBREc7QUFuQmMsQ0FBRCxDQUE1QjtBQThCZWxCLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnI2ZhZmFmYSdcbiAgICAgIC8vIGRlZmF1bHQ6ICcjMTIxMjEyJ1xuICAgIH0sXG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyM2OTY5NjknXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMTk4NTdiJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IHJlZC5BNDAwXG4gICAgfSxcbiAgICB0eXBlOiAnbGlnaHQnXG4gICAgLy8gdHlwZTogJ2RhcmsnXG4gIH0sXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICB2YWx1ZXM6IHtcbiAgICAgIHhzOiAwLFxuICAgICAgc206IDU3NixcbiAgICAgIG1kOiA3NjgsXG4gICAgICBsZzogOTkyLFxuICAgICAgeGw6IDEyMDBcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.ts\n");

/***/ }),

/***/ "./src/utils/create-initial-state.ts":
/*!*******************************************!*\
  !*** ./src/utils/create-initial-state.ts ***!
  \*******************************************/
/*! exports provided: createInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInitialState\", function() { return createInitialState; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Creates a performance-friendly state object prepopulated with loading and error values.\n *\n * @template T The shape of your state\n * @param {(Partial<StoreDefaults> & T)} initialState The initial values of T\n * @example\n *\n * ```\n * interface UserState {\n *     firstName: string | null;\n *     lastName: string | null;\n * }\n *\n * const initialState = createInitialState<UserState>({\n *     firstName: null;\n *     lastName: null\n * })\n * ```\n *\n * This returns an object as:\n *\n * ```\n * {\n *     firstName: null,\n *     lastName: null,\n *     isLoading: true,\n *     error: undefined\n * }\n * ```\n *\n * isLoading initializes to true by default.\n */\nfunction createInitialState(initialState) {\n  var _initialState$isLoadi;\n\n  const isLoading = (_initialState$isLoadi = initialState === null || initialState === void 0 ? void 0 : initialState.isLoading) !== null && _initialState$isLoadi !== void 0 ? _initialState$isLoadi : true;\n  return _objectSpread(_objectSpread({}, initialState), {}, {\n    isLoading\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY3JlYXRlLWluaXRpYWwtc3RhdGUudHM/MTQzMCJdLCJuYW1lcyI6WyJjcmVhdGVJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NPLFNBQVNBLGtCQUFULENBQ0xDLFlBREssRUFFYztBQUFBOztBQUNuQixRQUFNQyxTQUFTLDRCQUFHRCxZQUFILGFBQUdBLFlBQUgsdUJBQUdBLFlBQVksQ0FBRUMsU0FBakIseUVBQThCLElBQTdDO0FBRUEseUNBQ0tELFlBREw7QUFFRUM7QUFGRjtBQUlEIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2NyZWF0ZS1pbml0aWFsLXN0YXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmVEZWZhdWx0cyB9IGZyb20gJ34vc3RhdGUvc2hhcmVkLW1vZGVscyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBlcmZvcm1hbmNlLWZyaWVuZGx5IHN0YXRlIG9iamVjdCBwcmVwb3B1bGF0ZWQgd2l0aCBsb2FkaW5nIGFuZCBlcnJvciB2YWx1ZXMuXG4gKlxuICogQHRlbXBsYXRlIFQgVGhlIHNoYXBlIG9mIHlvdXIgc3RhdGVcbiAqIEBwYXJhbSB7KFBhcnRpYWw8U3RvcmVEZWZhdWx0cz4gJiBUKX0gaW5pdGlhbFN0YXRlIFRoZSBpbml0aWFsIHZhbHVlcyBvZiBUXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYFxuICogaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gKiAgICAgZmlyc3ROYW1lOiBzdHJpbmcgfCBudWxsO1xuICogICAgIGxhc3ROYW1lOiBzdHJpbmcgfCBudWxsO1xuICogfVxuICpcbiAqIGNvbnN0IGluaXRpYWxTdGF0ZSA9IGNyZWF0ZUluaXRpYWxTdGF0ZTxVc2VyU3RhdGU+KHtcbiAqICAgICBmaXJzdE5hbWU6IG51bGw7XG4gKiAgICAgbGFzdE5hbWU6IG51bGxcbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBUaGlzIHJldHVybnMgYW4gb2JqZWN0IGFzOlxuICpcbiAqIGBgYFxuICoge1xuICogICAgIGZpcnN0TmFtZTogbnVsbCxcbiAqICAgICBsYXN0TmFtZTogbnVsbCxcbiAqICAgICBpc0xvYWRpbmc6IHRydWUsXG4gKiAgICAgZXJyb3I6IHVuZGVmaW5lZFxuICogfVxuICogYGBgXG4gKlxuICogaXNMb2FkaW5nIGluaXRpYWxpemVzIHRvIHRydWUgYnkgZGVmYXVsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZTxUPihcbiAgaW5pdGlhbFN0YXRlOiBQYXJ0aWFsPFN0b3JlRGVmYXVsdHM+ICYgVFxuKTogU3RvcmVEZWZhdWx0cyAmIFQge1xuICBjb25zdCBpc0xvYWRpbmcgPSBpbml0aWFsU3RhdGU/LmlzTG9hZGluZyA/PyB0cnVlO1xuXG4gIHJldHVybiB7XG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgIGlzTG9hZGluZ1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/create-initial-state.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIj83ZTM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "graphql-hooks":
/*!********************************!*\
  !*** external "graphql-hooks" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLWhvb2tzXCI/ZGFmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncmFwaHFsLWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-hooks\n");

/***/ }),

/***/ "graphql-hooks-memcache":
/*!*****************************************!*\
  !*** external "graphql-hooks-memcache" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-hooks-memcache\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLWhvb2tzLW1lbWNhY2hlXCI/NTZmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncmFwaHFsLWhvb2tzLW1lbWNhY2hlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1ob29rcy1tZW1jYWNoZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-hooks-memcache\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });