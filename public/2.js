(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/views/Enviar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/views/Enviar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'enviar',
  props: {
    accepted: {
      "default": undefined
    },
    "default": {
      "default": undefined
    }
  },
  data: function data() {
    return {
      file: undefined,
      arquivos: [],
      success: false,
      error: false
    };
  },
  computed: {
    orderarquivos: function orderarquivos() {
      return _.orderBy(this.arquivos, 'created_at', ['desc']);
    }
  },
  methods: {
    loadfile: function loadfile(event) {
      var input = event.target;

      if (input.files && input.files[0]) {
        this.file = input.files[0];
      }
    },
    send: function send() {
      var _this = this;

      var data = new FormData();
      data.append('onfile', this.file);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/store', data, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(function () {
        _this.success = true;

        _this.load();
      })["catch"](function (e) {
        console.log(e);
        _this.error = true;
      });
    },
    deletar: function deletar(arquivo) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/api/delete/' + arquivo.arquivo.id);
      this.load();
    },
    load: function () {
      var _load = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/index').then(function (res) {
                  _this2.arquivos = res.data;
                })["catch"](function (e) {
                  console.log(e);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  },
  mounted: function mounted() {
    this.load();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/views/Enviar.vue?vue&type=template&id=72dea417&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/views/Enviar.vue?vue&type=template&id=72dea417& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "justify-content-center align-content-center d-flex" },
      [
        _c("div", { staticClass: "card mt-4 w-50" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("\n                Envio de arquivo\n            ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.send($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [
                    _vm._v("Clique no botão abaixo para selecionar o arquivo")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control-file",
                    attrs: { type: "file", id: "onfile", accept: _vm.accepted },
                    on: { change: _vm.loadfile }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-dark", attrs: { type: "submit" } },
                  [_vm._v("Enviar")]
                )
              ]
            ),
            _vm._v(" "),
            _vm.success
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-success mt-3",
                    attrs: { role: "alert" }
                  },
                  [
                    _vm._v(
                      "\n                   Arquivo enviado com sucesso!\n                    "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: {
                          type: "button",
                          "data-dismiss": "alert",
                          "aria-label": "Fechar"
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            on: {
                              click: function($event) {
                                _vm.success = false
                              }
                            }
                          },
                          [_vm._v("×")]
                        )
                      ]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.error
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-danger mt-3",
                    attrs: { role: "alert" }
                  },
                  [
                    _vm._v(
                      "\n                    Erro ao enviar o arquivo!\n                    "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: {
                          type: "button",
                          "data-dismiss": "alert",
                          "aria-label": "fechar"
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            on: {
                              click: function($event) {
                                _vm.error = false
                              }
                            }
                          },
                          [_vm._v("×")]
                        )
                      ]
                    )
                  ]
                )
              : _vm._e()
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "justify-content-center d-flex mt-5" }, [
      _c("table", { staticClass: "table w-50 table-hover" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.orderarquivos, function(arquivo) {
            return _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [
                _vm._v(_vm._s(arquivo.id))
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(arquivo.name))]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(_vm._f("formatDate")(arquivo.created_at)))
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function($event) {
                        return _vm.deletar({ arquivo: arquivo })
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-trash-alt" }),
                    _vm._v(" Deletar")
                  ]
                )
              ])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-dark" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nome do Arquivo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Data de envio")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ações")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/views/Enviar.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/views/Enviar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Enviar_vue_vue_type_template_id_72dea417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enviar.vue?vue&type=template&id=72dea417& */ "./resources/js/pages/views/Enviar.vue?vue&type=template&id=72dea417&");
/* harmony import */ var _Enviar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enviar.vue?vue&type=script&lang=js& */ "./resources/js/pages/views/Enviar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Enviar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Enviar_vue_vue_type_template_id_72dea417___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Enviar_vue_vue_type_template_id_72dea417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/views/Enviar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/views/Enviar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/views/Enviar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Enviar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Enviar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/views/Enviar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Enviar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/views/Enviar.vue?vue&type=template&id=72dea417&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/views/Enviar.vue?vue&type=template&id=72dea417& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Enviar_vue_vue_type_template_id_72dea417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Enviar.vue?vue&type=template&id=72dea417& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/views/Enviar.vue?vue&type=template&id=72dea417&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Enviar_vue_vue_type_template_id_72dea417___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Enviar_vue_vue_type_template_id_72dea417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);