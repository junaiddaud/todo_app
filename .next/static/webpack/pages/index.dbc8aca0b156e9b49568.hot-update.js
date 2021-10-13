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
              call_complte(data);
              setFetch(data);
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
              call_complte(dataa);
              setFetch(dataa);

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
        setactive(function () {
          return active ? false : true;
        });
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
  })), [comp_todo]);
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
      lineNumber: 169,
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
          lineNumber: 173,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/icon-moon.svg",
            alt: "moon icon",
            height: 26,
            width: 26
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().todo_input),
          onClick: submitToDo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          value: toDo,
          onChange: function onChange(e) {
            setToDo(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 181,
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
              lineNumber: 194,
              columnNumber: 1
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().label),
              id: todo.id,
              children: todo.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
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
                lineNumber: 214,
                columnNumber: 6
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 4
            }, _this)]
          }, todo.id, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 7
          }, _this);
        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "loading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
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
            lineNumber: 227,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
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
              lineNumber: 231,
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
              lineNumber: 236,
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
              lineNumber: 242,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().clear),
          onClick: clear_comp,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Clear Completed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 1
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 1
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("footer", {
      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGJjOGFjYTBiMTU2ZTliNDk1NjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLGtCQUFzQkosK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBT0ssSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQTRCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPTyxVQUFQO0FBQUEsTUFBa0JDLFFBQWxCOztBQUNBLG1CQUFrQ1IsK0NBQVEsRUFBMUM7QUFBQSxNQUFPUyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLFdBQVcsR0FBR1QsNkNBQU0sQ0FBQyxJQUFELENBQTFCOztBQUNBLG1CQUF5QkYsK0NBQVEsQ0FBQyxJQUFELENBQWpDO0FBQUEsTUFBT1ksTUFBUDtBQUFBLE1BQWNDLFNBQWQ7O0FBQ0EsbUJBQTJCYiwrQ0FBUSxDQUFDLElBQUQsQ0FBbkM7QUFBQSxNQUFPYyxPQUFQO0FBQUEsTUFBZUMsVUFBZjs7QUFDQSxtQkFBbUJmLCtDQUFRLENBQUMsSUFBRCxDQUEzQjtBQUFBLE1BQU9nQixHQUFQO0FBQUEsTUFBV0MsTUFBWDs7QUFDQSxtQkFBbUJqQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBM0I7QUFBQSxNQUFPa0IsR0FBUDtBQUFBLE1BQVdDLE1BQVg7O0FBQ0EsbUJBQXFCbkIsK0NBQVEsQ0FBQyxLQUFELENBQTdCO0FBQUEsTUFBT29CLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUNBLG1CQUF1QnJCLCtDQUFRLENBQUMsQ0FBRCxDQUEvQjtBQUFBLE1BQU9zQixLQUFQO0FBQUEsTUFBYUMsUUFBYjs7QUFLRixNQUFNQyxTQUFTO0FBQUEsaVRBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RU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O0FBQ0FGLGdCQUFBQSxNQUFNLENBQUMsS0FBRCxDQUFOO0FBQ0FGLGdCQUFBQSxNQUFNLENBQUMsS0FBRCxDQUFOO0FBQWUsZUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQXlCQTtBQUFLLG1CQUFTLEVBQUVsQix1RUFBaEI7QUFBOEIsaUJBQU8sRUFBRWtELFVBQXZDO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0RE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUE2RkU7QUFBUSxlQUFTLEVBQUVsRCx3RUFBYW9GO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtR0Q7O0dBblF1Qi9FOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RvRG8sIHNldFRvRG9dPXVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ZldGNoX3RvZG8sc2V0RmV0Y2hdPXVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbXBfdG9kbywgc2V0Y29tcF90b2RvXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGZpcnN0VXBkYXRlID0gdXNlUmVmKHRydWUpO1xuICBjb25zdCBbYWN0aXZlLHNldGFjdGl2ZV09dXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddPXVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYWxsLHNldEFsbF09dXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFthY3Qsc2V0QWN0XT11c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21wLHNldENvbXBdPXVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvdW50LHNldENvdW50XT11c2VTdGF0ZSgwKTtcbiBcbiBcblxuICBcbmNvbnN0IGZldGNoVG9Ebz1hc3luYygpPT57XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvbGlzdCcpXG4gICAgY29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKClcbiAgXG4gICAgXG4gICAgXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNhbGxfY29tcGx0ZShkYXRhKTtcbiAgICBzZXRGZXRjaChkYXRhKTtcbiAgICBzZXRDb3VudChkYXRhLmxlbmd0aCk7XG4gICAgICB9XG5jb25zdCBhY3RpdmVfdG9kbz1hc3luYygpPT57XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb2xpc3QnKVxuICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxuIFxuICAgICAgY29uc3QgZGF0YWE9ZGF0YS5maWx0ZXIoKHRvZG8pPT57XG4gICAgICAgcmV0dXJuIHRvZG8uYWN0aXZlPT09dHJ1ZTtcbiAgICAgIH0pO1xuICAgIFxuICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0RmV0Y2goZGF0YWEpO1xuICAgICAgc2V0Q291bnQoZGF0YWEubGVuZ3RoKTtcbiAgICAgIFxuICAgIH1cbmNvbnN0IGNvbXBsZXRlX3RvZG89YXN5bmMoKT0+e1xuIFxuICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb2xpc3QnKVxuICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxuIFxuICAgICAgY29uc3QgZGF0YWE9ZGF0YS5maWx0ZXIoKHRvZG8pPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcFwiKVxuICAgIHJldHVybiB0b2RvLmFjdGl2ZT09PWZhbHNlO1xuICAgfSk7XG5cbmNhbGxfY29tcGx0ZShkYXRhYSk7XG4gICBzZXRGZXRjaChkYXRhYSk7XG4gICBcbiAgIFxuXG59XG5jb25zdCBjYWxsX2NvbXBsdGU9KGRhdGEpPT57XG4gIGRhdGEubWFwKCh0b2RvKT0+e1xuICAgIGlmKHRvZG8uYWN0aXZlPT1mYWxzZSl7XG4gICAgc2V0Y29tcF90b2RvKHRvZG8uaWQpO1xuICAgIHNldGFjdGl2ZSgoKT0+YWN0aXZlPyBmYWxzZTp0cnVlKTtcbiAgICB9XG4gIH0pXG59XG5jb25zdCBzdWJtaXRUb0RvPWFzeW5jKCk9PntcbiAgaWYodG9Ebz09PScnKXtcbiAgICBhbGVydChcIkVudGVyIHRvIGRvIGxpc3RcIik7XG4gIH1cbiAgZWxzZXtcbiAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9saXN0Jyx7XG4gIG1ldGhvZDonUE9TVCcsXG4gIGJvZHk6SlNPTi5zdHJpbmdpZnkoe3RvRG99KSxcbiAgaGVhZGVyczp7XG4gICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxuICB9LFxufSlcbmZldGNoVG9EbygpO1xufVxufVxuXG5jb25zdCByZW1vdmVUb0RvPWFzeW5jKHRvZG9pZCk9PntcbiAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb2xpc3QnLHtcbiAgICBtZXRob2Q6J0RFTEVURScsXG4gICAgYm9keTpKU09OLnN0cmluZ2lmeSh7dG9kb2lkfSksXG4gICAgaGVhZGVyczp7XG4gICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgIH0pXG5mZXRjaFRvRG8oKTtcbn1cbmNvbnN0IGNsZWFyX2NvbXA9YXN5bmMoKT0+e1xuICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9saXN0JylcbiAgY29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKClcbiBcbiAgICAgIGRhdGEubWFwKCh0b2RvKT0+e1xuICAgIGlmKHRvZG8uYWN0aXZlPT09ZmFsc2Upe1xuICAgICAgcmVtb3ZlVG9Ebyh0b2RvLmlkKVxuICAgIH1cbiAgIH0pO1xuc2V0TG9hZGluZyh0cnVlKTtcbmZldGNoVG9EbygpO1xufVxuY29uc3Qgc2V0Y29tcGxldGU9YXN5bmModG9kb2lkKT0+e1xuICBcbiAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9saXN0Jyx7XG4gICAgbWV0aG9kOidQVVQnLFxuICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe3RvZG9pZH0pLFxuICAgIGhlYWRlcnM6e1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICB9KVxuXG5zZXRDb3VudChjb3VudC0xKTtcbn1cblxuXG51c2VFZmZlY3QoYXN5bmMoKT0+e1xuICBpZiAoZmlyc3RVcGRhdGUuY3VycmVudCkge1xuICAgIGZpcnN0VXBkYXRlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICByZXR1cm47XG5cbiAgfVxuICBcbiBcbiAgICBjb25zdCBkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbXBfdG9kbyk7XG4gICBkLmNsYXNzTGlzdC50b2dnbGUoc3R5bGVzLnRpY2spO1xuICAgY29uc29sZS5sb2coZCk7XG4gICBjb25zb2xlLmxvZyhcImRcIik7XG4gZC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKHN0eWxlcy5sYSk7XG4gIFxufSxbY29tcF90b2RvXSlcblxudXNlRWZmZWN0KCgpPT57XG4gIGNvbnN0IGFsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsXCIpO1xuICBjb25zdCBhY3RpPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlXCIpO1xuICBjb25zdCBjb21wbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBcIik7XG4gXG5pZihhbGw9PT10cnVlKXtcbmFsLnN0eWxlLmNvbG9yPSdoc2woMjIwLCA5OCUsIDYxJSknO1xuYWN0aS5zdHlsZS5jb2xvcj0naHNsKDIzMywgMTElLCA4NCUpJztcbmNvbXBsLnN0eWxlLmNvbG9yPSdoc2woMjMzLCAxMSUsIDg0JSknO1xufVxuZWxzZSBpZihhY3Q9PT10cnVlKXtcbiAgYWwuc3R5bGUuY29sb3I9J2hzbCgyMzMsIDExJSwgODQlKSc7XG4gIGFjdGkuc3R5bGUuY29sb3I9J2hzbCgyMjAsIDk4JSwgNjElKSc7XG4gIGNvbXBsLnN0eWxlLmNvbG9yPSdoc2woMjMzLCAxMSUsIDg0JSknXG4gIFxuICB9XG4gZWxzZSBpZihjb21wPT09dHJ1ZSl7XG4gICAgYWwuc3R5bGUuY29sb3I9J2hzbCgyMzMsIDExJSwgODQlKSc7XG4gICAgYWN0aS5zdHlsZS5jb2xvcj0naHNsKDIzMywgMTElLCA4NCUpJztcbiAgICBjb21wbC5zdHlsZS5jb2xvcj0naHNsKDIyMCwgOTglLCA2MSUpJztcbiAgICBcbiAgICB9XG59LFthbGwsY29tcCxhY3RdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIFRPIERPXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbi1tb29uLnN2Z1wiIGFsdD1cIm1vb24gaWNvblwiIGhlaWdodD17MjZ9IHdpZHRoPXsyNn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudG9kb19pbnB1dH0gb25DbGljaz17c3VibWl0VG9Eb30+XG5cbiAgICAgICAgPC9idXR0b24+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0b0RvfVxuICAgIG9uQ2hhbmdlPXtlID0+IHsgc2V0VG9EbyhlLnRhcmdldC52YWx1ZSk7IH19XG4gICAgPjwvaW5wdXQ+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgPD5cbiAgICAgICAge2xvYWRpbmc/KFxuICBmZXRjaF90b2RvLm1hcCh0b2RvPT57XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBrZXk9e3RvZG8uaWR9IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgc2V0Y29tcF90b2RvKHRvZG8uaWQpO1xuICAgc2V0YWN0aXZlKCgpPT5hY3RpdmU/IGZhbHNlOnRydWUpXG4gICBzZXRjb21wbGV0ZSh0b2RvLmlkKTtcbn19IGlkPXt0b2RvLmlkfSBjbGFzc05hbWU9e3N0eWxlcy50b2RvX2lucHV0X2NvbXB9XG4+XG4gXG48L2J1dHRvbj5cblxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfSBpZD17dG9kby5pZH0+XG4gICAge3RvZG8udGV4dH1cbiAgICA8L3A+XG4gIFxuICBcbiAgXG4gICAgXG4gIFxuICAgXG4gIFxuICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlfSBvbkNsaWNrPXsoZSk9PntyZW1vdmVUb0RvKHRvZG8uaWQpfX0+XG4gICAgIDxJbWFnZSBzcmM9XCIvaWNvbi1jcm9zcy5zdmdcIiBhbHQ9XCJkZWxldGUgdG9kb1wiIHdpZHRoPXsxNX1cbiAgICAgaGVpZ2h0PXsxNX0vPlxuICAgPC9zcGFuPlxuICAgPC9kaXY+XG4gICAgKVxuICB9KVxuICApOig8cD5sb2FkaW5nPC9wPilcbiAgfVxuPC8+XG4gICAgICAgXG4gICBcbjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX2xpbmV9PlxuPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtc30+XG4gIDxwPntjb3VudH0gaXRlbXMgbGVmdDwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudWx9PlxuICA8dWw+XG4gICAgPGxpIGlkPVwiYWxsXCIgb25DbGljaz17KCk9PntcbiAgICAgIGZldGNoVG9EbygpO1xuICAgICAgc2V0QWxsKHRydWUpO1xuICAgICAgc2V0Q29tcChmYWxzZSk7XG4gICAgICBzZXRBY3QoZmFsc2UpfX0+QWxsPC9saT5cbiAgICA8bGkgaWQ9XCJhY3RpdmVcIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgYWN0aXZlX3RvZG8oKTtcbiAgICAgIHNldEFjdCh0cnVlKTtcbiAgICAgIHNldEFsbChmYWxzZSk7XG4gICAgICBzZXRDb21wKGZhbHNlKTt9fT5BY3RpdmU8L2xpPlxuXG4gICAgPGxpIGlkPVwiY29tcFwiIG9uQ2xpY2s9eygpPT57XG4gICAgICBjb21wbGV0ZV90b2RvKCk7XG4gICAgICBzZXRDb21wKHRydWUpO1xuICAgICAgc2V0QWN0KGZhbHNlKTtcbiAgICAgIHNldEFsbChmYWxzZSk7fX0+XG4gICAgICBDb21wbGV0ZWQ8L2xpPlxuICA8L3VsPlxuPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfSBvbkNsaWNrPXtjbGVhcl9jb21wfT5cbiAgPHA+Q2xlYXIgQ29tcGxldGVkPC9wPlxuPC9kaXY+XG48L2Rpdj5cbiAgIFxuIFxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgIFxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSGVhZGVyIiwiSG9tZSIsInRvRG8iLCJzZXRUb0RvIiwiZmV0Y2hfdG9kbyIsInNldEZldGNoIiwiY29tcF90b2RvIiwic2V0Y29tcF90b2RvIiwiZmlyc3RVcGRhdGUiLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFsbCIsInNldEFsbCIsImFjdCIsInNldEFjdCIsImNvbXAiLCJzZXRDb21wIiwiY291bnQiLCJzZXRDb3VudCIsImZldGNoVG9EbyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhbGxfY29tcGx0ZSIsImxlbmd0aCIsImFjdGl2ZV90b2RvIiwiZGF0YWEiLCJmaWx0ZXIiLCJ0b2RvIiwiY29tcGxldGVfdG9kbyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpZCIsInN1Ym1pdFRvRG8iLCJhbGVydCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlbW92ZVRvRG8iLCJ0b2RvaWQiLCJjbGVhcl9jb21wIiwic2V0Y29tcGxldGUiLCJjdXJyZW50IiwiZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0aWNrIiwibmV4dFNpYmxpbmciLCJsYSIsImFsIiwiYWN0aSIsImNvbXBsIiwic3R5bGUiLCJjb2xvciIsImNvbnRhaW5lciIsIm1haW4iLCJmbGV4IiwidGl0bGUiLCJpbnB1dCIsInRvZG9faW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dEdyb3VwIiwidG9kb19pbnB1dF9jb21wIiwibGFiZWwiLCJ0ZXh0IiwicmVtb3ZlIiwiYm90dG9tX2xpbmUiLCJpdGVtcyIsInVsIiwiY2xlYXIiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9