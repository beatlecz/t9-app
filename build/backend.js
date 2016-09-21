require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./server";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _path = __webpack_require__(2);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _serveFavicon = __webpack_require__(3);
	
	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);
	
	var _morgan = __webpack_require__(4);
	
	var _morgan2 = _interopRequireDefault(_morgan);
	
	var _cookieParser = __webpack_require__(5);
	
	var _cookieParser2 = _interopRequireDefault(_cookieParser);
	
	var _bodyParser = __webpack_require__(6);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _api = __webpack_require__(7);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _index = __webpack_require__(8);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = (0, _express2.default)();
	
	// APP SETUP
	// =============================================================================
	
	app.set('views', _path2.default.join(__dirname, 'views'));
	app.set('view engine', 'pug');
	
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use((0, _morgan2.default)('dev'));
	app.use(_bodyParser2.default.urlencoded({ extended: true }));
	app.use(_bodyParser2.default.json());
	app.use((0, _cookieParser2.default)());
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
	
	app.use('/', _index2.default);
	app.use('/api', _api2.default);
	
	// START THE SERVER
	// =============================================================================
	
	var port = process.env.PORT || 8080; // set our port
	app.listen(port);
	console.log('Listening on port ' + port);
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireDefault(_express);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var router = _express2.default.Router();
	
	router.get('/', function (req, res, next) {
	  res.json({ status: 'OK' });
	});
	
	router.get('/convert', function (req, res, next) {
	  res.json({
	    result: []
	  });
	});
	
	exports.default = router;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireDefault(_express);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var router = _express2.default.Router();
	
	/* GET home page. */
	router.get('/', function (req, res, next) {
	  res.render('index', { title: 'Express' });
	});
	
	exports.default = router;

/***/ }
/******/ ]);
//# sourceMappingURL=backend.js.map