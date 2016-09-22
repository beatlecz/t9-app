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
	
	var _index = __webpack_require__(10);
	
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
	
	var port = ({"NODE_ENV":"debug"}).PORT || 8080; // set our port
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
	
	var _trieNode = __webpack_require__(9);
	
	var _trieNode2 = _interopRequireDefault(_trieNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var router = _express2.default.Router();
	
	
	// load dictionary
	var dic = _trieNode2.default.load('server/data/dictionary.txt');
	
	router.get('/', function (req, res, next) {
	  res.json({ status: 'OK' });
	});
	
	router.get('/words', function (req, res, next) {
	  var words = [];
	  try {
	    words = dic.getSuggestions(req.query.numbers, 5);
	  } catch (e) {}
	
	  res.json({
	    words: words
	  });
	});
	
	exports.default = router;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _path = __webpack_require__(2);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _fs = __webpack_require__(8);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var keys = {
	  'a': 2, 'b': 2, 'c': 2,
	  'd': 3, 'e': 3, 'f': 3,
	  'g': 4, 'h': 4, 'i': 4,
	  'j': 5, 'k': 5, 'l': 5,
	  'm': 6, 'n': 6, 'o': 6,
	  'p': 7, 'q': 7, 'r': 7, 's': 7,
	  't': 8, 'u': 8, 'v': 8,
	  'w': 9, 'x': 9, 'y': 9, 'z': 9
	};
	
	var TrieNode = function () {
	  function TrieNode() {
	    _classCallCheck(this, TrieNode);
	
	    this.children = {};
	    this.words = [];
	  }
	
	  _createClass(TrieNode, [{
	    key: 'insert',
	    value: function insert(word, useFrequency) {
	      // Traverse the tree to the node where the word should be inserted. If any
	      // needed nodes do not exist along the way, they are created.
	      // console.log('insrt', word, useFrequency)
	      var nodeToAddWord = traverseAddingNodes(this);
	
	      // Insert the word into the wordlist of the node returned above. Use the
	      // data provided (frequency of use in English text) to place the word in the
	      // correct position, so that we can recommend more common words first.
	      insertWordIntoListByFrequency(nodeToAddWord.words, word, useFrequency);
	
	      function traverseAddingNodes(node) {
	        var i = 0,
	            len = word.length;
	        // Traverse the tree's existing nodes as far as possible.
	        for (i, len; i < len; i++) {
	          var thisLetter = word[i];
	          var thisKey = keys[thisLetter];
	
	          if (node.children.hasOwnProperty(thisKey)) {
	            node = node.children[thisKey];
	          } else {
	            break;
	          }
	        }
	
	        // If we reach this point and we still aren't at the node we want, it means
	        // that other words matching this key pattern haven't been inserted before.
	        // Continue, this time adding the required nodes as we go.
	        for (i, len; i < len; i++) {
	          thisLetter = word[i];
	          thisKey = keys[thisLetter];
	          node.children[thisKey] = new TrieNode();
	          node = node.children[thisKey];
	        }
	
	        return node;
	      }
	
	      function insertWordIntoListByFrequency(list, word, useFrequency) {
	        var wordToInsert = [word, useFrequency]; // Store word in a tuple.
	        var wordsLength = list.length;
	
	        if (wordsLength === 0) {
	          // Handle the case where this node has no words yet
	          list.push(wordToInsert);
	        } else {
	          // Find where to insert this word among others, based on its
	          // frequency property.
	          // todo: this could be faster with binary search.
	          for (var i = 0; i < wordsLength; i++) {
	            var comparedFrequency = list[i][1];
	            var insertFrequency = wordToInsert[1];
	
	            if (insertFrequency >= comparedFrequency) {
	              // If i see a word with lower useFrequency than mine, insert before it.
	              list.splice(i, 0, wordToInsert);
	              return;
	            }
	          }
	          // if we've reached here, we've looked at the last word on this node and
	          // our word's frequency is less than it.
	          // Put my word at the end of the list.
	          list.splice(i + 1, 0, wordToInsert);
	        }
	      }
	    }
	  }, {
	    key: 'getSuggestions',
	    value: function getSuggestions(keyString, suggestionDepth) {
	      // Traverse the tree based on the key digits in keyString, to find the node
	      // where relevant words are stored.
	      var result = [];
	      var node = this;
	
	      for (var i = 0; i < keyString.length; i++) {
	        var thisKey = keyString[i];
	        // if(!node.children.hasOwnProperty(thisKey)) { break; }
	        node = node.children[thisKey];
	      }
	
	      // Add all the words to the result.
	      result = result.concat(node.words.map(function (wordTuple) {
	        return wordTuple[0];
	      }));
	
	      // If suggestionDeth is > 0, the caller is asking for recommendations of
	      // words longer than the number of keys pressed.
	      return suggestionDepth > 0 ? result.concat(getDeeperSuggestions(node, suggestionDepth)) : result;
	
	      function getDeeperSuggestions(root, maxDepth) {
	        // We traverse down every possible branch from the result node (the node
	        // corresponding to the keypad entry), saving words we see as we go and
	        // stopping when we reach the specified depth.
	
	        // deepSuggestions is an array with (maxDepth) subarrays.
	        // Each of the subarrays will be one depth level's suggestions.
	        var deepSuggestions = [];
	        while (deepSuggestions.length < maxDepth) {
	          deepSuggestions.push([]);
	        }
	
	        // The traverse function (below) fills deepSuggestions with results.
	        traverse(root, 0);
	        // Each level is sorted individually, because we want shallower results to
	        // always be suggested first. (this is an implementation detail and
	        // there's a possibility sorting everything together might give
	        // better results in practice.)
	        deepSuggestions = deepSuggestions.map(function (level) {
	          return level.sort(function (a, b) {
	            return b[1] - a[1];
	          });
	        });
	
	        // At this point, deepSuggestions is an array of arrays (one for each level
	        // of depth). Each of those subarrays contains word tuples.
	        return deepSuggestions.reduce(function (result, level) {
	          // Merge each level into a single flat array.
	          return result.concat(level.map(function (wordTuple) {
	            // Keep only the word itself, discarding the frequency number
	            return wordTuple[0];
	          }));
	        }, []);
	
	        function traverse(root, depth) {
	          // Basic tree traversal, collecting results up to the required depth.
	          if (depth <= maxDepth && depth !== 0) {
	            // Result already contains depth 0
	            var d = depth - 1;
	            deepSuggestions[d] = deepSuggestions[d].concat(root.words);
	          }
	
	          if (depth === maxDepth) {
	            return;
	          }
	
	          for (var childKey in root.children) {
	            traverse(root.children[childKey], depth + 1);
	          }
	        }
	      }
	    }
	  }]);
	
	  return TrieNode;
	}();
	
	TrieNode.load = function (path) {
	  var dic = new TrieNode();
	
	  _fs2.default.readFile(path, function (err, data) {
	    if (err) throw err;
	
	    var lines = data.toString().split("\n");
	    lines.forEach(function (word) {
	      word = word.split('\t');
	      if (word[1] !== '' && Number(word[0]) > 0) {
	        dic.insert(word[1], Number(word[0]));
	      }
	    });
	  });
	
	  return dic;
	};
	exports.default = TrieNode;

/***/ },
/* 10 */
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