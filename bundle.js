/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.png */ \"./src/images/background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gamebtwo.png */ \"./src/images/gamebtwo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/londthree.png */ \"./src/images/londthree.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/button_back.png */ \"./src/images/button_back.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto Light', cursive;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\nhtml::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    filter: blur(5px); /* Интенсивность размытия */\r\n    z-index: -1; /* Чтобы элемент оказался позади */\r\n}\r\n\r\n\r\n/*.background-video {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    z-index: -1;\r\n}*/\r\n\r\n.content {\r\n    position: relative;\r\n    z-index: 1;\r\n    color: white;\r\n    text-align: center;\r\n    margin-top: 20%;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.game-container {\r\n    height: 552px;\r\n    width: 422px;\r\n    position: relative;\r\n    margin: 20px auto 20px auto;\r\n    overflow: hidden;\r\n    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);\r\n    border-radius: 15px;\r\n}\r\n\r\n#game-canvas {\r\n    height: 552px;\r\n    width: 422px;\r\n    display: block;\r\n    border-radius: 15px;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.4)), url(${___CSS_LOADER_URL_REPLACEMENT_1___} ) top left;\r\n}\r\n\r\n#score-container {\r\n    width: 422px;\r\n    height: 49px;\r\n    background: rgba(182, 200, 220, 0.7);\r\n    position: absolute;\r\n    top: -2px;\r\n    left: 0;\r\n    z-index: -1;\r\n    border-radius: 17px 17px 0 0;\r\n    border-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) 100 5 round;\r\n}\r\n\r\n#score-container p {\r\n    font-size: 20px;\r\n    padding: 0;\r\n    line-height: 47px;\r\n    margin: 0px 0 0 5px;\r\n}\r\n\r\nimg {\r\n    display: none\r\n}\r\n\r\n#start-screen, #game-over-screen {\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n}\r\n\r\n#game-over-screen {\r\n    visibility: hidden;\r\n}\r\n\r\nh2, h3, h1 {\r\n    font-weight: normal\r\n}\r\n\r\nh1 {\r\n    font-size: 60px;\r\n    color: #974bef;\r\n    transform: rotate(-10deg);\r\n    margin: 0;\r\n    -webkit-text-stroke: 1px black;\r\n}\r\n\r\n/*.discord-logo {\r\n    border-radius: 15px;\r\n    width: 130px;\r\n    height: auto;\r\n    display: block;\r\n    margin: 0 auto;\r\n}*/\r\n\r\n.logo{\r\n    display: block;\r\n    width: 200px;\r\n    height: auto;\r\n    /*background-color: #ffffff;*/\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    margin: 10px auto 50px auto;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n    margin: 20px auto 0 auto;\r\n    color: #ffffff;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    -webkit-text-stroke: 1px black;\r\n    line-height: 1;\r\n}\r\n\r\n.author {\r\n    color: white;\r\n    margin: 5px;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n}\r\n\r\n.dedication {\r\n    font-size: 12px;\r\n    color: white;\r\n    margin: 5px;\r\n    line-height: 1;\r\n}\r\n\r\nh3 a {\r\n    color: #5a5816\r\n}\r\n\r\n/*.start-button, .retry-button {\r\n    width: 105px;\r\n    height: 31px;\r\n    display: block;\r\n    color: #ffffff;\r\n    font-size: 12px;\r\n    line-height: 31px;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: 90px;\r\n    margin-left: -53px;\r\n    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8);\r\n}*/\r\n\r\n.controls-container {\r\n    position: absolute;\r\n    right: 115px;\r\n    bottom: 10px;\r\n    margin: 0;\r\n    color: lightblue\r\n}\r\n\r\n.controls-list {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n}\r\n\r\n.control-key {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n    border: 1px solid #ffffff;\r\n}\r\n\r\n.control-label {\r\n    font-size: 13px;\r\n    color: white;\r\n}\r\n\r\n#connect-metamask, #submit-score, #leader-board {\r\n    padding: 10px 15px;\r\n    font-size: 16px;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n#connect-metamask:disabled {\r\n    background-color: #cccccc;\r\n    cursor: not-allowed;\r\n}\r\n\r\n\r\n.container {\r\n    max-width: 64rem;\r\n    margin: 0 auto;\r\n}\r\nh1 {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    margin-bottom: 1.5rem;\r\n}\r\nbutton {\r\n    padding: 0.5rem 2.5rem;\r\n    border: none;\r\n    border-radius: 0.25rem;\r\n    cursor: pointer;\r\n    margin: 0.5rem;\r\n    color: white;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    width: 10rem;\r\n}\r\n\r\ninput {\r\n    padding: 0.5rem;\r\n    border: 1px solid #ccc;\r\n    border-radius: 0.25rem;\r\n    margin-right: 0.5rem;\r\n}\r\n#leaderboard {\r\n    margin-top: 1.5rem;\r\n}\r\ntable {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\nth, td {\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\ntr:hover {\r\n    background: #e5e7eb;\r\n}\r\na {\r\n    color: #3b82f6;\r\n    text-decoration: underline;\r\n}\r\n\r\n.game-container {\r\n    display: none;\r\n}\r\n.game-container.visible {\r\n    display: block;\r\n}\r\n\r\n#leader-board {\r\n    display: none;\r\n}\r\n#leader-board.visible {\r\n    display: block;\r\n}\r\n\r\n.knopochki{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 2em;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.knopochki p{\r\n    color: white;\r\n    -webkit-text-stroke: 2px black;\r\n    text-stroke: 2px black;\r\n    font-weight: bold;\r\n    font-size: 2rem;\r\n    margin: 0;\r\n}\r\n\r\n.knopochki .button {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    background-color:rgb(152, 65, 0);\r\n    color: #fff;\r\n    font-size: 16px;\r\n    border: 0.5px solid rgba(0, 0, 0, 0.1);\r\n    padding-bottom: 8px;\r\n    height: 65px;\r\n    padding: 12px;\r\n    border-radius: 15px 15px 12px 12px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    will-change: transform;\r\n    transition: all .1s ease-in-out 0s;\r\n    user-select: none;\r\n    /* Add gradient shading to each side */\r\n    background-image: linear-gradient(to right, rgba(152, 65, 0, 0.8), rgba(0, 0, 0, 0)),\r\n    linear-gradient(to bottom, rgba(152, 65, 0, 0.8), rgba(0, 0, 0, 0));\r\n    background-position: bottom right, bottom right;\r\n    background-size: 100% 100%, 100% 100%;\r\n    background-repeat: no-repeat;\r\n    box-shadow: inset -4px -10px 0px rgba(255, 255, 255, 0.4),\r\n    inset -4px -8px 0px rgba(152, 65, 0, 0.3),\r\n    0px 2px 1px rgba(152, 65, 0, 0.3),\r\n    0px 2px 1px rgba(255, 255, 255, 0.1);\r\n    transform: perspective(70px) rotateX(5deg) rotateY(0deg);\r\n}\r\n\r\n.knopochki .button::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(152, 65, 0, 0.5));\r\n    z-index: -1;\r\n    border-radius: 15px;\r\n    box-shadow: inset 4px 0px 0px rgba(255, 255, 255, 0.1),\r\n    inset 4px -8px 0px rgba(152, 65, 0, 0.3);\r\n    transition: all .1s ease-in-out 0s;\r\n}\r\n\r\n\r\n.knopochki .button::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-image: linear-gradient(to right, rgba(152, 65, 0, 0.8), rgba(0, 0, 0, 0)),\r\n    linear-gradient(to bottom, rgba(152, 65, 0, 0.8), rgba(0, 0, 0, 0));\r\n    background-position: bottom right, bottom right;\r\n    background-size: 100% 100%, 100% 100%;\r\n    background-repeat: no-repeat;\r\n    z-index: -1;\r\n    border-radius: 15px;\r\n    transition: all .1s ease-in-out 0s;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://seismic-jump/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://seismic-jump/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://seismic-jump/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://seismic-jump/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://seismic-jump/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://seismic-jump/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://seismic-jump/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://seismic-jump/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://seismic-jump/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://seismic-jump/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/Discord_PFP_Teal.gif.mp4":
/*!*********************************************!*\
  !*** ./src/images/Discord_PFP_Teal.gif.mp4 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Discord_PFP_Teal.gif.mp4\";\n\n//# sourceURL=webpack://seismic-jump/./src/images/Discord_PFP_Teal.gif.mp4?");

/***/ }),

/***/ "./src/images/background.MOV":
/*!***********************************!*\
  !*** ./src/images/background.MOV ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/background.MOV\";\n\n//# sourceURL=webpack://seismic-jump/./src/images/background.MOV?");

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/background.png\";\n\n//# sourceURL=webpack://seismic-jump/./src/images/background.png?");

/***/ }),

/***/ "./src/images/button_back.png":
/*!************************************!*\
  !*** ./src/images/button_back.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/button_back.png\";\n\n//# sourceURL=webpack://seismic-jump/./src/images/button_back.png?");

/***/ }),

/***/ "./src/images/gamebtwo.png":
/*!*********************************!*\
  !*** ./src/images/gamebtwo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/gamebtwo.png\";\n\n//# sourceURL=webpack://seismic-jump/./src/images/gamebtwo.png?");

/***/ }),

/***/ "./src/images/hsac.png":
/*!*****************************!*\
  !*** ./src/images/hsac.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/hsac.png\";\n\n//# sourceURL=webpack://seismic-jump/./src/images/hsac.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/logo.png\";\n\n//# sourceURL=webpack://seismic-jump/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/londthree.png":
/*!**********************************!*\
  !*** ./src/images/londthree.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/londthree.png\";\n\n//# sourceURL=webpack://seismic-jump/./src/images/londthree.png?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_hsac_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/hsac.png */ \"./src/images/hsac.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _sounds_pup_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds/pup.mp3 */ \"./src/sounds/pup.mp3\");\n/* harmony import */ var _sounds_high_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sounds/high.mp3 */ \"./src/sounds/high.mp3\");\n/* harmony import */ var _sounds_gameover_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sounds/gameover.mp3 */ \"./src/sounds/gameover.mp3\");\n/* harmony import */ var _images_background_MOV__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/background.MOV */ \"./src/images/background.MOV\");\n/* harmony import */ var _images_Discord_PFP_Teal_gif_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/Discord_PFP_Teal.gif.mp4 */ \"./src/images/Discord_PFP_Teal.gif.mp4\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet currentAnimationFrame=true;\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n/*    const backgroundSource = document.querySelector('.background-video source');\r\n    if (backgroundSource) {\r\n        backgroundSource.src = backgroundVideo;\r\n        const backgroundVideoElement = backgroundSource.parentElement;\r\n        backgroundVideoElement.load();\r\n        backgroundVideoElement.play().catch(() => {\r\n            console.log('Autoplay background is blocked, waiting for interaction');\r\n            document.addEventListener('keydown', () => backgroundVideoElement.play(), {once: true});\r\n            document.addEventListener('click', () => backgroundVideoElement.play(), {once: true});\r\n        });\r\n    } else {\r\n        console.error('Background video source not found');\r\n    }*/\r\n\r\n/*    const discordSource = document.querySelector('.discord-logo source');\r\n    if (discordSource) {\r\n        discordSource.src = discordLogoVideo;\r\n        const discordVideoElement = discordSource.parentElement;\r\n        discordVideoElement.load();\r\n        discordVideoElement.play().catch(() => {\r\n            console.log('Discord logo autoplay blocked, waiting for interaction');\r\n            document.addEventListener('keydown', () => discordVideoElement.play(), {once: true});\r\n            document.addEventListener('click', () => discordVideoElement.play(), {once: true});\r\n        });\r\n    } else {\r\n        console.error('Discord logo source not found');\r\n    }*/\r\n\r\n    const startButton = document.getElementById('start-game');\r\n    startButton.addEventListener('click', StartGame);\r\n\r\n    const retryButton = document.getElementById('retry-game');\r\n    retryButton.addEventListener('click', RetryGame);\r\n\r\n\r\n    /*const connectButton = document.getElementById('connect-metamask');*/\r\n    const gameContainer = document.querySelector('.game-container');\r\n    /*const leaderBoard = document.querySelector('#leader-board');*/\r\n\r\n    gameContainer.classList.add('visible');\r\n    /*leaderBoard.classList.add('visible');*/\r\n\r\n/*    connectButton.addEventListener('click', async () => {\r\n        const success = await initializeIrys();\r\n        if (success) {\r\n            connectButton.textContent = `Connected: ${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;\r\n            connectButton.disabled = true;\r\n            gameContainer.classList.add('visible');\r\n            leaderBoard.classList.add('visible');\r\n        }\r\n    });*/\r\n\r\n    InitializeIdleState();\r\n});\r\n\r\nfunction InitializeIdleState() {\r\n    context.clearRect(0, 0, canvasWidth, canvasHeight);\r\n    player.render();\r\n    background.render();\r\n    platforms.forEach(p => p.render());\r\n}\r\n\r\nconst spriteSheetImage = new Image();\r\nspriteSheetImage.src = _images_hsac_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nwindow.requestAnimFrame = function (callback, fps) {\r\n    window.setTimeout(callback, 1000 / fps);\r\n};\r\n\r\nvar canvas = document.getElementById('game-canvas'),\r\n    context = canvas.getContext('2d');\r\n\r\nvar canvasWidth = 422,\r\n    canvasHeight = 552;\r\n\r\ncanvas.width = canvasWidth;\r\ncanvas.height = canvasHeight;\r\n\r\nvar platforms = [],\r\n    player, platformCount = 10,\r\n    platformSpacing = 0,\r\n    gravity = 0.2,\r\n    gameLoop,\r\n    gameOverFlag = 0,\r\n    animationLoop, powerUpCount = 0,\r\n    playerDirection, score = 0, gameActive = true;\r\n\r\nvar Background = function () {\r\n    this.height = 5;\r\n    this.width = canvasWidth;\r\n\r\n    this.sourceX = 0;\r\n    this.sourceY = 614;\r\n    this.sourceWidth = 100;\r\n    this.sourceHeight = 5;\r\n\r\n    this.velocity = 0;\r\n\r\n    this.x = 0;\r\n    this.y = canvasHeight - this.height;\r\n\r\n    this.render = function () {\r\n        try {\r\n            context.drawImage(spriteSheetImage, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);\r\n        } catch (e) {\r\n        }\r\n    };\r\n};\r\n\r\nvar background = new Background();\r\n\r\nvar Player = function () {\r\n    this.velocityY = 11;\r\n    this.velocityX = 0;\r\n\r\n    this.moveLeft = false;\r\n    this.moveRight = false;\r\n    this.isDead = false;\r\n\r\n    this.width = 55 * 1.5;\r\n    this.height = 40 * 1.5;\r\n\r\n    this.sourceX = 0;\r\n    this.sourceY = 0;\r\n    this.sourceWidth = 110;\r\n    this.sourceHeight = 80;\r\n\r\n    this.direction = \"left\";\r\n\r\n    this.x = canvasWidth / 2 - this.width / 2;\r\n    this.y = canvasHeight;\r\n\r\n    this.render = function () {\r\n        try {\r\n            if (this.direction == \"right\") this.sourceY = 121;\r\n            else if (this.direction == \"left\") this.sourceY = 201;\r\n            else if (this.direction == \"right_land\") this.sourceY = 289;\r\n            else if (this.direction == \"left_land\") this.sourceY = 371;\r\n\r\n            context.drawImage(spriteSheetImage, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);\r\n        } catch (e) {\r\n        }\r\n    };\r\n\r\n    this.pupAudio = new Audio(_sounds_pup_mp3__WEBPACK_IMPORTED_MODULE_3__);\r\n    this.highAudio = new Audio(_sounds_high_mp3__WEBPACK_IMPORTED_MODULE_4__);\r\n\r\n    this.jump = function () {\r\n        this.velocityY = -8;\r\n        this.pupAudio.play().catch(error => console.error(\"Audio reception error:\", error));\r\n    };\r\n\r\n    this.highJump = function () {\r\n        this.velocityY = -16;\r\n        this.highAudio.play().catch(error => console.error(\"Audio reception error:\", error));\r\n    };\r\n};\r\n\r\nplayer = new Player();\r\n\r\nfunction Platform() {\r\n    this.width = 70;\r\n    this.height = 17;\r\n\r\n    this.x = Math.random() * (canvasWidth - this.width);\r\n    this.y = platformSpacing;\r\n\r\n    platformSpacing += (canvasHeight / platformCount);\r\n\r\n    this.isBroken = 0;\r\n    this.isCollected = 0;\r\n\r\n    this.sourceX = 0;\r\n    this.sourceY = 0;\r\n    this.sourceWidth = 105;\r\n    this.sourceHeight = 31;\r\n\r\n    this.render = function () {\r\n        try {\r\n            if (this.type == 1) this.sourceY = 0;\r\n            else if (this.type == 2) this.sourceY = 61;\r\n            else if (this.type == 3 && this.isBroken === 0) this.sourceY = 31;\r\n            else if (this.type == 3 && this.isBroken == 1) this.sourceY = 1000;\r\n            else if (this.type == 4 && this.isCollected === 0) this.sourceY = 90;\r\n            else if (this.type == 4 && this.isCollected == 1) this.sourceY = 1000;\r\n\r\n            context.drawImage(spriteSheetImage, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);\r\n        } catch (e) {\r\n        }\r\n    };\r\n\r\n    if (score >= 5000) this.types = [2, 3, 3, 3, 4, 4, 4, 4];\r\n    else if (score >= 2000 && score < 5000) this.types = [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];\r\n    else if (score >= 1000 && score < 2000) this.types = [2, 2, 2, 3, 3, 3, 3, 3];\r\n    else if (score >= 500 && score < 1000) this.types = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];\r\n    else if (score >= 100 && score < 500) this.types = [1, 1, 1, 1, 2, 2];\r\n    else this.types = [1];\r\n\r\n    this.type = this.types[Math.floor(Math.random() * this.types.length)];\r\n\r\n    if (this.type == 3 && powerUpCount < 1) {\r\n        powerUpCount++;\r\n    } else if (this.type == 3 && powerUpCount >= 1) {\r\n        this.type = 1;\r\n        powerUpCount = 0;\r\n    }\r\n\r\n    this.velocity = 0;\r\n    this.velocityX = 1;\r\n}\r\n\r\nfor (var i = 0; i < platformCount; i++) {\r\n    platforms.push(new Platform());\r\n}\r\n\r\nvar PowerUp = function () {\r\n    this.height = 30;\r\n    this.width = 70;\r\n\r\n    this.x = 0;\r\n    this.y = 0;\r\n\r\n    this.sourceX = 0;\r\n    this.sourceY = 554;\r\n    this.sourceWidth = 105;\r\n    this.sourceHeight = 60;\r\n\r\n    this.isActive = false;\r\n\r\n    this.render = function () {\r\n        try {\r\n            if (this.isActive === true) context.drawImage(spriteSheetImage, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);\r\n            else return;\r\n        } catch (e) {\r\n        }\r\n    };\r\n};\r\n\r\nvar powerUp = new PowerUp();\r\n\r\nvar Spring = function () {\r\n    this.x = 0;\r\n    this.y = 0;\r\n\r\n    this.width = 26;\r\n    this.height = 30;\r\n\r\n    this.sourceX = 0;\r\n    this.sourceY = 0;\r\n    this.sourceWidth = 45;\r\n    this.sourceHeight = 53;\r\n\r\n    this.isCompressed = 0;\r\n\r\n    this.render = function () {\r\n        try {\r\n            if (this.isCompressed === 0) this.sourceY = 445;\r\n            else if (this.isCompressed == 1) this.sourceY = 501;\r\n\r\n            context.drawImage(spriteSheetImage, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);\r\n        } catch (e) {\r\n        }\r\n    };\r\n};\r\n\r\nvar spring = new Spring();\r\n\r\nfunction StartGame() {\r\n    if (currentAnimationFrame) {\r\n        cancelAnimationFrame(currentAnimationFrame);\r\n    }\r\n\r\n    var direction = \"left\",\r\n        powerUpCounter = 0;\r\n\r\n    gameActive = true;\r\n    player.isDead = false;\r\n    score = 0;\r\n\r\n    const gameOverAudio = new Audio(_sounds_gameover_mp3__WEBPACK_IMPORTED_MODULE_5__);\r\n\r\n    function clearCanvas() {\r\n        context.clearRect(0, 0, canvasWidth, canvasHeight);\r\n    }\r\n\r\n    function updatePlayer() {\r\n        if (direction == \"left\") {\r\n            player.direction = \"left\";\r\n            if (player.velocityY < -7 && player.velocityY > -15) player.direction = \"left_land\";\r\n        } else if (direction == \"right\") {\r\n            player.direction = \"right\";\r\n            if (player.velocityY < -7 && player.velocityY > -15) player.direction = \"right_land\";\r\n        }\r\n\r\n        document.onkeydown = function (e) {\r\n            var keyCode = e.keyCode;\r\n\r\n            if (keyCode == 37) {\r\n                direction = \"left\";\r\n                player.moveLeft = true;\r\n            } else if (keyCode == 39) {\r\n                direction = \"right\";\r\n                player.moveRight = true;\r\n            }\r\n\r\n            if (keyCode == 32) {\r\n                e.preventDefault();\r\n                if (player.isDead === \"lol\") {\r\n                    RetryGame();\r\n                } else if (!gameActive) {\r\n                    StartGame();\r\n                    gameActive = true;\r\n                }\r\n            }\r\n        };\r\n\r\n        document.onkeyup = function (e) {\r\n            var keyCode = e.keyCode;\r\n\r\n            if (keyCode == 37) {\r\n                direction = \"left\";\r\n                player.moveLeft = false;\r\n            } else if (keyCode == 39) {\r\n                direction = \"right\";\r\n                player.moveRight = false;\r\n            }\r\n        };\r\n\r\n        if (player.moveLeft === true) {\r\n            player.x += player.velocityX;\r\n            player.velocityX -= 0.15;\r\n        } else {\r\n            player.x += player.velocityX;\r\n            if (player.velocityX < 0) player.velocityX += 0.1;\r\n        }\r\n\r\n        if (player.moveRight === true) {\r\n            player.x += player.velocityX;\r\n            player.velocityX += 0.15;\r\n        } else {\r\n            player.x += player.velocityX;\r\n            if (player.velocityX > 0) player.velocityX -= 0.1;\r\n        }\r\n\r\n        if ((player.y + player.height) > background.y && background.y < canvasHeight) player.jump();\r\n\r\n\r\n        if (background.y > canvasHeight && (player.y + player.height) > canvasHeight && player.isDead != \"lol\") {\r\n            player.isDead = true;\r\n            gameOverAudio.play().catch(error => console.error(\"Audio reception error:\", error));\r\n        }\r\n\r\n        if (player.x > canvasWidth) player.x = 0 - player.width;\r\n        else if (player.x < 0 - player.width) player.x = canvasWidth;\r\n\r\n        if (player.y >= (canvasHeight / 2) - (player.height / 2)) {\r\n            player.y += player.velocityY;\r\n            player.velocityY += gravity;\r\n        } else {\r\n            platforms.forEach(function (platform, index) {\r\n                if (player.velocityY < 0) {\r\n                    platform.y -= player.velocityY;\r\n                }\r\n\r\n                if (platform.y > canvasHeight) {\r\n                    platforms[index] = new Platform();\r\n                    platforms[index].y = platform.y - canvasHeight;\r\n                }\r\n            });\r\n\r\n            background.y -= player.velocityY;\r\n            player.velocityY += gravity;\r\n\r\n            if (player.velocityY >= 0) {\r\n                player.y += player.velocityY;\r\n                player.velocityY += gravity;\r\n            }\r\n\r\n            score++;\r\n        }\r\n\r\n        checkCollisions();\r\n\r\n        if (player.isDead === true) handleGameOver();\r\n    }\r\n\r\n    function updateSpring() {\r\n        var springObj = spring;\r\n        var firstPlatform = platforms[0];\r\n\r\n        if (firstPlatform.type == 1 || firstPlatform.type == 2) {\r\n            springObj.x = firstPlatform.x + firstPlatform.width / 2 - springObj.width / 2;\r\n            springObj.y = firstPlatform.y - firstPlatform.height - 10;\r\n\r\n            if (springObj.y > canvasHeight / 1.1) springObj.isCompressed = 0;\r\n\r\n            springObj.render();\r\n        } else {\r\n            springObj.x = 0 - springObj.width;\r\n            springObj.y = 0 - springObj.height;\r\n        }\r\n    }\r\n\r\n    function updatePlatforms() {\r\n        var powerUpObj = powerUp;\r\n\r\n        platforms.forEach(function (platform, index) {\r\n            if (platform.type == 2) {\r\n                if (platform.x < 0 || platform.x + platform.width > canvasWidth) platform.velocityX *= -1;\r\n                platform.x += platform.velocityX;\r\n            }\r\n\r\n            if (platform.isBroken == 1 && powerUpObj.isActive === false && powerUpCounter === 0) {\r\n                powerUpObj.x = platform.x;\r\n                powerUpObj.y = platform.y;\r\n                powerUpObj.isActive = true;\r\n                powerUpCounter++;\r\n            }\r\n\r\n            platform.render();\r\n        });\r\n\r\n        if (powerUpObj.isActive === true) {\r\n            powerUpObj.render();\r\n            powerUpObj.y += 8;\r\n        }\r\n\r\n        if (powerUpObj.y > canvasHeight) powerUpObj.isActive = false;\r\n    }\r\n\r\n    function checkCollisions() {\r\n        platforms.forEach(function (platform, index) {\r\n            if (player.velocityY > 0 && platform.isCollected === 0 &&\r\n                (player.x + 15 < platform.x + platform.width) &&\r\n                (player.x + player.width - 15 > platform.x) &&\r\n                (player.y + player.height > platform.y) &&\r\n                (player.y + player.height < platform.y + platform.height)) {\r\n                if (platform.type == 3 && platform.isBroken === 0) {\r\n                    platform.isBroken = 1;\r\n                    powerUpCounter = 0;\r\n                    return;\r\n                } else if (platform.type == 4 && platform.isCollected === 0) {\r\n                    player.jump();\r\n                    platform.isCollected = 1;\r\n                } else if (platform.isBroken == 1) return;\r\n                else {\r\n                    player.jump();\r\n                }\r\n            }\r\n        });\r\n        var springObj = spring;\r\n        if (player.velocityY > 0 && (springObj.isCompressed === 0) &&\r\n            (player.x + 15 < springObj.x + springObj.width) &&\r\n            (player.x + player.width - 15 > springObj.x) &&\r\n            (player.y + player.height > springObj.y) &&\r\n            (player.y + player.height < springObj.y + springObj.height)) {\r\n            springObj.isCompressed = 1;\r\n            player.highJump();\r\n        }\r\n    }\r\n\r\n    function updateScore() {\r\n        var scoreElement = document.getElementById(\"score-value\");\r\n        scoreElement.innerHTML = score;\r\n    }\r\n\r\n    function handleGameOver() {\r\n        platforms.forEach(function (platform, index) {\r\n            platform.y -= 12;\r\n        });\r\n\r\n        if (player.y > canvasHeight / 2 && gameOverFlag === 0) {\r\n            player.y -= 8;\r\n            player.velocityY = 0;\r\n        } else if (player.y < canvasHeight / 2) gameOverFlag = 1;\r\n        else if (player.y + player.height > canvasHeight) {\r\n            showGameOver();\r\n            hideControls();\r\n            player.isDead = \"lol\";\r\n\r\n            if (window.ethereum && window.ethereum.selectedAddress) {\r\n                document.getElementById('submit-score').disabled = false;\r\n            }\r\n        }\r\n    }\r\n\r\n    function gameUpdate() {\r\n        clearCanvas();\r\n        updatePlatforms();\r\n        updateSpring();\r\n        updatePlayer();\r\n        player.render();\r\n        background.render();\r\n        updateScore();\r\n    }\r\n\r\n    /*    animationLoop = function() {\r\n            return;\r\n        };\r\n        gameLoop = function() {\r\n            gameUpdate();\r\n            requestAnimFrame(gameLoop);\r\n        };\r\n\r\n        gameLoop();*/\r\n\r\n    animationLoop = function () {\r\n        if (player.isDead !== \"lol\") {\r\n            gameUpdate();\r\n            // Базовая скорость 100 FPS, увеличивается с ростом score\r\n            const baseFPS = 60;\r\n            const maxFPS = 2000; // Максимальная скорость\r\n            const multiplier = 0.01; // Коэффициент ускорения (настраивай по вкусу)\r\n            let fps = baseFPS + score * multiplier;\r\n            if (fps > maxFPS) fps = maxFPS; // Ограничение сверху\r\n            window.requestAnimFrame(animationLoop, fps);\r\n        }\r\n    };\r\n    animationLoop();\r\n\r\n    hideStartScreen();\r\n    showControls();\r\n}\r\n\r\nfunction RetryGame() {\r\n    hideGameOver();\r\n    showControls();\r\n    player.isDead = false;\r\n\r\n    gameOverFlag = 0;\r\n    platformSpacing = 0;\r\n    score = 0;\r\n\r\n    background = new Background();\r\n    player = new Player();\r\n    spring = new Spring();\r\n    powerUp = new PowerUp();\r\n\r\n    platforms = [];\r\n    for (var i = 0; i < platformCount; i++) {\r\n        platforms.push(new Platform());\r\n    }\r\n    animationLoop(\"left\", 0);\r\n}\r\n\r\nfunction hideStartScreen() {\r\n    var startScreen = document.getElementById(\"start-screen\");\r\n    startScreen.style.zIndex = -1;\r\n}\r\n\r\nfunction showGameOver() {\r\n    var gameOverScreen = document.getElementById(\"game-over-screen\");\r\n    gameOverScreen.style.zIndex = 1;\r\n    gameOverScreen.style.visibility = \"visible\";\r\n\r\n    var resultElement = document.getElementById(\"score-display\");\r\n    resultElement.innerHTML = \"Result: \" + score + \" units!\";\r\n\r\n/*    const submitButton = document.getElementById('submit-score');\r\n    submitButton.addEventListener('click', submitScoreToIrys);*/\r\n}\r\n\r\nfunction hideGameOver() {\r\n    var gameOverScreen = document.getElementById(\"game-over-screen\");\r\n    gameOverScreen.style.zIndex = -1;\r\n    gameOverScreen.style.visibility = \"hidden\";\r\n}\r\n\r\nfunction showControls() {\r\n    var controls = document.getElementById(\"score-container\");\r\n    controls.style.zIndex = 1;\r\n}\r\n\r\nfunction hideControls() {\r\n    var controls = document.getElementById(\"score-container\");\r\n    controls.style.zIndex = -1;\r\n}\r\n\r\nfunction playerJump() {\r\n    player.y += player.velocityY;\r\n    player.velocityY += gravity;\r\n\r\n    if (player.velocityY > 0 &&\r\n        (player.x + 15 < 260) &&\r\n        (player.x + player.width - 15 > 155) &&\r\n        (player.y + player.height > 435) &&\r\n        (player.y + player.height < 500))\r\n        player.jump();\r\n\r\n    if (playerDirection == \"left\") {\r\n        player.direction = \"left\";\r\n        if (player.velocityY < -7 && player.velocityY > -15) player.direction = \"left_land\";\r\n    } else if (playerDirection == \"right\") {\r\n        player.direction = \"right\";\r\n        if (player.velocityY < -7 && player.velocityY > -15) player.direction = \"right_land\";\r\n    }\r\n\r\n    document.onkeydown = function (e) {\r\n        var keyCode = e.keyCode;\r\n\r\n        if (keyCode == 37) {\r\n            playerDirection = \"left\";\r\n            player.moveLeft = true;\r\n        } else if (keyCode == 39) {\r\n            playerDirection = \"right\";\r\n            player.moveRight = true;\r\n        }\r\n\r\n        /*        if (keyCode == 32) {\r\n                    if (gameActive === true) {\r\n                        StartGame();\r\n                        gameActive = false;\r\n                    } else\r\n                        RetryGame();\r\n                }*/\r\n    };\r\n\r\n    document.onkeyup = function (e) {\r\n        var keyCode = e.keyCode;\r\n\r\n        if (keyCode == 37) {\r\n            playerDirection = \"left\";\r\n            player.moveLeft = false;\r\n        } else if (keyCode == 39) {\r\n            playerDirection = \"right\";\r\n            player.moveRight = false;\r\n        }\r\n    };\r\n\r\n    if (player.moveLeft === true) {\r\n        player.x += player.velocityX;\r\n        player.velocityX -= 0.15;\r\n    } else {\r\n        player.x += player.velocityX;\r\n        if (player.velocityX < 0) player.velocityX += 0.1;\r\n    }\r\n\r\n    if (player.moveRight === true) {\r\n        player.x += player.velocityX;\r\n        player.velocityX += 0.15;\r\n    } else {\r\n        player.x += player.velocityX;\r\n        if (player.velocityX > 0) player.velocityX -= 0.1;\r\n    }\r\n\r\n    if ((player.y + player.height) > background.y && background.y < canvasHeight) player.jump();\r\n\r\n    if (player.x > canvasWidth) player.x = 0 - player.width;\r\n    else if (player.x < 0 - player.width) player.x = canvasWidth;\r\n\r\n    player.render();\r\n}\r\n\r\n/*function updateGame() {\r\n    context.clearRect(0, 0, canvasWidth, canvasHeight);\r\n    playerJump();\r\n}\r\n\r\nanimationLoop = function () {\r\n    updateGame();\r\n    window.requestAnimFrame(animationLoop);\r\n};*/\r\n\r\n/*window.StartGame = StartGame;\r\nwindow.RetryGame = RetryGame;*/\r\n\r\n\r\n\n\n//# sourceURL=webpack://seismic-jump/./src/script.js?");

/***/ }),

/***/ "./src/sounds/gameover.mp3":
/*!*********************************!*\
  !*** ./src/sounds/gameover.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"sounds/gameover.mp3\";\n\n//# sourceURL=webpack://seismic-jump/./src/sounds/gameover.mp3?");

/***/ }),

/***/ "./src/sounds/high.mp3":
/*!*****************************!*\
  !*** ./src/sounds/high.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"sounds/high.mp3\";\n\n//# sourceURL=webpack://seismic-jump/./src/sounds/high.mp3?");

/***/ }),

/***/ "./src/sounds/pup.mp3":
/*!****************************!*\
  !*** ./src/sounds/pup.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"sounds/pup.mp3\";\n\n//# sourceURL=webpack://seismic-jump/./src/sounds/pup.mp3?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://seismic-jump/./src/style.css?");

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
/******/ 		__webpack_require__.p = "/Seismic-Jump/";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;