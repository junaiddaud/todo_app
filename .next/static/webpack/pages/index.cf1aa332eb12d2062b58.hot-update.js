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
              _context3.next = 2;
              return fetch('/api/todolist');

            case 2:
              response = _context3.sent;
              _context3.next = 5;
              return response.json();

            case 5:
              data = _context3.sent;
              dataa = data.filter(function (todo) {
                console.log("comp");
                return todo.active === false;
              });
              setFetch(dataa);
              call_complte(dataa);

            case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2YxYWEzMzJlYjEyZDIwNjJiNTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLGtCQUFzQkosK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBT0ssSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTRCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPTyxVQUFQO0FBQUEsTUFBa0JDLFFBQWxCOztBQUNBLG1CQUFrQ1IsK0NBQVEsRUFBMUM7QUFBQSxNQUFPUyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLFdBQVcsR0FBR1QsNkNBQU0sQ0FBQyxJQUFELENBQTFCOztBQUNBLG1CQUF5QkYsK0NBQVEsQ0FBQyxJQUFELENBQWpDO0FBQUEsTUFBT1ksTUFBUDtBQUFBLE1BQWNDLFNBQWQ7O0FBQ0EsbUJBQTJCYiwrQ0FBUSxDQUFDLElBQUQsQ0FBbkM7QUFBQSxNQUFPYyxPQUFQO0FBQUEsTUFBZUMsVUFBZjs7QUFDQSxtQkFBbUJmLCtDQUFRLENBQUMsSUFBRCxDQUEzQjtBQUFBLE1BQU9nQixHQUFQO0FBQUEsTUFBV0MsTUFBWDs7QUFDQSxtQkFBbUJqQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBM0I7QUFBQSxNQUFPa0IsR0FBUDtBQUFBLE1BQVdDLE1BQVg7O0FBQ0EsbUJBQXFCbkIsK0NBQVEsQ0FBQyxLQUFELENBQTdCO0FBQUEsTUFBT29CLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUNBLG1CQUF1QnJCLCtDQUFRLENBQUMsQ0FBRCxDQUEvQjtBQUFBLE1BQU9zQixLQUFQO0FBQUEsTUFBYUMsUUFBYjs7QUFLRixNQUFNQyxTQUFTO0FBQUEsaVRBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RU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QWUsZUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQXlCQTtBQUFLLG1CQUFTLEVBQUVsQix1RUFBaEI7QUFBOEIsaUJBQU8sRUFBRWtELFVBQXZDO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0RE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUE2RkU7QUFBUSxlQUFTLEVBQUVsRCx3RUFBYW9GO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtR0Q7O0dBcFF1Qi9FOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RvRG8sIHNldFRvRG9dPXVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ZldGNoX3RvZG8sc2V0RmV0Y2hdPXVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbXBfdG9kbywgc2V0Y29tcF90b2RvXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGZpcnN0VXBkYXRlID0gdXNlUmVmKHRydWUpO1xuICBjb25zdCBbYWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddPXVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYWxsLHNldEFsbF09dXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFthY3Qsc2V0QWN0XT11c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21wLHNldENvbXBdPXVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvdW50LHNldENvdW50XT11c2VTdGF0ZSgwKTtcbiBcbiBcblxuICBcbmNvbnN0IGZldGNoVG9Ebz1hc3luYygpPT57XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvbGlzdCcpXG4gICAgY29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKClcbiAgXG4gICAgXG4gICAgXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRGZXRjaChkYXRhKTtcbiAgICBjYWxsX2NvbXBsdGUoZGF0YSk7XG4gICAgXG4gICAgc2V0Q291bnQoZGF0YS5sZW5ndGgpO1xuICAgICAgfVxuY29uc3QgYWN0aXZlX3RvZG89YXN5bmMoKT0+e1xuICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9saXN0JylcbiAgY29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKClcbiBcbiAgICAgIGNvbnN0IGRhdGFhPWRhdGEuZmlsdGVyKCh0b2RvKT0+e1xuICAgICAgIHJldHVybiB0b2RvLmFjdGl2ZT09PXRydWU7XG4gICAgICB9KTtcbiAgICBcbiAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHNldEZldGNoKGRhdGFhKTtcbiAgICAgIHNldENvdW50KGRhdGFhLmxlbmd0aCk7XG4gICAgICBcbiAgICB9XG5jb25zdCBjb21wbGV0ZV90b2RvPWFzeW5jKCk9PntcbiBcbiAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9saXN0JylcbiAgY29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKClcbiBcbiAgICAgIGNvbnN0IGRhdGFhPWRhdGEuZmlsdGVyKCh0b2RvKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBcIilcbiAgICByZXR1cm4gdG9kby5hY3RpdmU9PT1mYWxzZTtcbiAgIH0pO1xuXG5cbiAgIHNldEZldGNoKGRhdGFhKTtcbiAgIGNhbGxfY29tcGx0ZShkYXRhYSk7XG4gICBcbiAgIFxuXG59XG5jb25zdCBjYWxsX2NvbXBsdGU9KGRhdGEpPT57XG4gIGRhdGEubWFwKCh0b2RvKT0+e1xuICAgIGlmKHRvZG8uYWN0aXZlPT1mYWxzZSl7XG4gICAgc2V0Y29tcF90b2RvKHRvZG8uaWQpO1xuICAgXG4gICAgfVxuICB9KVxufVxuY29uc3Qgc3VibWl0VG9Ebz1hc3luYygpPT57XG4gIGlmKHRvRG89PT0nJyl7XG4gICAgYWxlcnQoXCJFbnRlciB0byBkbyBsaXN0XCIpO1xuICB9XG4gIGVsc2V7XG4gIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvbGlzdCcse1xuICBtZXRob2Q6J1BPU1QnLFxuICBib2R5OkpTT04uc3RyaW5naWZ5KHt0b0RvfSksXG4gIGhlYWRlcnM6e1xuICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbn0pXG5mZXRjaFRvRG8oKTtcbn1cbn1cblxuY29uc3QgcmVtb3ZlVG9Ebz1hc3luYyh0b2RvaWQpPT57XG4gICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9saXN0Jyx7XG4gICAgbWV0aG9kOidERUxFVEUnLFxuICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe3RvZG9pZH0pLFxuICAgIGhlYWRlcnM6e1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICB9KVxuZmV0Y2hUb0RvKCk7XG59XG5jb25zdCBjbGVhcl9jb21wPWFzeW5jKCk9PntcbiAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvbGlzdCcpXG4gIGNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpXG4gXG4gICAgICBkYXRhLm1hcCgodG9kbyk9PntcbiAgICBpZih0b2RvLmFjdGl2ZT09PWZhbHNlKXtcbiAgICAgIHJlbW92ZVRvRG8odG9kby5pZClcbiAgICB9XG4gICB9KTtcbnNldExvYWRpbmcodHJ1ZSk7XG5mZXRjaFRvRG8oKTtcbn1cbmNvbnN0IHNldGNvbXBsZXRlPWFzeW5jKHRvZG9pZCk9PntcbiAgXG4gIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvbGlzdCcse1xuICAgIG1ldGhvZDonUFVUJyxcbiAgICBib2R5OkpTT04uc3RyaW5naWZ5KHt0b2RvaWR9KSxcbiAgICBoZWFkZXJzOntcbiAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgfSlcblxuc2V0Q291bnQoY291bnQtMSk7XG59XG5cblxudXNlRWZmZWN0KGFzeW5jKCk9PntcbiAgaWYgKGZpcnN0VXBkYXRlLmN1cnJlbnQpIHtcbiAgICBmaXJzdFVwZGF0ZS5jdXJyZW50ID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuXG4gIH1cbiAgXG4gXG4gICAgY29uc3QgZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb21wX3RvZG8pO1xuICAgZC5jbGFzc0xpc3QudG9nZ2xlKHN0eWxlcy50aWNrKTtcbiAgIGNvbnNvbGUubG9nKGQpO1xuICAgY29uc29sZS5sb2coXCJkXCIpO1xuIGQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShzdHlsZXMubGEpO1xuICBcbn0sW2NvbXBfdG9kbyxhY3RpdmVdKVxuXG51c2VFZmZlY3QoKCk9PntcbiAgY29uc3QgYWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxcIik7XG4gIGNvbnN0IGFjdGk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVcIik7XG4gIGNvbnN0IGNvbXBsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcFwiKTtcbiBcbmlmKGFsbD09PXRydWUpe1xuYWwuc3R5bGUuY29sb3I9J2hzbCgyMjAsIDk4JSwgNjElKSc7XG5hY3RpLnN0eWxlLmNvbG9yPSdoc2woMjMzLCAxMSUsIDg0JSknO1xuY29tcGwuc3R5bGUuY29sb3I9J2hzbCgyMzMsIDExJSwgODQlKSc7XG59XG5lbHNlIGlmKGFjdD09PXRydWUpe1xuICBhbC5zdHlsZS5jb2xvcj0naHNsKDIzMywgMTElLCA4NCUpJztcbiAgYWN0aS5zdHlsZS5jb2xvcj0naHNsKDIyMCwgOTglLCA2MSUpJztcbiAgY29tcGwuc3R5bGUuY29sb3I9J2hzbCgyMzMsIDExJSwgODQlKSdcbiAgXG4gIH1cbiBlbHNlIGlmKGNvbXA9PT10cnVlKXtcbiAgICBhbC5zdHlsZS5jb2xvcj0naHNsKDIzMywgMTElLCA4NCUpJztcbiAgICBhY3RpLnN0eWxlLmNvbG9yPSdoc2woMjMzLCAxMSUsIDg0JSknO1xuICAgIGNvbXBsLnN0eWxlLmNvbG9yPSdoc2woMjIwLCA5OCUsIDYxJSknO1xuICAgIFxuICAgIH1cbn0sW2FsbCxjb21wLGFjdF0pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgPEhlYWRlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgVE8gRE9cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pY29uLW1vb24uc3ZnXCIgYWx0PVwibW9vbiBpY29uXCIgaGVpZ2h0PXsyNn0gd2lkdGg9ezI2fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50b2RvX2lucHV0fSBvbkNsaWNrPXtzdWJtaXRUb0RvfT5cblxuICAgICAgICA8L2J1dHRvbj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RvRG99XG4gICAgb25DaGFuZ2U9e2UgPT4geyBzZXRUb0RvKGUudGFyZ2V0LnZhbHVlKTsgfX1cbiAgICA+PC9pbnB1dD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICA8PlxuICAgICAgICB7bG9hZGluZz8oXG4gIGZldGNoX3RvZG8ubWFwKHRvZG89PntcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGtleT17dG9kby5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRHcm91cH0+XG48YnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICBzZXRjb21wX3RvZG8odG9kby5pZCk7XG4gICBzZXRhY3RpdmUoKCk9PmFjdGl2ZT8gZmFsc2U6dHJ1ZSlcbiAgIHNldGNvbXBsZXRlKHRvZG8uaWQpO1xufX0gaWQ9e3RvZG8uaWR9IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9faW5wdXRfY29tcH1cbj5cbiBcbjwvYnV0dG9uPlxuXG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9IGlkPXt0b2RvLmlkfT5cbiAgICB7dG9kby50ZXh0fVxuICAgIDwvcD5cbiAgXG4gIFxuICBcbiAgICBcbiAgXG4gICBcbiAgXG4gICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmV9IG9uQ2xpY2s9eyhlKT0+e3JlbW92ZVRvRG8odG9kby5pZCl9fT5cbiAgICAgPEltYWdlIHNyYz1cIi9pY29uLWNyb3NzLnN2Z1wiIGFsdD1cImRlbGV0ZSB0b2RvXCIgd2lkdGg9ezE1fVxuICAgICBoZWlnaHQ9ezE1fS8+XG4gICA8L3NwYW4+XG4gICA8L2Rpdj5cbiAgICApXG4gIH0pXG4gICk6KDxwPmxvYWRpbmc8L3A+KVxuICB9XG48Lz5cbiAgICAgICBcbiAgIFxuPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fbGluZX0+XG48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1zfT5cbiAgPHA+e2NvdW50fSBpdGVtcyBsZWZ0PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bH0+XG4gIDx1bD5cbiAgICA8bGkgaWQ9XCJhbGxcIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgZmV0Y2hUb0RvKCk7XG4gICAgICBzZXRBbGwodHJ1ZSk7XG4gICAgICBzZXRDb21wKGZhbHNlKTtcbiAgICAgIHNldEFjdChmYWxzZSl9fT5BbGw8L2xpPlxuICAgIDxsaSBpZD1cImFjdGl2ZVwiIG9uQ2xpY2s9eygpPT57XG4gICAgICBhY3RpdmVfdG9kbygpO1xuICAgICAgc2V0QWN0KHRydWUpO1xuICAgICAgc2V0QWxsKGZhbHNlKTtcbiAgICAgIHNldENvbXAoZmFsc2UpO319PkFjdGl2ZTwvbGk+XG5cbiAgICA8bGkgaWQ9XCJjb21wXCIgb25DbGljaz17KCk9PntcbiAgICAgIGNvbXBsZXRlX3RvZG8oKTtcbiAgICAgIHNldENvbXAodHJ1ZSk7XG4gICAgICBzZXRBY3QoZmFsc2UpO1xuICAgICAgc2V0QWxsKGZhbHNlKTt9fT5cbiAgICAgIENvbXBsZXRlZDwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJ9IG9uQ2xpY2s9e2NsZWFyX2NvbXB9PlxuICA8cD5DbGVhciBDb21wbGV0ZWQ8L3A+XG48L2Rpdj5cbjwvZGl2PlxuICAgXG4gXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIZWFkZXIiLCJIb21lIiwidG9EbyIsInNldFRvRG8iLCJmZXRjaF90b2RvIiwic2V0RmV0Y2giLCJjb21wX3RvZG8iLCJzZXRjb21wX3RvZG8iLCJmaXJzdFVwZGF0ZSIsImFjdGl2ZSIsInNldGFjdGl2ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYWxsIiwic2V0QWxsIiwiYWN0Iiwic2V0QWN0IiwiY29tcCIsInNldENvbXAiLCJjb3VudCIsInNldENvdW50IiwiZmV0Y2hUb0RvIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2FsbF9jb21wbHRlIiwibGVuZ3RoIiwiYWN0aXZlX3RvZG8iLCJkYXRhYSIsImZpbHRlciIsInRvZG8iLCJjb21wbGV0ZV90b2RvIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImlkIiwic3VibWl0VG9EbyIsImFsZXJ0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVtb3ZlVG9EbyIsInRvZG9pZCIsImNsZWFyX2NvbXAiLCJzZXRjb21wbGV0ZSIsImN1cnJlbnQiLCJkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRpY2siLCJuZXh0U2libGluZyIsImxhIiwiYWwiLCJhY3RpIiwiY29tcGwiLCJzdHlsZSIsImNvbG9yIiwiY29udGFpbmVyIiwibWFpbiIsImZsZXgiLCJ0aXRsZSIsImlucHV0IiwidG9kb19pbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0R3JvdXAiLCJ0b2RvX2lucHV0X2NvbXAiLCJsYWJlbCIsInRleHQiLCJyZW1vdmUiLCJib3R0b21fbGluZSIsIml0ZW1zIiwidWwiLCJjbGVhciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=