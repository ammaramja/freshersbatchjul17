/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _constants = __webpack_require__(1);

	var _scope = __webpack_require__(2);

	var _order = __webpack_require__(3);

	var _arrow = __webpack_require__(4);

	var _extended = __webpack_require__(5);

	var _temp_literal = __webpack_require__(6);

	var _destruct = __webpack_require__(7);

	var _classes_and_modules = __webpack_require__(8);

	var _symbols = __webpack_require__(9);

	var _arm = __webpack_require__(10);

	var _generator_arm = __webpack_require__(11);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-polyfill\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	document.write("HEllo!");

	//constants();

	//scope();

	//order();

	//arrow();

	//extended();

	//temp_literal();

	//destruct();

	//classes_and_modules();

	//symbols();

	//arm();

	(0, _generator_arm.generator_arm)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.constants = constants;
	function constants() {
	    var test_const = "Ammar";
	    //test_const = "a";
	    console.log(test_const);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.scope = scope;
	function scope() {
	    if (1 < 2) {
	        var a = "hello";
	        console.log(a);
	    }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.order = order;
	function order() {
	    var order_obj = { id: "1",
	        title: "GoT",
	        price: 1000,
	        printOrder: function printOrder() {
	            console.log(this.id);
	            console.log(this.title);
	            console.log(this.price);
	        },
	        getPrice: function getPrice() {
	            console.log(this.price);
	        }
	    };

	    order_obj.printOrder();
	    order_obj.getPrice();

	    var new_order_obj = {};
	    Object.assign(new_order_obj, order_obj);

	    console.log("order_obj", order_obj);

	    console.log("new_order_obj", new_order_obj);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.arrow = arrow;
	function arrow() {
	    var output_obj = {

	        string_array: ["a", "x", "z"],
	        o_array: [],
	        length_arr: function length_arr() {
	            var _this = this;

	            this.string_array.forEach(function (f) {
	                _this.o_array.push({ name: f, length: f.length });
	            });
	        },
	        print_array: function print_array() {
	            console.log(this.o_array);
	        }
	    };

	    output_obj.length_arr();
	    output_obj.print_array();
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.extended = extended;
	function extended() {
	    var addition = {
	        add: function add() {
	            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
	            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

	            return a + b;
	        },
	        userFriends: function userFriends(username) {
	            var _console;

	            for (var _len = arguments.length, users = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                users[_key - 1] = arguments[_key];
	            }

	            (_console = console).log.apply(_console, [username].concat(users));
	        },
	        printCapitalNames: function printCapitalNames() {
	            for (var _len2 = arguments.length, friends = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                friends[_key2] = arguments[_key2];
	            }

	            friends.forEach(function (f) {
	                console.log(f.toUpperCase());
	            });
	        }
	    };

	    console.log(addition.add(2));
	    addition.userFriends("Ammar", ["z", "a", "b"]);

	    addition.printCapitalNames.apply(addition, ["ammar", "basit", "bd", "bb", "ask"]);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.temp_literal = temp_literal;
	function temp_literal() {
	    var l_model = "Acer";
	    var name = "Ammar";
	    var desk_num = 53;
	    var a = "Hello sysnet!. I, " + name + " am having problem with my laptop " + l_model + ".";

	    console.log(a);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.destruct = destruct;
	function destruct() {
	    var arr = ["a", "b", "z", "x"];

	    var a = arr[2];

	    console.log(a);

	    var organ = {
	        name: "Amjawala Inc!",
	        address: {
	            state: "Maharashtra",
	            city: "Pune",
	            pin_code: 411048
	        }
	    };

	    var pin_code = organ.address.pin_code;

	    console.log(pin_code);
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.classes_and_modules = classes_and_modules;

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function classes_and_modules() {
	   var Account = function () {
	      function Account(acc_id, acc_name, balance) {
	         _classCallCheck(this, Account);

	         this.acc_id = acc_id;
	         this.acc_name = acc_name;
	         this.balance = balance;
	      }

	      _createClass(Account, [{
	         key: "getTotal",
	         value: function getTotal() {
	            return this.balance;
	         }
	      }]);

	      return Account;
	   }();

	   var Savings = function (_Account) {
	      _inherits(Savings, _Account);

	      function Savings(acc_id, acc_name, balance, int) {
	         _classCallCheck(this, Savings);

	         var _this = _possibleConstructorReturn(this, (Savings.__proto__ || Object.getPrototypeOf(Savings)).call(this, acc_id, acc_name, balance));

	         _this.int = int;
	         return _this;
	      }

	      _createClass(Savings, [{
	         key: "getTotal",
	         value: function getTotal() {
	            return _get(Savings.prototype.__proto__ || Object.getPrototypeOf(Savings.prototype), "getTotal", this).call(this) + this.int;
	         }
	      }]);

	      return Savings;
	   }(Account);

	   var Current = function (_Account2) {
	      _inherits(Current, _Account2);

	      function Current(acc_id, acc_name, balance, cash_credit) {
	         _classCallCheck(this, Current);

	         var _this2 = _possibleConstructorReturn(this, (Current.__proto__ || Object.getPrototypeOf(Current)).call(this, acc_id, acc_name, balance));

	         _this2.cash_credit = cash_credit;
	         return _this2;
	      }

	      _createClass(Current, [{
	         key: "getTotal",
	         value: function getTotal() {
	            return _get(Current.prototype.__proto__ || Object.getPrototypeOf(Current.prototype), "getTotal", this).call(this) + this.cash_credit;
	         }
	      }]);

	      return Current;
	   }(Account);

	   var savings1 = new Savings(1, "Ammar", 10000, 0);
	   var savings2 = new Savings(2, "ASK", 100, 0);
	   var savings3 = new Savings(3, "Azoo", 1000, 0);
	   var savings4 = new Savings(4, "basit", 400, 0);

	   var current1 = new Current(10, "AmmarAmja", 10000000, 100);
	   var current2 = new Current(12, "ASKAmja", 100, 4500);
	   var current3 = new Current(13, "ArwaAmja", 100000000, 140);
	   var current4 = new Current(14, "basit", 1000, 10000);
	   var acc_array = [];

	   acc_array.push(savings1);
	   acc_array.push(savings2);
	   acc_array.push(savings3);
	   acc_array.push(savings4);
	   acc_array.push(current1);
	   acc_array.push(current2);
	   acc_array.push(current3);
	   acc_array.push(current4);

	   function getTotalCashinBank() {
	      var bigTotal = 0;
	      acc_array.forEach(function (f) {
	         bigTotal += f.getTotal();
	      });
	      console.log(bigTotal);
	   }

	   getTotalCashinBank();
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.symbols = symbols;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function symbols() {
	    var prev = Symbol();
	    var curr = Symbol();

	    var fib = function () {
	        function fib() {
	            _classCallCheck(this, fib);

	            prev = 0;
	            curr = 1;
	        }

	        _createClass(fib, [{
	            key: Symbol.iterator,
	            value: function value() {
	                return {
	                    next: function next() {
	                        var _ref = [curr + prev, curr];
	                        curr = _ref[0];
	                        prev = _ref[1];

	                        return { done: false, value: curr };
	                    }
	                };
	            }
	        }]);

	        return fib;
	    }();

	    var obj = new fib();
	    var fib_itr = obj[Symbol.iterator]();
	    console.log(fib_itr.next());
	    console.log(fib_itr.next());
	    console.log(fib_itr.next());
	    console.log(fib_itr.next());
	    console.log(fib_itr.next());
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.arm = arm;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function arm() {
	    num = Symbol();

	    var armstrong = function () {
	        function armstrong(num) {
	            _classCallCheck(this, armstrong);

	            this.num = num;
	        }

	        _createClass(armstrong, [{
	            key: Symbol.iterator,
	            value: function value() {
	                return {
	                    next: function next() {
	                        var d_num = this.num.to;
	                    }
	                };
	            }
	        }]);

	        return armstrong;
	    }();
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.generator_arm = generator_arm;
	function generator_arm() {
	    var _marked = [armstrong].map(regeneratorRuntime.mark);

	    function armstrong() {
	        return regeneratorRuntime.wrap(function armstrong$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (false) {
	                            _context.next = 5;
	                            break;
	                        }

	                        _context.next = 3;
	                        return "ok";

	                    case 3:
	                        _context.next = 0;
	                        break;

	                    case 5:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _marked[0], this);
	    }

	    number = 1;
	    //let arm_obj = armstrong();

	    //console.log(arm_obj.next());
	    //console.log(arm_obj.next(number));
	}

/***/ }
/******/ ]);