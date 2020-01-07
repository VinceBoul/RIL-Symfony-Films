(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything


__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);
$(document).ready(function () {
  $('.seen-movie-check').click(function () {
    var $that = $(this);
    var entityId = $that.data('entity-id');
    $.ajax({
      // Génération de la route
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('see_movie'),
      type: "POST",
      dataType: "json",
      data: {
        // Passage de l'ID de l'entité en paramètre
        "entity-id": entityId
      },
      async: true,
      success: function success(data) {
        if (data.message === 'added') {
          $that.addClass('seen');
        } else {
          $that.removeClass('seen');
        }
      }
    });
  });
});

/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"movie_index_genre\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"name\",true],[\"text\",\"/movie\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"GET\"],\"schemes\":[]},\"movie_index\":{\"tokens\":[[\"text\",\"/movie/\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"GET\"],\"schemes\":[]},\"see_movie\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/seemovie\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  var n = t();
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }

    return e;
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      i = function () {
    function i(t, n) {
      e(this, i), this.context_ = t || {
        base_url: "",
        prefix: "",
        host: "",
        port: "",
        scheme: "",
        locale: ""
      }, this.setRoutes(n || {});
    }

    return o(i, [{
      key: "setRoutingData",
      value: function value(e) {
        this.setBaseUrl(e.base_url), this.setRoutes(e.routes), "prefix" in e && this.setPrefix(e.prefix), "port" in e && this.setPort(e.port), "locale" in e && this.setLocale(e.locale), this.setHost(e.host), this.setScheme(e.scheme);
      }
    }, {
      key: "setRoutes",
      value: function value(e) {
        this.routes_ = Object.freeze(e);
      }
    }, {
      key: "getRoutes",
      value: function value() {
        return this.routes_;
      }
    }, {
      key: "setBaseUrl",
      value: function value(e) {
        this.context_.base_url = e;
      }
    }, {
      key: "getBaseUrl",
      value: function value() {
        return this.context_.base_url;
      }
    }, {
      key: "setPrefix",
      value: function value(e) {
        this.context_.prefix = e;
      }
    }, {
      key: "setScheme",
      value: function value(e) {
        this.context_.scheme = e;
      }
    }, {
      key: "getScheme",
      value: function value() {
        return this.context_.scheme;
      }
    }, {
      key: "setHost",
      value: function value(e) {
        this.context_.host = e;
      }
    }, {
      key: "getHost",
      value: function value() {
        return this.context_.host;
      }
    }, {
      key: "setPort",
      value: function value(e) {
        this.context_.port = e;
      }
    }, {
      key: "getPort",
      value: function value() {
        return this.context_.port;
      }
    }, {
      key: "setLocale",
      value: function value(e) {
        this.context_.locale = e;
      }
    }, {
      key: "getLocale",
      value: function value() {
        return this.context_.locale;
      }
    }, {
      key: "buildQueryParams",
      value: function value(e, t, o) {
        var i = this,
            r = void 0,
            s = new RegExp(/\[\]$/);
        if (t instanceof Array) t.forEach(function (t, r) {
          s.test(e) ? o(e, t) : i.buildQueryParams(e + "[" + ("object" === ("undefined" == typeof t ? "undefined" : n(t)) ? r : "") + "]", t, o);
        });else if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (r in t) {
          this.buildQueryParams(e + "[" + r + "]", t[r], o);
        } else o(e, t);
      }
    }, {
      key: "getRoute",
      value: function value(e) {
        var t = this.context_.prefix + e,
            n = e + "." + this.context_.locale,
            o = this.context_.prefix + e + "." + this.context_.locale,
            i = [t, n, o, e];

        for (var r in i) {
          if (i[r] in this.routes_) return this.routes_[i[r]];
        }

        throw new Error('The route "' + e + '" does not exist.');
      }
    }, {
      key: "generate",
      value: function value(e, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.getRoute(e),
            r = n || {},
            s = t({}, r),
            u = "",
            c = !0,
            a = "",
            f = "undefined" == typeof this.getPort() || null === this.getPort() ? "" : this.getPort();

        if (i.tokens.forEach(function (t) {
          if ("text" === t[0]) return u = t[1] + u, void (c = !1);
          {
            if ("variable" !== t[0]) throw new Error('The token type "' + t[0] + '" is not supported.');
            var n = i.defaults && t[3] in i.defaults;

            if (!1 === c || !n || t[3] in r && r[t[3]] != i.defaults[t[3]]) {
              var o = void 0;
              if (t[3] in r) o = r[t[3]], delete s[t[3]];else {
                if (!n) {
                  if (c) return;
                  throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".');
                }

                o = i.defaults[t[3]];
              }
              var a = !0 === o || !1 === o || "" === o;

              if (!a || !c) {
                var f = encodeURIComponent(o).replace(/%2F/g, "/");
                "null" === f && null === o && (f = ""), u = t[1] + f + u;
              }

              c = !1;
            } else n && t[3] in s && delete s[t[3]];
          }
        }), "" === u && (u = "/"), i.hosttokens.forEach(function (e) {
          var t = void 0;
          return "text" === e[0] ? void (a = e[1] + a) : void ("variable" === e[0] && (e[3] in r ? (t = r[e[3]], delete s[e[3]]) : i.defaults && e[3] in i.defaults && (t = i.defaults[e[3]]), a = e[1] + t + a));
        }), u = this.context_.base_url + u, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme ? u = i.requirements._scheme + "://" + (a || this.getHost()) + ("" === f ? "" : ":" + f) + u : "undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0] ? u = i.schemes[0] + "://" + (a || this.getHost()) + ("" === f ? "" : ":" + f) + u : a && this.getHost() !== a + ("" === f ? "" : ":" + f) ? u = this.getScheme() + "://" + a + ("" === f ? "" : ":" + f) + u : o === !0 && (u = this.getScheme() + "://" + this.getHost() + ("" === f ? "" : ":" + f) + u), Object.keys(s).length > 0) {
          var l = void 0,
              h = [],
              y = function y(e, t) {
            t = "function" == typeof t ? t() : t, t = null === t ? "" : t, h.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };

          for (l in s) {
            this.buildQueryParams(l, s[l], y);
          }

          u = u + "?" + h.join("&").replace(/%20/g, "+");
        }

        return u;
      }
    }], [{
      key: "getInstance",
      value: function value() {
        return r;
      }
    }, {
      key: "setData",
      value: function value(e) {
        var t = i.getInstance();
        t.setRoutingData(e);
      }
    }]), i;
  }();

  i.Route, i.Context;
  var r = new i();
  return {
    Router: i,
    Routing: r
  };
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCIkdGhhdCIsImVudGl0eUlkIiwiZGF0YSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkYXRhVHlwZSIsImFzeW5jIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZSIsInQiLCJuIiwiZGVmaW5lIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImkiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJ2YWx1ZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRQb3J0Iiwic2V0TG9jYWxlIiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJmcmVlemUiLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwiZm9yRWFjaCIsInRlc3QiLCJidWlsZFF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJnZXRSb3V0ZSIsInUiLCJjIiwiYSIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZGVmYXVsdHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJnZXRIb3N0Iiwic2NoZW1lcyIsImtleXMiLCJsIiwiaCIsInkiLCJwdXNoIiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUDs7QUFDQSxJQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsb0RBQUQsQ0FBakIsQyxDQUNBO0FBQ0E7OztBQUNBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQOztBQUVBLElBQU1FLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQywwRUFBRCxDQUF0Qjs7QUFDQTtBQUVBRyxrSEFBTyxDQUFDQyxjQUFSLENBQXVCRixNQUF2QjtBQUdBRCxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFFekJMLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCTSxLQUF2QixDQUE2QixZQUFVO0FBRW5DLFFBQUlDLEtBQUssR0FBR1AsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBLFFBQUlRLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVcsV0FBWCxDQUFmO0FBRUFULEtBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0g7QUFDQUMsU0FBRyxFQUFFVCxrSEFBTyxDQUFDVSxRQUFSLENBQWlCLFdBQWpCLENBRkY7QUFHSEMsVUFBSSxFQUFFLE1BSEg7QUFJQ0MsY0FBUSxFQUFFLE1BSlg7QUFLQ0wsVUFBSSxFQUFFO0FBQ047QUFDQSxxQkFBYUQ7QUFGUCxPQUxQO0FBU0hPLFdBQUssRUFBRSxJQVRKO0FBVUhDLGFB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QUF6QixFQUE2QkUsQ0FBN0I7QUFBWDs7QUFBMkNsQixXQUFDLEdBQUNBLENBQUMsR0FBQyxHQUFGLEdBQU1pQixDQUFDLENBQUNHLElBQUYsQ0FBTyxHQUFQLEVBQVlaLE9BQVosQ0FBb0IsTUFBcEIsRUFBMkIsR0FBM0IsQ0FBUjtBQUF3Qzs7QUFBQSxlQUFPUixDQUFQO0FBQVM7QUFBM3ZELEtBQTVwRCxDQUFILEVBQTY1RyxDQUFDO0FBQUM1QixTQUFHLEVBQUMsYUFBTDtBQUFtQlUsV0FBSyxFQUFDLGlCQUFVO0FBQUMsZUFBT1MsQ0FBUDtBQUFTO0FBQTdDLEtBQUQsRUFBZ0Q7QUFBQ25CLFNBQUcsRUFBQyxTQUFMO0FBQWVVLFdBQUssRUFBQyxlQUFTOUIsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBQyxHQUFDb0IsQ0FBQyxDQUFDZ0QsV0FBRixFQUFOO0FBQXNCcEUsU0FBQyxDQUFDbEIsY0FBRixDQUFpQmlCLENBQWpCO0FBQW9CO0FBQTNFLEtBQWhELENBQTc1RyxDQUFELEVBQTZoSHFCLENBQXBpSDtBQUFzaUgsR0FBOXFILEVBQTNtQjs7QUFBNHhJQSxHQUFDLENBQUNpRCxLQUFGLEVBQVFqRCxDQUFDLENBQUNrRCxPQUFWO0FBQWtCLE1BQUloQyxDQUFDLEdBQUMsSUFBSWxCLENBQUosRUFBTjtBQUFZLFNBQU07QUFBQ21ELFVBQU0sRUFBQ25ELENBQVI7QUFBVXZDLFdBQU8sRUFBQ3lEO0FBQWxCLEdBQU47QUFBMkIsQ0FBbnBKLENBQUQsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy8gdGhpcyBcIm1vZGlmaWVzXCIgdGhlIGpxdWVyeSBtb2R1bGU6IGFkZGluZyBiZWhhdmlvciB0byBpdFxuLy8gdGhlIGJvb3RzdHJhcCBtb2R1bGUgZG9lc24ndCBleHBvcnQvcmV0dXJuIGFueXRoaW5nXG5yZXF1aXJlKCdib290c3RyYXAnKTtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG5cbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgJCgnLnNlZW4tbW92aWUtY2hlY2snKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgICAgIGxldCAkdGhhdCA9ICQodGhpcyk7XG4gICAgICAgIGxldCBlbnRpdHlJZCA9ICR0aGF0LmRhdGEoJ2VudGl0eS1pZCcpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAvLyBHw6luw6lyYXRpb24gZGUgbGEgcm91dGVcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc2VlX21vdmllJyksXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC8vIFBhc3NhZ2UgZGUgbCdJRCBkZSBsJ2VudGl0w6kgZW4gcGFyYW3DqHRyZVxuICAgICAgICAgICAgICAgIFwiZW50aXR5LWlkXCI6IGVudGl0eUlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gJ2FkZGVkJyl7XG4gICAgICAgICAgICAgICAgICAgICR0aGF0LmFkZENsYXNzKCdzZWVuJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICR0aGF0LnJlbW92ZUNsYXNzKCdzZWVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiIsIiFmdW5jdGlvbihlLHQpe3ZhciBuPXQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bi5Sb3V0aW5nOihlLlJvdXRpbmc9bi5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6bi5Sb3V0ZXJ9KX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBpKHQsbil7ZSh0aGlzLGkpLHRoaXMuY29udGV4dF89dHx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHBvcnQ6XCJcIixzY2hlbWU6XCJcIixsb2NhbGU6XCJcIn0sdGhpcy5zZXRSb3V0ZXMobnx8e30pfXJldHVybiBvKGksW3trZXk6XCJzZXRSb3V0aW5nRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksXCJwcmVmaXhcImluIGUmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSxcInBvcnRcImluIGUmJnRoaXMuc2V0UG9ydChlLnBvcnQpLFwibG9jYWxlXCJpbiBlJiZ0aGlzLnNldExvY2FsZShlLmxvY2FsZSksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJzZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wb3J0PWV9fSx7a2V5OlwiZ2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydH19LHtrZXk6XCJzZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmxvY2FsZT1lfX0se2tleTpcImdldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlfX0se2tleTpcImJ1aWxkUXVlcnlQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbihlLHQsbyl7dmFyIGk9dGhpcyxyPXZvaWQgMCxzPW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpdC5mb3JFYWNoKGZ1bmN0aW9uKHQscil7cy50ZXN0KGUpP28oZSx0KTppLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIisoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpP3I6XCJcIikrXCJdXCIsdCxvKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpKWZvcihyIGluIHQpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrcitcIl1cIix0W3JdLG8pO2Vsc2UgbyhlLHQpfX0se2tleTpcImdldFJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb250ZXh0Xy5wcmVmaXgrZSxuPWUrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsbz10aGlzLmNvbnRleHRfLnByZWZpeCtlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLGk9W3QsbixvLGVdO2Zvcih2YXIgciBpbiBpKWlmKGlbcl1pbiB0aGlzLnJvdXRlc18pcmV0dXJuIHRoaXMucm91dGVzX1tpW3JdXTt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyl9fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4pe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0saT10aGlzLmdldFJvdXRlKGUpLHI9bnx8e30scz10KHt9LHIpLHU9XCJcIixjPSEwLGE9XCJcIixmPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0aGlzLmdldFBvcnQoKXx8bnVsbD09PXRoaXMuZ2V0UG9ydCgpP1wiXCI6dGhpcy5nZXRQb3J0KCk7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIHU9dFsxXSt1LHZvaWQoYz0hMSk7e2lmKFwidmFyaWFibGVcIiE9PXRbMF0pdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicrdFswXSsnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTt2YXIgbj1pLmRlZmF1bHRzJiZ0WzNdaW4gaS5kZWZhdWx0cztpZighMT09PWN8fCFufHx0WzNdaW4gciYmclt0WzNdXSE9aS5kZWZhdWx0c1t0WzNdXSl7dmFyIG89dm9pZCAwO2lmKHRbM11pbiByKW89clt0WzNdXSxkZWxldGUgc1t0WzNdXTtlbHNle2lmKCFuKXtpZihjKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrdFszXSsnXCIuJyl9bz1pLmRlZmF1bHRzW3RbM11dfXZhciBhPSEwPT09b3x8ITE9PT1vfHxcIlwiPT09bztpZighYXx8IWMpe3ZhciBmPWVuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lMkYvZyxcIi9cIik7XCJudWxsXCI9PT1mJiZudWxsPT09byYmKGY9XCJcIiksdT10WzFdK2YrdX1jPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT11JiYodT1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGE9ZVsxXSthKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gcj8odD1yW2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksYT1lWzFdK3QrYSkpfSksdT10aGlzLmNvbnRleHRfLmJhc2VfdXJsK3UsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWU/dT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKSt1OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0/dT1pLnNjaGVtZXNbMF0rXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3U6YSYmdGhpcy5nZXRIb3N0KCkhPT1hKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpP3U9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2ErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrdTpvPT09ITAmJih1PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKSt1KSxPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGw9dm9pZCAwLGg9W10seT1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCxoLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KSl9O2ZvcihsIGluIHMpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGwsc1tsXSx5KTt1PXUrXCI/XCIraC5qb2luKFwiJlwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9cmV0dXJuIHV9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX1dKSxpfSgpO2kuUm91dGUsaS5Db250ZXh0O3ZhciByPW5ldyBpO3JldHVybntSb3V0ZXI6aSxSb3V0aW5nOnJ9fSk7Il0sInNvdXJjZVJvb3QiOiIifQ==