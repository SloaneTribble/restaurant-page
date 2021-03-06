/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/main-dip.jpg */ "./src/images/main-dip.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --menu: rgb(142, 0, 0);\n    --home: rgb(245, 239, 220);\n    --contact: orange;\n    --shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.6);\n}\n\nhtml,\nbody{\n    box-sizing: border-box;\n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex: 1;\n}\n*,\n*:before,\n*:after{\n    box-sizing: inherit;\n    max-width: 100%;\n    margin: 0;\n    font-family: 'Abril Fatface', cursive;\n}\n\n.body{\n    display: grid;\n    grid-template-rows: 1fr 8fr .5fr;\n    flex: 1;\n    min-height: 100%;\n    min-width: 100%;\n}\n\n/* Begin header */\n\n.header{\n    background-color: turquoise;\n    display: grid;\n    grid-template-columns: 2fr repeat(3, 1fr);\n}\n\n.title{\n    padding: 0 10px;\n    font-size: 2.5rem;\n    box-shadow: var(--shadow);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton{\n    font-size: 1.5rem;\n}\n\n.home-tab{\n    background-color: var(--home);\n}\n\n.menu-tab{\n    background-color: var(--menu);\n}\n\n.contact-tab{\n    background-color: var(--contact);\n}\n\n/* End header */\n\n/* Begin main content */\n\n.main-content{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position: center;\n    display: flex; \n    align-items: center;\n    flex: 1;\n    flex-direction: column;\n    background-color: darksalmon;\n}\n\n.home{   \n    flex: 1;\n    height: 100%;\n    width: 100%;\n    color: white;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: end;\n}\n\n.intro{\n    background-color: var(--home);\n    box-shadow: var(--shadow);\n    height: 60%;\n    width: 60%;\n    color: black;\n    border: groove 2px black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 32px;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: 200;\n}\n\n.photo-credit{\n    justify-self: end;\n    padding-right: 5px;\n    padding-bottom: 5px;\n}\n\na:link{\n    color: white;\n}\n\na:visited{\n    color: orange;\n}\n\n.menu{\n    background-color: var(--menu);\n    flex: 1;\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60%;\n    gap: 5px;\n    padding: 5px;\n}\n\n.menu-item{\n    border: solid black 2px;\n    background-color: rgb(255, 177, 108);\n    box-shadow: var(--shadow);\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 1.2rem 0;\n}\n\n\n.item-description{\n    font-style: italic;\n    font-weight: 100;\n}\n\n.contact{\n    background-color: var(--contact);\n    box-shadow: var(--shadow);\n    height: 100%;\n    width: 60%;\n    padding: 5% 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 1fr);\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n    font-size: 2rem;\n    border: 2px groove black;\n}\n\n/* End main content */\n\n.footer{\n    background-color: firebrick;\n    box-shadow: var(--shadow);\n    flex: 1;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    align-items: center;\n    color: var(--home);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,0BAA0B;IAC1B,iBAAiB;IACjB,+CAA+C;AACnD;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,OAAO;AACX;AACA;;;IAGI,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,OAAO;IACP,gBAAgB;IAChB,eAAe;AACnB;;AAEA,iBAAiB;;AAEjB;IACI,2BAA2B;IAC3B,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gCAAgC;AACpC;;AAEA,eAAe;;AAEf,uBAAuB;;AAEvB;IACI,mDAAwC;IACxC,sBAAsB;IACtB,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,OAAO;IACP,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,yBAAyB;IACzB,WAAW;IACX,UAAU;IACV,YAAY;IACZ,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,OAAO;IACP,aAAa;IACb,kCAAkC;IAClC,UAAU;IACV,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,oCAAoC;IACpC,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,iBAAiB;AACrB;;;AAGA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,yBAAyB;IACzB,YAAY;IACZ,UAAU;IACV,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;IACf,wBAAwB;AAC5B;;AAEA,qBAAqB;;AAErB;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,OAAO;IACP,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qCAAqC;IACrC,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');\n\n:root{\n    --menu: rgb(142, 0, 0);\n    --home: rgb(245, 239, 220);\n    --contact: orange;\n    --shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.6);\n}\n\nhtml,\nbody{\n    box-sizing: border-box;\n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex: 1;\n}\n*,\n*:before,\n*:after{\n    box-sizing: inherit;\n    max-width: 100%;\n    margin: 0;\n    font-family: 'Abril Fatface', cursive;\n}\n\n.body{\n    display: grid;\n    grid-template-rows: 1fr 8fr .5fr;\n    flex: 1;\n    min-height: 100%;\n    min-width: 100%;\n}\n\n/* Begin header */\n\n.header{\n    background-color: turquoise;\n    display: grid;\n    grid-template-columns: 2fr repeat(3, 1fr);\n}\n\n.title{\n    padding: 0 10px;\n    font-size: 2.5rem;\n    box-shadow: var(--shadow);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton{\n    font-size: 1.5rem;\n}\n\n.home-tab{\n    background-color: var(--home);\n}\n\n.menu-tab{\n    background-color: var(--menu);\n}\n\n.contact-tab{\n    background-color: var(--contact);\n}\n\n/* End header */\n\n/* Begin main content */\n\n.main-content{\n    background: url('./images/main-dip.jpg');\n    background-size: cover;\n    background-position: center;\n    display: flex; \n    align-items: center;\n    flex: 1;\n    flex-direction: column;\n    background-color: darksalmon;\n}\n\n.home{   \n    flex: 1;\n    height: 100%;\n    width: 100%;\n    color: white;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: end;\n}\n\n.intro{\n    background-color: var(--home);\n    box-shadow: var(--shadow);\n    height: 60%;\n    width: 60%;\n    color: black;\n    border: groove 2px black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 32px;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: 200;\n}\n\n.photo-credit{\n    justify-self: end;\n    padding-right: 5px;\n    padding-bottom: 5px;\n}\n\na:link{\n    color: white;\n}\n\na:visited{\n    color: orange;\n}\n\n.menu{\n    background-color: var(--menu);\n    flex: 1;\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60%;\n    gap: 5px;\n    padding: 5px;\n}\n\n.menu-item{\n    border: solid black 2px;\n    background-color: rgb(255, 177, 108);\n    box-shadow: var(--shadow);\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 1.2rem 0;\n}\n\n\n.item-description{\n    font-style: italic;\n    font-weight: 100;\n}\n\n.contact{\n    background-color: var(--contact);\n    box-shadow: var(--shadow);\n    height: 100%;\n    width: 60%;\n    padding: 5% 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 1fr);\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n    font-size: 2rem;\n    border: 2px groove black;\n}\n\n/* End main content */\n\n.footer{\n    background-color: firebrick;\n    box-shadow: var(--shadow);\n    flex: 1;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    align-items: center;\n    color: var(--home);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bodyMaker": () => (/* binding */ bodyMaker)
/* harmony export */ });
function bodyMaker(){
    const body = document.createElement('div');
    body.classList.add('body');

    return body;
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
function contact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const greeting = document.createElement('div');
    greeting.innerText = "We would be very happy to hear from you any time.";

    contact.appendChild(greeting);

    const tel = document.createElement('div');
    tel.innerText = "555 - 323 - 4330";

    contact.appendChild(tel);

    const email = document.createElement('div');
    email.innerText = "bubby@whip.dip";

    contact.appendChild(email);

    const address = document.createElement('div');
    address.innerText = "Bubby's Whipped Dips \n 123 Fake St. \n Springfield, MO 10101";

    contact.appendChild(address);


    return contact;
}
 


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
function footer(){
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    
    const tel = document.createElement('div');
    tel.innerText = "555 - 323 - 4350";
    
    footer.appendChild(tel);
    
    const email = document.createElement('div');
    email.innerText = "bubby@whip.dip";
    
    footer.appendChild(email);
    
    const address = document.createElement('div');
    address.innerText = '123 Fake St. Springfield MO 10101';

    footer.appendChild(address);

    return footer;
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerMaker": () => (/* binding */ headerMaker)
/* harmony export */ });
function headerMaker(){
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Bubby\'s Whipped Dips';

    const homeTab = document.createElement('button');
    homeTab.classList.add('home-tab');
    homeTab.textContent = 'home';

    const menuTab = document.createElement('button');
    menuTab.classList.add('menu-tab');
    menuTab.textContent = 'menu';

    const contactTab = document.createElement('button');
    contactTab.classList.add('contact-tab');
    contactTab.textContent = 'contact';

    header.appendChild(title);
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);   

    return header;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeMaker": () => (/* binding */ homeMaker)
/* harmony export */ });
    
function homeMaker(){
        const element = document.createElement('div');
        
        element.classList.add('home');

        const intro = document.createElement('div');
        intro.classList.add('intro');
        intro.innerText = "With pride and passion, Bubby's has served hand-whipped dips since 1956.";

        element.appendChild(intro);

        const credit = document.createElement('span');
        credit.classList.add('photo-credit');
        credit.innerHTML = `Photos by <a href="https://unsplash.com/@victoriakosmo">Victoria Shes</a> on <a href="https://unsplash.com/">Unsplash</a>
        and <a href='https://pngtree.com/so/Mayonnaise'>pngtree.com</a>` ;   

        element.appendChild(credit);
        return element;
}



// Photo by Victoria Shes on Unsplash



/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _body_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.js */ "./src/body.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-content.js */ "./src/main-content.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");






// contentBody contains everything on the page


function pageLoad() {
    const contentBody = (0,_body_js__WEBPACK_IMPORTED_MODULE_0__.bodyMaker)();

    document.body.appendChild(contentBody);

    contentBody.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__.headerMaker)());

    // mainContentContainer holds the home, menu or contact page

    const mainContentContainer = (0,_main_content_js__WEBPACK_IMPORTED_MODULE_2__.mainContent)();

    contentBody.appendChild(mainContentContainer);

    contentBody.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__.footer)());

    mainContentContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__.homeMaker)());
}



/***/ }),

/***/ "./src/main-content.js":
/*!*****************************!*\
  !*** ./src/main-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContent": () => (/* binding */ mainContent)
/* harmony export */ });
function mainContent(){
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    return mainContent;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
function menu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const classic = menuItem("Classic Whip", "Our namesake dip", "14");
    const spicy = menuItem("Spicy", "A spicy twist on an old favorite", "17");
    const thin = menuItem("Thin", "Flavor takes center stage with this heritage selection", "12");
    const herbed = menuItem("Herbed", "A creamy dip featuring the rarest herbs", "15");
    const creamy = menuItem("Creamy", "Classic dip with a boost of cream", "16");

    menu.appendChild(classic);
    menu.appendChild(spicy);
    menu.appendChild(thin);
    menu.appendChild(herbed);
    menu.appendChild(creamy);

    return menu;
}

function menuItem(title, description, price){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemTitle = document.createElement('span');
    itemTitle.textContent = title;

    menuItem.appendChild(itemTitle);

    const itemDescription = document.createElement('div');
    itemDescription.classList.add("item-description");
    itemDescription.textContent = description;

    menuItem.appendChild(itemDescription);

    const itemPrice = document.createElement('span');
    itemPrice.textContent = price;

    menuItem.appendChild(itemPrice);

    return menuItem;
}




/***/ }),

/***/ "./src/images/main-dip.jpg":
/*!*********************************!*\
  !*** ./src/images/main-dip.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e58c7c238cc1afbab9bd.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial */ "./src/initial.js");






(0,_initial__WEBPACK_IMPORTED_MODULE_4__.pageLoad)();


// Tabs will clear mainContentContainer and replace with relevant section material
const mainContentContainer = document.querySelector('.main-content');

const homeButton = document.querySelector(".home-tab");
homeButton.addEventListener("click", ()=>{
    console.log("Home");
    mainContentContainer.removeChild(mainContentContainer.firstElementChild);
    mainContentContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeMaker)());
});

const menuButton = document.querySelector(".menu-tab");
menuButton.addEventListener("click", ()=>{
    console.log("Menu");
    mainContentContainer.removeChild(mainContentContainer.firstElementChild);
    mainContentContainer.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)());

});

const contactButton = document.querySelector(".contact-tab");
contactButton.addEventListener("click", ()=>{
    console.log("Contact");
    mainContentContainer.removeChild(mainContentContainer.firstElementChild);
    mainContentContainer.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.contact)());
});





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map