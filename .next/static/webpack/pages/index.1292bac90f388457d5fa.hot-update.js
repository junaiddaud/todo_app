"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\junai\\Documents\\todo-app-main\\to-do-app\\pages\\index.js",
    _s = $RefreshSig$();








function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      toDo = _useState[0],
      setToDo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      fetch_todo = _useState2[0],
      setFetch = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      comp_todo = _useState3[0],
      setcomp_todo = _useState3[1];

  var firstUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(true);

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      active = _useState4[0],
      setactive = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      loading = _useState5[0],
      setLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      all = _useState6[0],
      setAll = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      act = _useState7[0],
      setAct = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      comp = _useState8[0],
      setComp = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      count = _useState9[0],
      setCount = _useState9[1];

  var fetchToDo = /*#__PURE__*/function () {
    var _ref = (0,C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, data;
      return C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(false);
              _context.next = 3;
              return fetch('/api/todolist');

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              setLoading(true);
              setFetch(data);
              call_complte(data);
              setCount(data.length);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchToDo() {
      return _ref.apply(this, arguments);
    };
  }();

  var active_todo = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var response, data, dataa;
      return C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(false);
              _context2.next = 3;
              return fetch('/api/todolist');

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              data = _context2.sent;
              dataa = data.filter(function (todo) {
                return todo.active === true;
              });
              setLoading(true);
              setFetch(dataa);
              setCount(dataa.length);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function active_todo() {
      return _ref2.apply(this, arguments);
    };
  }();

  var complete_todo = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var response, data, dataa;
      return C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setLoading(false);
              _context3.next = 3;
              return fetch('/api/todolist');

            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return response.json();

            case 6:
              data = _context3.sent;
              dataa = data.filter(function (todo) {
                console.log("comp");
                return todo.active === false;
              });
              setLoading(true);
              setFetch(dataa);
              call_complte(dataa);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function complete_todo() {
      return _ref3.apply(this, arguments);
    };
  }();

  var call_complte = function call_complte(data) {
    data.map(function (todo) {
      if (todo.active == false) {
        setcomp_todo(todo.id);
      }
    });
  };

  var submitToDo = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
      var response;
      return C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(toDo === '')) {
                _context4.next = 4;
                break;
              }

              alert("Enter to do list");
              _context4.next = 8;
              break;

            case 4:
              _context4.next = 6;
              return fetch('/api/todolist', {
                method: 'POST',
                body: JSON.stringify({
                  toDo: toDo
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 6:
              response = _context4.sent;
              fetchToDo();

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function submitToDo() {
      return _ref4.apply(this, arguments);
    };
  }();

  var removeToDo = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(todoid) {
      var response;
      return C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return fetch('/api/todolist', {
                method: 'DELETE',
                body: JSON.stringify({
                  todoid: todoid
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 2:
              response = _context5.sent;
              fetchToDo();

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function removeToDo(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var clear_comp = /*#__PURE__*/function () {
    var _ref6 = (0,C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {
      var response, data;
      return C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setLoading(false);
              _context6.next = 3;
              return fetch('/api/todolist');

            case 3:
              response = _context6.sent;
              _context6.next = 6;
              return response.json();

            case 6:
              data = _context6.sent;
              data.map(function (todo) {
                if (todo.active === false) {
                  removeToDo(todo.id);
                }
              });
              setLoading(true);
              fetchToDo();

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function clear_comp() {
      return _ref6.apply(this, arguments);
    };
  }();

  var setcomplete = /*#__PURE__*/function () {
    var _ref7 = (0,C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7(todoid) {
      var response;
      return C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return fetch('/api/todolist', {
                method: 'PUT',
                body: JSON.stringify({
                  todoid: todoid
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 2:
              response = _context7.sent;
              setCount(count - 1);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function setcomplete(_x2) {
      return _ref7.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee8() {
    var d;
    return C_Users_junai_Documents_todo_app_main_to_do_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!firstUpdate.current) {
              _context8.next = 3;
              break;
            }

            firstUpdate.current = false;
            return _context8.abrupt("return");

          case 3:
            d = document.getElementById(comp_todo);
            d.classList.toggle((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tick));
            console.log(d);
            console.log("d");
            d.nextSibling.classList.toggle((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().la));

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })), [comp_todo, active]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var al = document.getElementById("all");
    var acti = document.getElementById("active");
    var compl = document.getElementById("comp");

    if (all === true) {
      al.style.color = 'hsl(220, 98%, 61%)';
      acti.style.color = 'hsl(233, 11%, 84%)';
      compl.style.color = 'hsl(233, 11%, 84%)';
    } else if (act === true) {
      al.style.color = 'hsl(233, 11%, 84%)';
      acti.style.color = 'hsl(220, 98%, 61%)';
      compl.style.color = 'hsl(233, 11%, 84%)';
    } else if (comp === true) {
      al.style.color = 'hsl(233, 11%, 84%)';
      acti.style.color = 'hsl(233, 11%, 84%)';
      compl.style.color = 'hsl(220, 98%, 61%)';
    }
  }, [all, comp, act]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Head__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 6
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().flex),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
          children: "TO DO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/icon-moon.svg",
            alt: "moon icon",
            height: 26,
            width: 26
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().todo_input),
          onClick: submitToDo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          value: toDo,
          onChange: function onChange(e) {
            setToDo(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: loading ? fetch_todo.map(function (todo) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputGroup),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              onClick: function onClick() {
                setcomp_todo(todo.id);
                setactive(function () {
                  return active ? false : true;
                });
                setcomplete(todo.id);
              },
              id: todo.id,
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().todo_input_comp)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 1
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().label),
              id: todo.id,
              children: todo.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 5
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().remove),
              onClick: function onClick(e) {
                removeToDo(todo.id);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: "/icon-cross.svg",
                alt: "delete todo",
                width: 15,
                height: 15
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 6
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 4
            }, _this)]
          }, todo.id, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 7
          }, _this);
        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 6
        }, this)
      }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottom_line),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().items),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: [count, " items left"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 1
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ul),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
              id: "all",
              onClick: function onClick() {
                fetchToDo();
                setAll(true);
                setComp(false);
                setAct(false);
              },
              children: "All"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
              id: "active",
              onClick: function onClick() {
                active_todo();
                setAct(true);
                setAll(false);
                setComp(false);
              },
              children: "Active"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
              id: "comp",
              onClick: function onClick() {
                complete_todo();
                setComp(true);
                setAct(false);
                setAll(false);
              },
              children: "Completed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().clear),
          onClick: clear_comp,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Clear Completed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 1
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 1
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("footer", {
      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 5
  }, this);
}

_s(Home, "RT2xzCn0bcMZiZXtaWe63BzyK0o=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTI5MmJhYzkwZjM4ODQ1N2Q1ZmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLGtCQUFzQkosK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBT0ssSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTRCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPTyxVQUFQO0FBQUEsTUFBa0JDLFFBQWxCOztBQUNBLG1CQUFrQ1IsK0NBQVEsRUFBMUM7QUFBQSxNQUFPUyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLFdBQVcsR0FBR1QsNkNBQU0sQ0FBQyxJQUFELENBQTFCOztBQUNBLG1CQUF5QkYsK0NBQVEsQ0FBQyxJQUFELENBQWpDO0FBQUEsTUFBT1ksTUFBUDtBQUFBLE1BQWNDLFNBQWQ7O0FBQ0EsbUJBQTJCYiwrQ0FBUSxDQUFDLElBQUQsQ0FBbkM7QUFBQSxNQUFPYyxPQUFQO0FBQUEsTUFBZUMsVUFBZjs7QUFDQSxtQkFBbUJmLCtDQUFRLENBQUMsSUFBRCxDQUEzQjtBQUFBLE1BQU9nQixHQUFQO0FBQUEsTUFBV0MsTUFBWDs7QUFDQSxtQkFBbUJqQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBM0I7QUFBQSxNQUFPa0IsR0FBUDtBQUFBLE1BQVdDLE1BQVg7O0FBQ0EsbUJBQXFCbkIsK0NBQVEsQ0FBQyxLQUFELENBQTdCO0FBQUEsTUFBT29CLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUNBLG1CQUF1QnJCLCtDQUFRLENBQUMsQ0FBRCxDQUEvQjtBQUFBLE1BQU9zQixLQUFQO0FBQUEsTUFBYUMsUUFBYjs7QUFLRixNQUFNQyxTQUFTO0FBQUEsaVRBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RU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QUNBRixnQkFBQUEsTUFBTSxDQUFDLEtBQUQsQ0FBTjtBQUNBRixnQkFBQUEsTUFBTSxDQUFDLEtBQUQsQ0FBTjtBQUFlLGVBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUF5QkE7QUFBSyxtQkFBUyxFQUFFbEIsdUVBQWhCO0FBQThCLGlCQUFPLEVBQUVrRCxVQUF2QztBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdERNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBNkZFO0FBQVEsZUFBUyxFQUFFbEQsd0VBQWFvRjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUdEOztHQXBRdUIvRTs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0b0RvLCBzZXRUb0RvXT11c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmZXRjaF90b2RvLHNldEZldGNoXT11c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wX3RvZG8sIHNldGNvbXBfdG9kb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBmaXJzdFVwZGF0ZSA9IHVzZVJlZih0cnVlKTtcbiAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdPXVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT11c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2FsbCxzZXRBbGxdPXVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYWN0LHNldEFjdF09dXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tcCxzZXRDb21wXT11c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb3VudCxzZXRDb3VudF09dXNlU3RhdGUoMCk7XG4gXG4gXG5cbiAgXG5jb25zdCBmZXRjaFRvRG89YXN5bmMoKT0+e1xuICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb2xpc3QnKVxuICAgIGNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIFxuICAgIFxuICAgIFxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RmV0Y2goZGF0YSk7XG4gICAgY2FsbF9jb21wbHRlKGRhdGEpO1xuICAgIFxuICAgIHNldENvdW50KGRhdGEubGVuZ3RoKTtcbiAgICAgIH1cbmNvbnN0IGFjdGl2ZV90b2RvPWFzeW5jKCk9PntcbiAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvbGlzdCcpXG4gIGNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpXG4gXG4gICAgICBjb25zdCBkYXRhYT1kYXRhLmZpbHRlcigodG9kbyk9PntcbiAgICAgICByZXR1cm4gdG9kby5hY3RpdmU9PT10cnVlO1xuICAgICAgfSk7XG4gICAgXG4gICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRGZXRjaChkYXRhYSk7XG4gICAgICBzZXRDb3VudChkYXRhYS5sZW5ndGgpO1xuICAgICAgXG4gICAgfVxuY29uc3QgY29tcGxldGVfdG9kbz1hc3luYygpPT57XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb2xpc3QnKVxuICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxuIFxuICAgICAgY29uc3QgZGF0YWE9ZGF0YS5maWx0ZXIoKHRvZG8pPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcFwiKVxuICAgIHJldHVybiB0b2RvLmFjdGl2ZT09PWZhbHNlO1xuICAgfSk7XG5cbiAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICBzZXRGZXRjaChkYXRhYSk7XG4gICBjYWxsX2NvbXBsdGUoZGF0YWEpO1xuICAgXG4gICBcblxufVxuY29uc3QgY2FsbF9jb21wbHRlPShkYXRhKT0+e1xuICBkYXRhLm1hcCgodG9kbyk9PntcbiAgICBpZih0b2RvLmFjdGl2ZT09ZmFsc2Upe1xuICAgIHNldGNvbXBfdG9kbyh0b2RvLmlkKTtcbiAgIFxuICAgIH1cbiAgfSlcbn1cbmNvbnN0IHN1Ym1pdFRvRG89YXN5bmMoKT0+e1xuICBpZih0b0RvPT09Jycpe1xuICAgIGFsZXJ0KFwiRW50ZXIgdG8gZG8gbGlzdFwiKTtcbiAgfVxuICBlbHNle1xuICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb2xpc3QnLHtcbiAgbWV0aG9kOidQT1NUJyxcbiAgYm9keTpKU09OLnN0cmluZ2lmeSh7dG9Eb30pLFxuICBoZWFkZXJzOntcbiAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gIH0sXG59KVxuZmV0Y2hUb0RvKCk7XG59XG59XG5cbmNvbnN0IHJlbW92ZVRvRG89YXN5bmModG9kb2lkKT0+e1xuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvbGlzdCcse1xuICAgIG1ldGhvZDonREVMRVRFJyxcbiAgICBib2R5OkpTT04uc3RyaW5naWZ5KHt0b2RvaWR9KSxcbiAgICBoZWFkZXJzOntcbiAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgfSlcbmZldGNoVG9EbygpO1xufVxuY29uc3QgY2xlYXJfY29tcD1hc3luYygpPT57XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb2xpc3QnKVxuICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxuIFxuICAgICAgZGF0YS5tYXAoKHRvZG8pPT57XG4gICAgaWYodG9kby5hY3RpdmU9PT1mYWxzZSl7XG4gICAgICByZW1vdmVUb0RvKHRvZG8uaWQpXG4gICAgfVxuICAgfSk7XG5zZXRMb2FkaW5nKHRydWUpO1xuZmV0Y2hUb0RvKCk7XG59XG5jb25zdCBzZXRjb21wbGV0ZT1hc3luYyh0b2RvaWQpPT57XG4gIFxuICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb2xpc3QnLHtcbiAgICBtZXRob2Q6J1BVVCcsXG4gICAgYm9keTpKU09OLnN0cmluZ2lmeSh7dG9kb2lkfSksXG4gICAgaGVhZGVyczp7XG4gICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgIH0pXG5cbnNldENvdW50KGNvdW50LTEpO1xufVxuXG5cbnVzZUVmZmVjdChhc3luYygpPT57XG4gIGlmIChmaXJzdFVwZGF0ZS5jdXJyZW50KSB7XG4gICAgZmlyc3RVcGRhdGUuY3VycmVudCA9IGZhbHNlO1xuICAgIHJldHVybjtcblxuICB9XG4gIFxuIFxuICAgIGNvbnN0IGQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29tcF90b2RvKTtcbiAgIGQuY2xhc3NMaXN0LnRvZ2dsZShzdHlsZXMudGljayk7XG4gICBjb25zb2xlLmxvZyhkKTtcbiAgIGNvbnNvbGUubG9nKFwiZFwiKTtcbiBkLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoc3R5bGVzLmxhKTtcbiAgXG59LFtjb21wX3RvZG8sYWN0aXZlXSlcblxudXNlRWZmZWN0KCgpPT57XG4gIGNvbnN0IGFsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsXCIpO1xuICBjb25zdCBhY3RpPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlXCIpO1xuICBjb25zdCBjb21wbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBcIik7XG4gXG5pZihhbGw9PT10cnVlKXtcbmFsLnN0eWxlLmNvbG9yPSdoc2woMjIwLCA5OCUsIDYxJSknO1xuYWN0aS5zdHlsZS5jb2xvcj0naHNsKDIzMywgMTElLCA4NCUpJztcbmNvbXBsLnN0eWxlLmNvbG9yPSdoc2woMjMzLCAxMSUsIDg0JSknO1xufVxuZWxzZSBpZihhY3Q9PT10cnVlKXtcbiAgYWwuc3R5bGUuY29sb3I9J2hzbCgyMzMsIDExJSwgODQlKSc7XG4gIGFjdGkuc3R5bGUuY29sb3I9J2hzbCgyMjAsIDk4JSwgNjElKSc7XG4gIGNvbXBsLnN0eWxlLmNvbG9yPSdoc2woMjMzLCAxMSUsIDg0JSknXG4gIFxuICB9XG4gZWxzZSBpZihjb21wPT09dHJ1ZSl7XG4gICAgYWwuc3R5bGUuY29sb3I9J2hzbCgyMzMsIDExJSwgODQlKSc7XG4gICAgYWN0aS5zdHlsZS5jb2xvcj0naHNsKDIzMywgMTElLCA4NCUpJztcbiAgICBjb21wbC5zdHlsZS5jb2xvcj0naHNsKDIyMCwgOTglLCA2MSUpJztcbiAgICBcbiAgICB9XG59LFthbGwsY29tcCxhY3RdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIFRPIERPXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbi1tb29uLnN2Z1wiIGFsdD1cIm1vb24gaWNvblwiIGhlaWdodD17MjZ9IHdpZHRoPXsyNn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudG9kb19pbnB1dH0gb25DbGljaz17c3VibWl0VG9Eb30+XG5cbiAgICAgICAgPC9idXR0b24+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0b0RvfVxuICAgIG9uQ2hhbmdlPXtlID0+IHsgc2V0VG9EbyhlLnRhcmdldC52YWx1ZSk7IH19XG4gICAgPjwvaW5wdXQ+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgPD5cbiAgICAgICAge2xvYWRpbmc/KFxuICBmZXRjaF90b2RvLm1hcCh0b2RvPT57XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBrZXk9e3RvZG8uaWR9IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgc2V0Y29tcF90b2RvKHRvZG8uaWQpO1xuICAgc2V0YWN0aXZlKCgpPT5hY3RpdmU/IGZhbHNlOnRydWUpXG4gICBzZXRjb21wbGV0ZSh0b2RvLmlkKTtcbn19IGlkPXt0b2RvLmlkfSBjbGFzc05hbWU9e3N0eWxlcy50b2RvX2lucHV0X2NvbXB9XG4+XG4gXG48L2J1dHRvbj5cblxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfSBpZD17dG9kby5pZH0+XG4gICAge3RvZG8udGV4dH1cbiAgICA8L3A+XG4gIFxuICBcbiAgXG4gICAgXG4gIFxuICAgXG4gIFxuICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlfSBvbkNsaWNrPXsoZSk9PntyZW1vdmVUb0RvKHRvZG8uaWQpfX0+XG4gICAgIDxJbWFnZSBzcmM9XCIvaWNvbi1jcm9zcy5zdmdcIiBhbHQ9XCJkZWxldGUgdG9kb1wiIHdpZHRoPXsxNX1cbiAgICAgaGVpZ2h0PXsxNX0vPlxuICAgPC9zcGFuPlxuICAgPC9kaXY+XG4gICAgKVxuICB9KVxuICApOig8cD5sb2FkaW5nPC9wPilcbiAgfVxuPC8+XG4gICAgICAgXG4gICBcbjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX2xpbmV9PlxuPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtc30+XG4gIDxwPntjb3VudH0gaXRlbXMgbGVmdDwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudWx9PlxuICA8dWw+XG4gICAgPGxpIGlkPVwiYWxsXCIgb25DbGljaz17KCk9PntcbiAgICAgIGZldGNoVG9EbygpO1xuICAgICAgc2V0QWxsKHRydWUpO1xuICAgICAgc2V0Q29tcChmYWxzZSk7XG4gICAgICBzZXRBY3QoZmFsc2UpfX0+QWxsPC9saT5cbiAgICA8bGkgaWQ9XCJhY3RpdmVcIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgYWN0aXZlX3RvZG8oKTtcbiAgICAgIHNldEFjdCh0cnVlKTtcbiAgICAgIHNldEFsbChmYWxzZSk7XG4gICAgICBzZXRDb21wKGZhbHNlKTt9fT5BY3RpdmU8L2xpPlxuXG4gICAgPGxpIGlkPVwiY29tcFwiIG9uQ2xpY2s9eygpPT57XG4gICAgICBjb21wbGV0ZV90b2RvKCk7XG4gICAgICBzZXRDb21wKHRydWUpO1xuICAgICAgc2V0QWN0KGZhbHNlKTtcbiAgICAgIHNldEFsbChmYWxzZSk7fX0+XG4gICAgICBDb21wbGV0ZWQ8L2xpPlxuICA8L3VsPlxuPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfSBvbkNsaWNrPXtjbGVhcl9jb21wfT5cbiAgPHA+Q2xlYXIgQ29tcGxldGVkPC9wPlxuPC9kaXY+XG48L2Rpdj5cbiAgIFxuIFxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgIFxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSGVhZGVyIiwiSG9tZSIsInRvRG8iLCJzZXRUb0RvIiwiZmV0Y2hfdG9kbyIsInNldEZldGNoIiwiY29tcF90b2RvIiwic2V0Y29tcF90b2RvIiwiZmlyc3RVcGRhdGUiLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFsbCIsInNldEFsbCIsImFjdCIsInNldEFjdCIsImNvbXAiLCJzZXRDb21wIiwiY291bnQiLCJzZXRDb3VudCIsImZldGNoVG9EbyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhbGxfY29tcGx0ZSIsImxlbmd0aCIsImFjdGl2ZV90b2RvIiwiZGF0YWEiLCJmaWx0ZXIiLCJ0b2RvIiwiY29tcGxldGVfdG9kbyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpZCIsInN1Ym1pdFRvRG8iLCJhbGVydCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlbW92ZVRvRG8iLCJ0b2RvaWQiLCJjbGVhcl9jb21wIiwic2V0Y29tcGxldGUiLCJjdXJyZW50IiwiZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0aWNrIiwibmV4dFNpYmxpbmciLCJsYSIsImFsIiwiYWN0aSIsImNvbXBsIiwic3R5bGUiLCJjb2xvciIsImNvbnRhaW5lciIsIm1haW4iLCJmbGV4IiwidGl0bGUiLCJpbnB1dCIsInRvZG9faW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dEdyb3VwIiwidG9kb19pbnB1dF9jb21wIiwibGFiZWwiLCJ0ZXh0IiwicmVtb3ZlIiwiYm90dG9tX2xpbmUiLCJpdGVtcyIsInVsIiwiY2xlYXIiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9