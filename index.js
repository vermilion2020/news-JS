/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".news__item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 1rem auto;\r\n  margin-bottom: 1.6%;\r\n  background: #fff;\r\n  color: #333;\r\n  line-height: 1.4;\r\n  font-family: Arial, sans-serif;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n  transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n  position: relative;\r\n  height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-size: cover;\r\n  background-position: center;\r\n  transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n  margin: auto;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: -120%;\r\n  margin: auto;\r\n  transition: left 0.2s;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n  padding: 1rem;\r\n  background: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n  line-height: 1;\r\n  margin: 0;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  color: #a2a2a2;\r\n  margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n  text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n  color: #5ad67d;\r\n  display: inline-block;\r\n  position: relative;\r\n  text-decoration: none;\r\n  font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n  content: '→';\r\n  margin-left: -10px;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n  transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n  margin-left: 5px;\r\n  opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n  margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n  margin-top: 1.25rem;\r\n  position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n  content: '';\r\n  position: absolute;\r\n  height: 5px;\r\n  background: #5ad67d;\r\n  width: 35px;\r\n  top: -0.75rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n  left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .news__item {\r\n    flex-direction: row;\r\n    max-width: 700px;\r\n  }\r\n\r\n  .news__item .news__meta {\r\n    flex-basis: 40%;\r\n    height: auto;\r\n  }\r\n\r\n  .news__item .news__description {\r\n    flex-basis: 60%;\r\n  }\r\n\r\n  .news__item .news__description:before {\r\n    -webkit-transform: skewX(-3deg);\r\n    transform: skewX(-3deg);\r\n    content: '';\r\n    background: #fff;\r\n    width: 30px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n  }\r\n\r\n  .news__item.alt {\r\n    flex-direction: row-reverse;\r\n  }\r\n\r\n  .news__item.alt .news__description:before {\r\n    left: inherit;\r\n    right: -10px;\r\n    -webkit-transform: skew(3deg);\r\n    transform: skew(3deg);\r\n  }\r\n\r\n  .news__item.alt .news__meta-details {\r\n    padding-left: 25px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/view/news/news.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,sBAAsB;EACtB,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;;EAEE,YAAY;EACZ,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,8BAA8B;EAC9B,WAAW;EACX,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE;IACE,mBAAmB;IACnB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,+BAA+B;IAC/B,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,SAAS;IACT,WAAW;EACb;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":[".news__item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 1rem auto;\r\n  margin-bottom: 1.6%;\r\n  background: #fff;\r\n  color: #333;\r\n  line-height: 1.4;\r\n  font-family: Arial, sans-serif;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n  transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n  position: relative;\r\n  height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-size: cover;\r\n  background-position: center;\r\n  transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n  margin: auto;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: -120%;\r\n  margin: auto;\r\n  transition: left 0.2s;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n  padding: 1rem;\r\n  background: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n  line-height: 1;\r\n  margin: 0;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  color: #a2a2a2;\r\n  margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n  text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n  color: #5ad67d;\r\n  display: inline-block;\r\n  position: relative;\r\n  text-decoration: none;\r\n  font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n  content: '→';\r\n  margin-left: -10px;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n  transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n  margin-left: 5px;\r\n  opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n  margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n  margin-top: 1.25rem;\r\n  position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n  content: '';\r\n  position: absolute;\r\n  height: 5px;\r\n  background: #5ad67d;\r\n  width: 35px;\r\n  top: -0.75rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n  left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .news__item {\r\n    flex-direction: row;\r\n    max-width: 700px;\r\n  }\r\n\r\n  .news__item .news__meta {\r\n    flex-basis: 40%;\r\n    height: auto;\r\n  }\r\n\r\n  .news__item .news__description {\r\n    flex-basis: 60%;\r\n  }\r\n\r\n  .news__item .news__description:before {\r\n    -webkit-transform: skewX(-3deg);\r\n    transform: skewX(-3deg);\r\n    content: '';\r\n    background: #fff;\r\n    width: 30px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n  }\r\n\r\n  .news__item.alt {\r\n    flex-direction: row-reverse;\r\n  }\r\n\r\n  .news__item.alt .news__description:before {\r\n    left: inherit;\r\n    right: -10px;\r\n    -webkit-transform: skew(3deg);\r\n    transform: skew(3deg);\r\n  }\r\n\r\n  .news__item.alt .news__meta-details {\r\n    padding-left: 25px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_triangle_icon_active_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/triangle-icon-active.svg */ "./src/assets/icons/triangle-icon-active.svg");
/* harmony import */ var _assets_icons_triangle_icon_disabled_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/triangle-icon-disabled.svg */ "./src/assets/icons/triangle-icon-disabled.svg");
/* harmony import */ var _assets_icons_triangle_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/triangle-icon.svg */ "./src/assets/icons/triangle-icon.svg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_icons_triangle_icon_active_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_icons_triangle_icon_disabled_svg__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_icons_triangle_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sources {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n  height: 120px;\r\n  align-items: center;\r\n  font: 300 1em 'Fira Sans', sans-serif;\r\n  justify-content: space-around;\r\n}\r\n\r\n.source__item {\r\n  background: none;\r\n  border: 2px solid #30c5ff;\r\n  font: inherit;\r\n  line-height: 1;\r\n  margin: 0.5em;\r\n  padding: 1em 2em;\r\n  color: #70d6ff;\r\n  transition: 0.25s;\r\n  cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus,\r\n.sources__arrow:hover,\r\n.sources__arrow:focus {\r\n  border-color: #3fcc59;\r\n  color: #69db7e;\r\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n  transform: translateY(-0.25em);\r\n}\r\n\r\n.sources__arrow.disabled {\r\n  border-color: #777;\r\n  color: #777;\r\n  box-shadow: 0 0 0 0;\r\n  transform: none;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.sources__arrow:hover span,\r\n.sources__arrow:focus span {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.sources__arrow.disabled span {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.source__item-name {\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n}\r\n\r\n.sources-container {\r\n  width: 1200px;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.sources-buttons-container {\r\n  width: 1120px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sources__arrow span {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  align-self: center;\r\n}\r\n\r\n.left-arrow span {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.sources__arrow {\r\n  height: 48px;\r\n  width: 25px;\r\n  border: 2px solid #30c5ff;\r\n  align-self: center;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/view/sources/sources.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;;;EAIE,qBAAqB;EACrB,cAAc;EACd,wCAAwC;EACxC,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,mDAAiE;AACnE;;AAEA;EACE,mDAAmE;AACrE;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,mDAA0D;EAC1D,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB","sourcesContent":[".sources {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n  height: 120px;\r\n  align-items: center;\r\n  font: 300 1em 'Fira Sans', sans-serif;\r\n  justify-content: space-around;\r\n}\r\n\r\n.source__item {\r\n  background: none;\r\n  border: 2px solid #30c5ff;\r\n  font: inherit;\r\n  line-height: 1;\r\n  margin: 0.5em;\r\n  padding: 1em 2em;\r\n  color: #70d6ff;\r\n  transition: 0.25s;\r\n  cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus,\r\n.sources__arrow:hover,\r\n.sources__arrow:focus {\r\n  border-color: #3fcc59;\r\n  color: #69db7e;\r\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n  transform: translateY(-0.25em);\r\n}\r\n\r\n.sources__arrow.disabled {\r\n  border-color: #777;\r\n  color: #777;\r\n  box-shadow: 0 0 0 0;\r\n  transform: none;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.sources__arrow:hover span,\r\n.sources__arrow:focus span {\r\n  background: url('../../../assets/icons/triangle-icon-active.svg');\r\n}\r\n\r\n.sources__arrow.disabled span {\r\n  background: url('../../../assets/icons/triangle-icon-disabled.svg');\r\n}\r\n\r\n.source__item-name {\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n}\r\n\r\n.sources-container {\r\n  width: 1200px;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.sources-buttons-container {\r\n  width: 1120px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sources__arrow span {\r\n  background: url('../../../assets/icons/triangle-icon.svg');\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  align-self: center;\r\n}\r\n\r\n.left-arrow span {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.sources__arrow {\r\n  height: 48px;\r\n  width: 25px;\r\n  border: 2px solid #30c5ff;\r\n  align-self: center;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_rs_school_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/rs-school.svg */ "./src/assets/icons/rs-school.svg");
/* harmony import */ var _assets_icons_rs_school_active_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/rs-school-active.svg */ "./src/assets/icons/rs-school-active.svg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_icons_rs_school_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_icons_rs_school_active_svg__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  color: #fff;\r\n  background: #17181c;\r\n  font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n  padding: 10px 30px;\r\n  width: 1200px;\r\n  margin: auto;\r\n}\r\n\r\nheader h1 {\r\n  font-size: 40px;\r\n  font-weight: 800;\r\n}\r\n\r\n.empty-message {\r\n  font-size: 14px;\r\n  color: #30c5ff;\r\n  line-height: 1.4;\r\n  font-family: Arial, sans-serif;\r\n  max-width: 700px;\r\n  text-align: center;\r\n  margin: 1rem auto;\r\n}\r\n\r\nfooter {\r\n  height: 100px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nfooter .copyright {\r\n  font-size: 14px;\r\n  color: #333;\r\n  text-align: center;\r\n}\r\n\r\nfooter .copyright a {\r\n  color: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\n  color: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\n  content: '©';\r\n}\r\n\r\n.rsschool {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  width: 83px;\r\n  height: 30px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.rsschool:hover,\r\n.rsschool:focus {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n  transform: translateY(-0.25em);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,8BAA8B;EAC9B,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mDAA+C;EAC/C,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,mDAAsD;EACtD,sBAAsB;EACtB,wCAAwC;EACxC,8BAA8B;AAChC","sourcesContent":["body {\r\n  color: #fff;\r\n  background: #17181c;\r\n  font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n  padding: 10px 30px;\r\n  width: 1200px;\r\n  margin: auto;\r\n}\r\n\r\nheader h1 {\r\n  font-size: 40px;\r\n  font-weight: 800;\r\n}\r\n\r\n.empty-message {\r\n  font-size: 14px;\r\n  color: #30c5ff;\r\n  line-height: 1.4;\r\n  font-family: Arial, sans-serif;\r\n  max-width: 700px;\r\n  text-align: center;\r\n  margin: 1rem auto;\r\n}\r\n\r\nfooter {\r\n  height: 100px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nfooter .copyright {\r\n  font-size: 14px;\r\n  color: #333;\r\n  text-align: center;\r\n}\r\n\r\nfooter .copyright a {\r\n  color: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\n  color: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\n  content: '©';\r\n}\r\n\r\n.rsschool {\r\n  background: url('./assets/icons/rs-school.svg');\r\n  background-size: cover;\r\n  width: 83px;\r\n  height: 30px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.rsschool:hover,\r\n.rsschool:focus {\r\n  background: url('./assets/icons/rs-school-active.svg');\r\n  background-size: cover;\r\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n  transform: translateY(-0.25em);\r\n}\r\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/assets/icons/rs-school-active.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/rs-school-active.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9b487a881b0c0c5540f13906c92515fb.svg");

/***/ }),

/***/ "./src/assets/icons/rs-school.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/rs-school.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5c2232e6563bfc34aa17acf061775e8c.svg");

/***/ }),

/***/ "./src/assets/icons/triangle-icon-active.svg":
/*!***************************************************!*\
  !*** ./src/assets/icons/triangle-icon-active.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "458736586e734d0e8388ecde8b4e30e2.svg");

/***/ }),

/***/ "./src/assets/icons/triangle-icon-disabled.svg":
/*!*****************************************************!*\
  !*** ./src/assets/icons/triangle-icon-disabled.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0a571a28ebd426a08002eadb12680c0e.svg");

/***/ }),

/***/ "./src/assets/icons/triangle-icon.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/triangle-icon.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1adca499f6d1758ad8c35d6806124387.svg");

/***/ }),

/***/ "./src/components/view/news/news.css":
/*!*******************************************!*\
  !*** ./src/components/view/news/news.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./news.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/sources/sources.css":
/*!*************************************************!*\
  !*** ./src/components/view/sources/sources.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sources.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const controller_1 = __importDefault(__webpack_require__(/*! ../controller/controller */ "./src/components/controller/controller.ts"));
const appView_1 = __webpack_require__(/*! ../view/appView */ "./src/components/view/appView.ts");
class App {
    constructor() {
        this.controller = new controller_1.default();
        this.view = new appView_1.AppView();
    }
    start() {
        const sources = document.querySelector('.sources');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
        leftArrow.addEventListener('click', () => {
            this.controller.getSources((data) => this.view.changeSourcesPage(data, -1));
        });
        rightArrow.addEventListener('click', () => {
            this.controller.getSources((data) => this.view.changeSourcesPage(data, 1));
        });
    }
}
exports["default"] = App;


/***/ }),

/***/ "./src/components/controller/appLoader.ts":
/*!************************************************!*\
  !*** ./src/components/controller/appLoader.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const loader_1 = __importDefault(__webpack_require__(/*! ./loader */ "./src/components/controller/loader.ts"));
class AppLoader extends loader_1.default {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e791737bb7a2401bb0b6f2a4281797c0',
        });
    }
}
exports["default"] = AppLoader;


/***/ }),

/***/ "./src/components/controller/controller.ts":
/*!*************************************************!*\
  !*** ./src/components/controller/controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const appLoader_1 = __importDefault(__webpack_require__(/*! ./appLoader */ "./src/components/controller/appLoader.ts"));
class AppController extends appLoader_1.default {
    getSources(callback) {
        super.getResp({
            endpoint: 'sources',
        }, callback);
    }
    getNews(e, callback) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp({
                        endpoint: 'everything',
                        options: {
                            sources: sourceId,
                        },
                    }, callback);
                }
                return;
            }
            target = target.parentNode;
        }
    }
}
exports["default"] = AppController;


/***/ }),

/***/ "./src/components/controller/loader.ts":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const model_1 = __webpack_require__(/*! ../model */ "./src/components/model/index.ts");
class Loader {
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }
    getResp({ endpoint, options = {} }, callback = () => {
        console.error('No callback for GET response');
    }) {
        this.load('GET', endpoint, callback, options);
    }
    errorHandler(res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!res.ok) {
                if (res.status === model_1.ErrorCodes.Unauthorized || res.status === model_1.ErrorCodes.NotFound)
                    console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
                throw Error(res.statusText);
            }
            return res;
        });
    }
    makeUrl(options, endpoint) {
        const urlOptions = Object.assign(Object.assign({}, this.options), options);
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }
    load(method, endpoint, callback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then((res) => this.errorHandler(res))
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}
exports["default"] = Loader;


/***/ }),

/***/ "./src/components/model/articles.ts":
/*!******************************************!*\
  !*** ./src/components/model/articles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/components/model/error-codes.ts":
/*!*********************************************!*\
  !*** ./src/components/model/error-codes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorCodes = void 0;
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["Unauthorized"] = 401] = "Unauthorized";
    ErrorCodes[ErrorCodes["NotFound"] = 404] = "NotFound";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));


/***/ }),

/***/ "./src/components/model/index.ts":
/*!***************************************!*\
  !*** ./src/components/model/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./articles */ "./src/components/model/articles.ts"), exports);
__exportStar(__webpack_require__(/*! ./error-codes */ "./src/components/model/error-codes.ts"), exports);
__exportStar(__webpack_require__(/*! ./options */ "./src/components/model/options.ts"), exports);
__exportStar(__webpack_require__(/*! ./source */ "./src/components/model/source.ts"), exports);


/***/ }),

/***/ "./src/components/model/options.ts":
/*!*****************************************!*\
  !*** ./src/components/model/options.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/components/model/source.ts":
/*!****************************************!*\
  !*** ./src/components/model/source.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/components/view/appView.ts":
/*!****************************************!*\
  !*** ./src/components/view/appView.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppView = void 0;
const news_1 = __importDefault(__webpack_require__(/*! ./news/news */ "./src/components/view/news/news.ts"));
const sources_1 = __importDefault(__webpack_require__(/*! ./sources/sources */ "./src/components/view/sources/sources.ts"));
class AppView {
    constructor() {
        this.sourcesCurrentPage = 0;
        this.sourcesButtonsCount = 5;
        this.news = new news_1.default();
        this.sources = new sources_1.default();
    }
    drawNews(data) {
        if (data.articles.length) {
            this.news.draw(data.articles);
        }
        else {
            this.news.showMessage('There are no news of selected source!');
        }
    }
    drawSources(data) {
        if (data.sources.length) {
            const startItem = this.sourcesCurrentPage * this.sourcesButtonsCount;
            const EndItem = startItem + this.sourcesButtonsCount;
            startItem + this.sourcesButtonsCount;
            console.log(startItem);
            console.log(EndItem);
            data.sources =
                EndItem > data.sources.length - 1 ? data.sources.slice(startItem) : data.sources.slice(startItem, EndItem);
            this.sources.draw(data.sources);
        }
        else {
            this.news.showMessage('There are no available sources!');
        }
    }
    changeSourcesPage(data, pageChange) {
        this.sourcesCurrentPage += pageChange;
        const itemsCount = data.sources.length - 1;
        const maxPage = Math.ceil(itemsCount / this.sourcesButtonsCount);
        if (this.sourcesCurrentPage > 0) {
            document.querySelector('.left-arrow').classList.remove('disabled');
        }
        else {
            document.querySelector('.left-arrow').classList.add('disabled');
        }
        if (this.sourcesCurrentPage < maxPage) {
            document.querySelector('.right-arrow').classList.remove('disabled');
        }
        else {
            document.querySelector('.right-arrow').classList.add('disabled');
        }
        if (this.sourcesCurrentPage > maxPage) {
            this.sourcesCurrentPage = maxPage;
            return;
        }
        else if (this.sourcesCurrentPage < 0) {
            this.sourcesCurrentPage = 0;
            return;
        }
        this.drawSources(data);
    }
}
exports.AppView = AppView;
exports["default"] = AppView;


/***/ }),

/***/ "./src/components/view/news/news.ts":
/*!******************************************!*\
  !*** ./src/components/view/news/news.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./news.css */ "./src/components/view/news/news.css");
class News {
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (idx % 2) {
                newsClone.querySelector('.news__item').classList.add('alt');
            }
            newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    }
    showMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('empty-message');
        messageElement.textContent = message;
        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(messageElement);
    }
}
exports["default"] = News;


/***/ }),

/***/ "./src/components/view/sources/sources.ts":
/*!************************************************!*\
  !*** ./src/components/view/sources/sources.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./sources.css */ "./src/components/view/sources/sources.css");
class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        document.querySelector('.sources').innerHTML = '';
        document.querySelector('.sources').append(fragment);
    }
    showMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('empty-message');
        messageElement.textContent = message;
        document.querySelector('.sources').innerHTML = '';
        document.querySelector('.sources').appendChild(messageElement);
    }
}
exports["default"] = Sources;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __importDefault(__webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts"));
__webpack_require__(/*! ./global.css */ "./src/global.css");
__webpack_require__(/*! ./assets/icons/triangle-icon.svg */ "./src/assets/icons/triangle-icon.svg");
__webpack_require__(/*! ./assets/icons/triangle-icon-active.svg */ "./src/assets/icons/triangle-icon-active.svg");
__webpack_require__(/*! ./assets/icons/triangle-icon-disabled.svg */ "./src/assets/icons/triangle-icon-disabled.svg");
__webpack_require__(/*! ./assets/icons/rs-school.svg */ "./src/assets/icons/rs-school.svg");
__webpack_require__(/*! ./assets/icons/rs-school-active.svg */ "./src/assets/icons/rs-school-active.svg");
const app = new app_1.default();
app.start();


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDeEJGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMseURBQXNCO0FBQzVELG1CQUFPLENBQUMsc0NBQWM7QUFDdEIsbUJBQU8sQ0FBQyw4RUFBa0M7QUFDMUMsbUJBQU8sQ0FBQyw0RkFBeUM7QUFDakQsbUJBQU8sQ0FBQyxnR0FBMkM7QUFDbkQsbUJBQU8sQ0FBQyxzRUFBOEI7QUFDdEMsbUJBQU8sQ0FBQyxvRkFBcUM7QUFDN0M7QUFDQTs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MuY3NzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc291cmNlcy9zb3VyY2VzLmNzcyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL05ld3NKUy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL05ld3NKUy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2Fzc2V0cy9pY29ucy9ycy1zY2hvb2wtYWN0aXZlLnN2ZyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvYXNzZXRzL2ljb25zL3JzLXNjaG9vbC5zdmciLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2Fzc2V0cy9pY29ucy90cmlhbmdsZS1pY29uLWFjdGl2ZS5zdmciLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2Fzc2V0cy9pY29ucy90cmlhbmdsZS1pY29uLWRpc2FibGVkLnN2ZyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvYXNzZXRzL2ljb25zL3RyaWFuZ2xlLWljb24uc3ZnIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvbmV3cy9uZXdzLmNzcz9lMjA2Iiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc291cmNlcy9zb3VyY2VzLmNzcz81MmIxIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9nbG9iYWwuY3NzP2QzYmMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9hcHBMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvbG9hZGVyLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL21vZGVsL2FydGljbGVzLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL21vZGVsL2Vycm9yLWNvZGVzLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL21vZGVsL2luZGV4LnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL21vZGVsL29wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvc291cmNlLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvYXBwVmlldy50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9OZXdzSlMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9OZXdzSlMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9OZXdzSlMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmV3c19faXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS42JTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbTpob3ZlciAubmV3c19fbWV0YS1waG90byB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1waG90byB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLWRldGFpbHMsXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyB1bCB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAtMTIwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHRyYW5zaXRpb246IGxlZnQgMC4ycztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMiB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gaDMge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI2EyYTJhMjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGEge1xcclxcbiAgY29sb3I6ICM1YWQ2N2Q7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICfihpInO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcywgb3BhY2l0eSAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmhvdmVyOmFmdGVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSBwIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNWFkNjdkO1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICB0b3A6IC0wLjc1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbTpob3ZlciAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gIGxlZnQ6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gIC5uZXdzX19pdGVtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXdzX19pdGVtIC5uZXdzX19tZXRhIHtcXHJcXG4gICAgZmxleC1iYXNpczogNDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24ge1xcclxcbiAgICBmbGV4LWJhc2lzOiA2MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb246YmVmb3JlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAtMTBweDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld3NfX2l0ZW0uYWx0IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld3NfX2l0ZW0uYWx0IC5uZXdzX19kZXNjcmlwdGlvbjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiBpbmhlcml0O1xcclxcbiAgICByaWdodDogLTEwcHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDNkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3c19faXRlbS5hbHQgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXdzX19pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjYlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtOmhvdmVyIC5uZXdzX19tZXRhLXBob3RvIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoM2RlZyk7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLXBob3RvIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyxcXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHVsIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IC0xMjAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjJzO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgyIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMyB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjYTJhMmEyO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYSB7XFxyXFxuICBjb2xvcjogIzVhZDY3ZDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGE6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJ+KGkic7XFxyXFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjNzLCBvcGFjaXR5IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGE6aG92ZXI6YWZ0ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHAge1xcclxcbiAgbWFyZ2luOiAxcmVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gcDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICM1YWQ2N2Q7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIHRvcDogLTAuNzVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtOmhvdmVyIC5uZXdzX19tZXRhLWRldGFpbHMge1xcclxcbiAgbGVmdDogMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcclxcbiAgLm5ld3NfX2l0ZW0ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEge1xcclxcbiAgICBmbGV4LWJhc2lzOiA0MCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDYwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbjpiZWZvcmUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IC0xMHB4O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3c19faXRlbS5hbHQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3c19faXRlbS5hbHQgLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IGluaGVyaXQ7XFxyXFxuICAgIHJpZ2h0OiAtMTBweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2tldygzZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXdzX19pdGVtLmFsdCAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvdHJpYW5nbGUtaWNvbi1hY3RpdmUuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pY29ucy90cmlhbmdsZS1pY29uLWRpc2FibGVkLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvdHJpYW5nbGUtaWNvbi5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zb3VyY2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250OiAzMDAgMWVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW0ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMGM1ZmY7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBtYXJnaW46IDAuNWVtO1xcclxcbiAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG4gIGNvbG9yOiAjNzBkNmZmO1xcclxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW06aG92ZXIsXFxyXFxuLnNvdXJjZV9faXRlbTpmb2N1cyxcXHJcXG4uc291cmNlc19fYXJyb3c6aG92ZXIsXFxyXFxuLnNvdXJjZXNfX2Fycm93OmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzNmY2M1OTtcXHJcXG4gIGNvbG9yOiAjNjlkYjdlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwLjVlbSAwLjVlbSAtMC40ZW0gIzNmY2M1OTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZXNfX2Fycm93LmRpc2FibGVkIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzc3NztcXHJcXG4gIGNvbG9yOiAjNzc3O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcXHJcXG4gIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VzX19hcnJvdzpob3ZlciBzcGFuLFxcclxcbi5zb3VyY2VzX19hcnJvdzpmb2N1cyBzcGFuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VzX19hcnJvdy5kaXNhYmxlZCBzcGFuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW0tbmFtZSB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZXMtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZXMtYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDExMjBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VzX19hcnJvdyBzcGFuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtYXJyb3cgc3BhbiB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlc19fYXJyb3cge1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzBjNWZmO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHdDQUF3QztFQUN4Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLG1EQUFpRTtBQUNuRTs7QUFFQTtFQUNFLG1EQUFtRTtBQUNyRTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1EQUEwRDtFQUMxRCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zb3VyY2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250OiAzMDAgMWVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW0ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMGM1ZmY7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBtYXJnaW46IDAuNWVtO1xcclxcbiAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG4gIGNvbG9yOiAjNzBkNmZmO1xcclxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW06aG92ZXIsXFxyXFxuLnNvdXJjZV9faXRlbTpmb2N1cyxcXHJcXG4uc291cmNlc19fYXJyb3c6aG92ZXIsXFxyXFxuLnNvdXJjZXNfX2Fycm93OmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzNmY2M1OTtcXHJcXG4gIGNvbG9yOiAjNjlkYjdlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwLjVlbSAwLjVlbSAtMC40ZW0gIzNmY2M1OTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZXNfX2Fycm93LmRpc2FibGVkIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzc3NztcXHJcXG4gIGNvbG9yOiAjNzc3O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcXHJcXG4gIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VzX19hcnJvdzpob3ZlciBzcGFuLFxcclxcbi5zb3VyY2VzX19hcnJvdzpmb2N1cyBzcGFuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3RyaWFuZ2xlLWljb24tYWN0aXZlLnN2ZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlc19fYXJyb3cuZGlzYWJsZWQgc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy90cmlhbmdsZS1pY29uLWRpc2FibGVkLnN2ZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlX19pdGVtLW5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VzLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VzLWJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMTIwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlc19fYXJyb3cgc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy90cmlhbmdsZS1pY29uLnN2ZycpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWFycm93IHNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZXNfX2Fycm93IHtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzMwYzVmZjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvaWNvbnMvcnMtc2Nob29sLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9ycy1zY2hvb2wtYWN0aXZlLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzE3MTgxYztcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbiAgd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eS1tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjMzBjNWZmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQgYSB7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICfCqSc7XFxyXFxufVxcclxcblxcclxcbi5yc3NjaG9vbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHdpZHRoOiA4M3B4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yc3NjaG9vbDpob3ZlcixcXHJcXG4ucnNzY2hvb2w6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjM2ZjYzU5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtREFBK0M7RUFDL0Msc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLG1EQUFzRDtFQUN0RCxzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzE3MTgxYztcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbiAgd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eS1tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjMzBjNWZmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQgYSB7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICfCqSc7XFxyXFxufVxcclxcblxcclxcbi5yc3NjaG9vbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ljb25zL3JzLXNjaG9vbC5zdmcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB3aWR0aDogODNweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnNzY2hvb2w6aG92ZXIsXFxyXFxuLnJzc2Nob29sOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvaWNvbnMvcnMtc2Nob29sLWFjdGl2ZS5zdmcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjM2ZjYzU5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWI0ODdhODgxYjBjMGM1NTQwZjEzOTA2YzkyNTE1ZmIuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVjMjIzMmU2NTYzYmZjMzRhYTE3YWNmMDYxNzc1ZThjLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NTg3MzY1ODZlNzM0ZDBlODM4OGVjZGU4YjRlMzBlMi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGE1NzFhMjhlYmQ0MjZhMDgwMDJlYWRiMTI2ODBjMGUuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFhZGNhNDk5ZjZkMTc1OGFkOGMzNWQ2ODA2MTI0Mzg3LnN2Z1wiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmV3cy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NvdXJjZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb250cm9sbGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbnRyb2xsZXIvY29udHJvbGxlclwiKSk7XHJcbmNvbnN0IGFwcFZpZXdfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2FwcFZpZXdcIik7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgY29udHJvbGxlcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgYXBwVmlld18xLkFwcFZpZXcoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWFycm93Jyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1hcnJvdycpO1xyXG4gICAgICAgIHNvdXJjZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5jb250cm9sbGVyLmdldE5ld3MoZSwgKGRhdGEpID0+IHRoaXMudmlldy5kcmF3TmV3cyhkYXRhKSkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRTb3VyY2VzKChkYXRhKSA9PiB0aGlzLnZpZXcuZHJhd1NvdXJjZXMoZGF0YSkpO1xyXG4gICAgICAgIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFNvdXJjZXMoKGRhdGEpID0+IHRoaXMudmlldy5jaGFuZ2VTb3VyY2VzUGFnZShkYXRhLCAtMSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRTb3VyY2VzKChkYXRhKSA9PiB0aGlzLnZpZXcuY2hhbmdlU291cmNlc1BhZ2UoZGF0YSwgMSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbG9hZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbG9hZGVyXCIpKTtcclxuY2xhc3MgQXBwTG9hZGVyIGV4dGVuZHMgbG9hZGVyXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi8nLCB7XHJcbiAgICAgICAgICAgIGFwaUtleTogJ2U3OTE3MzdiYjdhMjQwMWJiMGI2ZjJhNDI4MTc5N2MwJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBcHBMb2FkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFwcExvYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FwcExvYWRlclwiKSk7XHJcbmNsYXNzIEFwcENvbnRyb2xsZXIgZXh0ZW5kcyBhcHBMb2FkZXJfMS5kZWZhdWx0IHtcclxuICAgIGdldFNvdXJjZXMoY2FsbGJhY2spIHtcclxuICAgICAgICBzdXBlci5nZXRSZXNwKHtcclxuICAgICAgICAgICAgZW5kcG9pbnQ6ICdzb3VyY2VzJyxcclxuICAgICAgICB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBnZXROZXdzKGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG5ld3NDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gbmV3c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc291cmNlX19pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UtaWQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdzQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnKSAhPT0gc291cmNlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnLCBzb3VyY2VJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZ2V0UmVzcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnZXZlcnl0aGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6IHNvdXJjZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtb2RlbF8xID0gcmVxdWlyZShcIi4uL21vZGVsXCIpO1xyXG5jbGFzcyBMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoYmFzZUxpbmssIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmJhc2VMaW5rID0gYmFzZUxpbms7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIH1cclxuICAgIGdldFJlc3AoeyBlbmRwb2ludCwgb3B0aW9ucyA9IHt9IH0sIGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNhbGxiYWNrIGZvciBHRVQgcmVzcG9uc2UnKTtcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLmxvYWQoJ0dFVCcsIGVuZHBvaW50LCBjYWxsYmFjaywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlcnJvckhhbmRsZXIocmVzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSBtb2RlbF8xLkVycm9yQ29kZXMuVW5hdXRob3JpemVkIHx8IHJlcy5zdGF0dXMgPT09IG1vZGVsXzEuRXJyb3JDb2Rlcy5Ob3RGb3VuZClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ycnksIGJ1dCB0aGVyZSBpcyAke3Jlcy5zdGF0dXN9IGVycm9yOiAke3Jlcy5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBtYWtlVXJsKG9wdGlvbnMsIGVuZHBvaW50KSB7XHJcbiAgICAgICAgY29uc3QgdXJsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZUxpbmt9JHtlbmRwb2ludH0/YDtcclxuICAgICAgICBPYmplY3Qua2V5cyh1cmxPcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgdXJsICs9IGAke2tleX09JHt1cmxPcHRpb25zW2tleV19JmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHVybC5zbGljZSgwLCAtMSk7XHJcbiAgICB9XHJcbiAgICBsb2FkKG1ldGhvZCwgZW5kcG9pbnQsIGNhbGxiYWNrLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBmZXRjaCh0aGlzLm1ha2VVcmwob3B0aW9ucywgZW5kcG9pbnQpLCB7IG1ldGhvZCB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB0aGlzLmVycm9ySGFuZGxlcihyZXMpKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gY2FsbGJhY2soZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5FcnJvckNvZGVzID0gdm9pZCAwO1xyXG52YXIgRXJyb3JDb2RlcztcclxuKGZ1bmN0aW9uIChFcnJvckNvZGVzKSB7XHJcbiAgICBFcnJvckNvZGVzW0Vycm9yQ29kZXNbXCJVbmF1dGhvcml6ZWRcIl0gPSA0MDFdID0gXCJVbmF1dGhvcml6ZWRcIjtcclxuICAgIEVycm9yQ29kZXNbRXJyb3JDb2Rlc1tcIk5vdEZvdW5kXCJdID0gNDA0XSA9IFwiTm90Rm91bmRcIjtcclxufSkoRXJyb3JDb2RlcyA9IGV4cG9ydHMuRXJyb3JDb2RlcyB8fCAoZXhwb3J0cy5FcnJvckNvZGVzID0ge30pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FydGljbGVzXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2Vycm9yLWNvZGVzXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL29wdGlvbnNcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc291cmNlXCIpLCBleHBvcnRzKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BcHBWaWV3ID0gdm9pZCAwO1xyXG5jb25zdCBuZXdzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbmV3cy9uZXdzXCIpKTtcclxuY29uc3Qgc291cmNlc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NvdXJjZXMvc291cmNlc1wiKSk7XHJcbmNsYXNzIEFwcFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzQ3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc291cmNlc0J1dHRvbnNDb3VudCA9IDU7XHJcbiAgICAgICAgdGhpcy5uZXdzID0gbmV3IG5ld3NfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gbmV3IHNvdXJjZXNfMS5kZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3TmV3cyhkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuYXJ0aWNsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3cy5kcmF3KGRhdGEuYXJ0aWNsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdzLnNob3dNZXNzYWdlKCdUaGVyZSBhcmUgbm8gbmV3cyBvZiBzZWxlY3RlZCBzb3VyY2UhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd1NvdXJjZXMoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLnNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SXRlbSA9IHRoaXMuc291cmNlc0N1cnJlbnRQYWdlICogdGhpcy5zb3VyY2VzQnV0dG9uc0NvdW50O1xyXG4gICAgICAgICAgICBjb25zdCBFbmRJdGVtID0gc3RhcnRJdGVtICsgdGhpcy5zb3VyY2VzQnV0dG9uc0NvdW50O1xyXG4gICAgICAgICAgICBzdGFydEl0ZW0gKyB0aGlzLnNvdXJjZXNCdXR0b25zQ291bnQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0SXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEVuZEl0ZW0pO1xyXG4gICAgICAgICAgICBkYXRhLnNvdXJjZXMgPVxyXG4gICAgICAgICAgICAgICAgRW5kSXRlbSA+IGRhdGEuc291cmNlcy5sZW5ndGggLSAxID8gZGF0YS5zb3VyY2VzLnNsaWNlKHN0YXJ0SXRlbSkgOiBkYXRhLnNvdXJjZXMuc2xpY2Uoc3RhcnRJdGVtLCBFbmRJdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VzLmRyYXcoZGF0YS5zb3VyY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3cy5zaG93TWVzc2FnZSgnVGhlcmUgYXJlIG5vIGF2YWlsYWJsZSBzb3VyY2VzIScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVNvdXJjZXNQYWdlKGRhdGEsIHBhZ2VDaGFuZ2UpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZXNDdXJyZW50UGFnZSArPSBwYWdlQ2hhbmdlO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zQ291bnQgPSBkYXRhLnNvdXJjZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBjb25zdCBtYXhQYWdlID0gTWF0aC5jZWlsKGl0ZW1zQ291bnQgLyB0aGlzLnNvdXJjZXNCdXR0b25zQ291bnQpO1xyXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZXNDdXJyZW50UGFnZSA+IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtYXJyb3cnKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtYXJyb3cnKS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zb3VyY2VzQ3VycmVudFBhZ2UgPCBtYXhQYWdlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1hcnJvdycpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYXJyb3cnKS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zb3VyY2VzQ3VycmVudFBhZ2UgPiBtYXhQYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlc0N1cnJlbnRQYWdlID0gbWF4UGFnZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNvdXJjZXNDdXJyZW50UGFnZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VzQ3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhd1NvdXJjZXMoZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcHBWaWV3ID0gQXBwVmlldztcclxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwVmlldztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vbmV3cy5jc3NcIik7XHJcbmNsYXNzIE5ld3Mge1xyXG4gICAgZHJhdyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbmV3cyA9IGRhdGEubGVuZ3RoID49IDEwID8gZGF0YS5maWx0ZXIoKF9pdGVtLCBpZHgpID0+IGlkeCA8IDEwKSA6IGRhdGE7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgbmV3c0l0ZW1UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3NJdGVtVGVtcCcpO1xyXG4gICAgICAgIG5ld3MuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3NDbG9uZSA9IG5ld3NJdGVtVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGlkeCAlIDIpIHtcclxuICAgICAgICAgICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19faXRlbScpLmNsYXNzTGlzdC5hZGQoJ2FsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbWV0YS1waG90bycpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpdGVtLnVybFRvSW1hZ2UgfHwgJ2ltZy9uZXdzX3BsYWNlaG9sZGVyLmpwZyd9KWA7XHJcbiAgICAgICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbWV0YS1hdXRob3InKS50ZXh0Q29udGVudCA9IGl0ZW0uYXV0aG9yIHx8IGl0ZW0uc291cmNlLm5hbWU7XHJcbiAgICAgICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbWV0YS1kYXRlJykudGV4dENvbnRlbnQgPSBpdGVtLnB1Ymxpc2hlZEF0XHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTApXHJcbiAgICAgICAgICAgICAgICAuc3BsaXQoJy0nKVxyXG4gICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJy0nKTtcclxuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19kZXNjcmlwdGlvbi10aXRsZScpLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcclxuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19kZXNjcmlwdGlvbi1zb3VyY2UnKS50ZXh0Q29udGVudCA9IGl0ZW0uc291cmNlLm5hbWU7XHJcbiAgICAgICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tY29udGVudCcpLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19yZWFkLW1vcmUgYScpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGl0ZW0udXJsKTtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKG5ld3NDbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MnKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cycpLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICAgIH1cclxuICAgIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lc3NhZ2UnKTtcclxuICAgICAgICBtZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MnKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cycpLmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBOZXdzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9zb3VyY2VzLmNzc1wiKTtcclxuY2xhc3MgU291cmNlcyB7XHJcbiAgICBkcmF3KGRhdGEpIHtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCBzb3VyY2VJdGVtVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VyY2VJdGVtVGVtcCcpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VDbG9uZSA9IHNvdXJjZUl0ZW1UZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc291cmNlX19pdGVtLW5hbWUnKS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgICAgc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNvdXJjZV9faXRlbScpLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UtaWQnLCBpdGVtLmlkKTtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKHNvdXJjZUNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2VzJykuYXBwZW5kKGZyYWdtZW50KTtcclxuICAgIH1cclxuICAgIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5LW1lc3NhZ2UnKTtcclxuICAgICAgICBtZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZXMnKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpLmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTb3VyY2VzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL2FwcC9hcHBcIikpO1xyXG5yZXF1aXJlKFwiLi9nbG9iYWwuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9hc3NldHMvaWNvbnMvdHJpYW5nbGUtaWNvbi5zdmdcIik7XHJcbnJlcXVpcmUoXCIuL2Fzc2V0cy9pY29ucy90cmlhbmdsZS1pY29uLWFjdGl2ZS5zdmdcIik7XHJcbnJlcXVpcmUoXCIuL2Fzc2V0cy9pY29ucy90cmlhbmdsZS1pY29uLWRpc2FibGVkLnN2Z1wiKTtcclxucmVxdWlyZShcIi4vYXNzZXRzL2ljb25zL3JzLXNjaG9vbC5zdmdcIik7XHJcbnJlcXVpcmUoXCIuL2Fzc2V0cy9pY29ucy9ycy1zY2hvb2wtYWN0aXZlLnN2Z1wiKTtcclxuY29uc3QgYXBwID0gbmV3IGFwcF8xLmRlZmF1bHQoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=