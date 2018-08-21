require('source-map-support/register')
module.exports =
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("sequelize");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', 'element-ui/lib/theme-chalk/index.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~/plugins/element-ui', '~/plugins/axios'],
  modules: ['@nuxtjs/axios'],
  loader: [{
    test: /\.less$/,
    loaders: 'style-loader!css-loader!less-loader'
  }],
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios'],
    babel: {
      "plugins": [['component', {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }]]
    }
    /*
     ** Run ESLINT on save
     */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = __webpack_require__(0);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _v = __webpack_require__(16);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const router = (0, _koaRouter2.default)();

router.prefix('/api/v1');
router.get('/', (() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
        ctx.body = { "msg": "this is Api", "code": "0" };
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})());
router.use(_v2.default.routes(), _v2.default.allowedMethods());

exports.default = router;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _format = __webpack_require__(11);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class BaseController {
  constructor(services) {
    var _this = this;

    this.find = (() => {
      var _ref = _asyncToGenerator(function* (ctx) {
        const id = ctx.params.id;
        let result;

        try {
          const data = yield _this._services.find({ id });
          result = (0, _format.res)({ data });
        } catch (e) {
          result = (0, _format.err)(e);
        }

        ctx.body = result;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })();

    this.findAll = (() => {
      var _ref2 = _asyncToGenerator(function* (ctx) {
        let result;

        try {
          const data = yield _this._services.findAll(ctx.query);
          result = (0, _format.res)({ data });
        } catch (e) {
          result = (0, _format.err)(e);
        }

        ctx.body = result;
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    })();

    this.create = (() => {
      var _ref3 = _asyncToGenerator(function* (ctx) {
        const params = ctx.request.body;
        let result;

        try {
          const data = yield _this._services.create(params);
          result = (0, _format.res)({ data });
        } catch (e) {
          result = (0, _format.err)(e);
        }

        ctx.body = result;
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    })();

    this.update = (() => {
      var _ref4 = _asyncToGenerator(function* (ctx) {
        const id = ctx.params.id;
        const params = ctx.request.body;
        let result;

        try {
          const data = yield _this._services.update(id, params);
          result = (0, _format.res)({ data });
        } catch (e) {
          result = (0, _format.err)(e);
        }

        ctx.body = result;
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    })();

    this.patch = (() => {
      var _ref5 = _asyncToGenerator(function* (ctx) {
        const id = ctx.params.id;
        const params = ctx.request.body;
        let result;

        try {
          const data = yield _this._services.update(id, params);
          result = (0, _format.res)({ data });
        } catch (e) {
          result = (0, _format.err)(e);
        }

        ctx.body = result;
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    })();

    this.remove = (() => {
      var _ref6 = _asyncToGenerator(function* (ctx) {
        const id = ctx.params.id;
        let result;

        try {
          const data = yield _this._services.remove(id);
          result = (0, _format.res)({ data });
        } catch (e) {
          result = (0, _format.err)(e);
        }

        ctx.body = result;
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    })();

    this.getList = (() => {
      var _ref7 = _asyncToGenerator(function* (ctx) {
        let result;

        try {
          const data = yield _this._services.getList(ctx);
          result = (0, _format.res)({ data });
        } catch (e) {
          result = (0, _format.err)(e);
        }

        ctx.body = result;
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    })();

    this._services = new services();
  }

  /* 分页 */
}

exports.default = BaseController;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _service = __webpack_require__(19);

var _baseController = __webpack_require__(6);

var _baseController2 = _interopRequireDefault(_baseController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller extends _baseController2.default {
  constructor() {
    super(_service.Home);
  }
}

exports.default = new Controller();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = undefined;

var _home = __webpack_require__(7);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.home = _home2.default;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const database = 'koa';
const user = 'koa';
const pass = '123456';

const options = {
    host: '47.95.205.217',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    operatorsAliases: false
};

exports.database = database;
exports.user = user;
exports.pass = pass;
exports.options = options;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSchema = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sequelize = __webpack_require__(1);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sequelize = new _sequelize2.default(_config.database, _config.user, _config.pass, _config.options);

// 公共字段
const baseFields = {
  createdAt: {
    type: _sequelize2.default.DATE,
    field: 'create_time'
  },
  updatedAt: {
    type: _sequelize2.default.DATE,
    field: 'update_time'
  }
};

const createSchema = (table, fields, options = {}) => {
  return sequelize.define(table, _extends({}, baseFields, fields), options);
};

// test connection
sequelize.authenticate().then(() => {
  console.log('Sequelize: Connection has been established successfully.');
}).catch(err => {
  console.error('Sequelize: Unable to connect to the database:', err);
});

exports.createSchema = createSchema;
exports.default = sequelize;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.err = exports.res = undefined;

var _sequelize = __webpack_require__(1);

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * return object 定义返回格式
 * errno
 * errmsg
 * data
 */
const errmsg = {
    1030: {
        errno: 1030, errmsg: false, message: '系统开小差了!'
    }
};

const res = data => {
    let info = {
        "errno": 0,
        "errmsg": "success"
    };
    if (data && !data.data.code) {
        info.data = data.data;
    } else {
        info = errmsg[data.data.code];
    }
    return info;
};

const err = error => {
    if (error instanceof _sequelize2.default.ValidationError) {
        return { errno: 1003, errmsg: error.errors[0].message };
    } else {
        return { errno: 1004, errmsg: error.message };
    }
};

exports.res = res;
exports.err = err;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class BaseModel {
  constructor(schema) {
    var _this = this;

    this._getSort = _asyncToGenerator(function* () {
      const sort = yield _this._schema.max('sort');
      return isNaN(sort) ? 0 : sort + 1;
    });

    this.find = (() => {
      var _ref2 = _asyncToGenerator(function* (id) {
        return _this._schema.find(id);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    })();

    this.findAll = (() => {
      var _ref3 = _asyncToGenerator(function* (where) {
        console.log(where);
        return _this._schema.findAll({ where, order: [['sort', 'DESC']] });
      });

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    })();

    this.create = (() => {
      var _ref4 = _asyncToGenerator(function* (data) {
        const sort = yield _this._getSort();
        return _this._schema.create(_extends({}, data, { sort }));
      });

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    })();

    this.update = (() => {
      var _ref5 = _asyncToGenerator(function* (id, data) {
        return _this._schema.update(data, { where: { id } });
      });

      return function (_x4, _x5) {
        return _ref5.apply(this, arguments);
      };
    })();

    this.remove = (() => {
      var _ref6 = _asyncToGenerator(function* (id) {
        return _this._schema.destroy({ where: { id } });
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    })();

    this.getList = (() => {
      var _ref7 = _asyncToGenerator(function* (ctx) {
        let index = Math.floor(ctx.query.index) || 1;
        let rows = Math.floor(ctx.query.rows) || 10;

        let data = yield _this._schema.findAndCountAll({
          order: [['sort', 'DESC']],
          limit: rows,
          offset: (index - 1) * rows
        });

        data.limit = rows;
        data.offset = index;

        return data;
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    })();

    this._schema = schema;
  }

  /**
   * 查详情
   * @param {Number} id 
   * @return {Object} 单个Model
   */


  /**
   * 查列表
   * @param {Object} data
   * @return {Array} Model列表
   */


  /**
   * 创建
   * @param {Object} data 
   * @return {Object} 创建成功的对象
   */


  /**
   * 更新
   * @param {Number} id 
   * @param {Object} data
   * @return {Object} 更新后的对象
   */


  /**
   * 删除
   * @param {Number} id
   * @return {Number} 1|0
   */


  /**
   * 分页 getList
   * @param 
   * @return 
   */
}

exports.default = BaseModel;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = __webpack_require__(1);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = __webpack_require__(10);

var _baseModel = __webpack_require__(12);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = (0, _db.createSchema)('home', {
  title: _sequelize2.default.STRING,
  desc: _sequelize2.default.STRING,
  logoUrl: {
    type: _sequelize2.default.STRING,
    field: 'logo_url'
  },
  linkUrl: {
    type: _sequelize2.default.STRING,
    field: 'link_url'
  },
  status: _sequelize2.default.INTEGER,
  sort: _sequelize2.default.INTEGER
});

class Model extends _baseModel2.default {
  constructor() {
    super(schema);
  }
}

exports.default = Model;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _home = __webpack_require__(13);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _home2.default;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = __webpack_require__(0);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _controller = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _koaRouter2.default)();

router.get('/getList', _controller.home.getList).get('/:id', _controller.home.find).get('/', _controller.home.findAll).post('/', _controller.home.create).put('/:id', _controller.home.update).patch('/:id', _controller.home.patch).delete('/:id', _controller.home.remove);

exports.default = router;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = __webpack_require__(0);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _home = __webpack_require__(15);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _koaRouter2.default)();

router.use('/home', _home2.default.routes());

exports.default = router;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class BaseServices {

    constructor(Model) {
        var _this = this;

        this.find = (() => {
            var _ref = _asyncToGenerator(function* (id) {
                const data = yield _this._model.find(id);
                return data;
            });

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        })();

        this.findAll = (() => {
            var _ref2 = _asyncToGenerator(function* (ctx) {
                const data = yield _this._model.findAll(ctx.query);
                return data;
            });

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        })();

        this.create = (() => {
            var _ref3 = _asyncToGenerator(function* (params) {
                const data = yield _this._model.create(params);
                return data;
            });

            return function (_x3) {
                return _ref3.apply(this, arguments);
            };
        })();

        this.update = (() => {
            var _ref4 = _asyncToGenerator(function* (id, params) {
                const data = yield _this._model.update(id, params);
                return data;
            });

            return function (_x4, _x5) {
                return _ref4.apply(this, arguments);
            };
        })();

        this.patch = (() => {
            var _ref5 = _asyncToGenerator(function* (id, params) {
                const data = yield _this._model.update(id, params);
                return data;
            });

            return function (_x6, _x7) {
                return _ref5.apply(this, arguments);
            };
        })();

        this.remove = (() => {
            var _ref6 = _asyncToGenerator(function* (id) {
                const data = yield _this._model.remove(id);
                return data;
            });

            return function (_x8) {
                return _ref6.apply(this, arguments);
            };
        })();

        this.getList = (() => {
            var _ref7 = _asyncToGenerator(function* (ctx) {
                const data = yield _this._model.getList(ctx);
                return data;
            });

            return function (_x9) {
                return _ref7.apply(this, arguments);
            };
        })();

        this._model = new Model();
    }

    /* 分页 */
}

exports.default = BaseServices;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = __webpack_require__(14);

var _baseServices = __webpack_require__(17);

var _baseServices2 = _interopRequireDefault(_baseServices);

var _request = __webpack_require__(20);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const curl = function (fn) {
  return new Promise(function (resolve, reject) {
    fn(resolve, reject);
  });
};

class Services extends _baseServices2.default {

  constructor() {
    super(_model.Home);

    this.getBanner = (() => {
      var _ref = _asyncToGenerator(function* (id) {
        let data = yield curl(function (resolve, reject) {
          (0, _request2.default)('http://m.ehaier.com/sg/cms/indexTop.json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
              resolve(JSON.parse(body));
            } else {
              reject(error);
            }
          });
        });
        let topBannerList = data.data.topBannerList;
        return topBannerList;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })();
  }

}

exports.default = Services;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _home = __webpack_require__(18);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _home2.default;

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("request");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


let start = (() => {
  var _ref = _asyncToGenerator(function* () {
    const app = new _koa2.default();
    const host = process.env.HOST || '127.0.0.1';
    const port = process.env.PORT || 3000;

    // Import and Set Nuxt.js options
    const config = __webpack_require__(2);
    config.dev = !(app.env === 'production');

    // Instantiate nuxt.js
    const nuxt = new _nuxt.Nuxt(config);

    // Build in development
    if (config.dev) {
      const builder = new _nuxt.Builder(nuxt);
      yield builder.build();
    }

    app.use(_index2.default.routes(), _index2.default.allowedMethods()).use(function (ctx) {
      ctx.status = 200;
      ctx.respond = false; // Mark request as handled for Koa
      ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res);
    });

    app.listen(port, host);
    console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
  });

  return function start() {
    return _ref.apply(this, arguments);
  };
})();

var _koa = __webpack_require__(4);

var _koa2 = _interopRequireDefault(_koa);

var _nuxt = __webpack_require__(5);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map