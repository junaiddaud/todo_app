"use strict";
(() => {
var exports = {};
exports.id = "pages/api/todolist";
exports.ids = ["pages/api/todolist"];
exports.modules = {

/***/ "./data/todolist.js":
/*!**************************!*\
  !*** ./data/todolist.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todolist": () => (/* binding */ todolist)
/* harmony export */ });
const todolist = [];

/***/ }),

/***/ "./pages/api/todolist/index.js":
/*!*************************************!*\
  !*** ./pages/api/todolist/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/todolist */ "./data/todolist.js");

function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(_data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist);
  } else if (req.method === 'POST') {
    const todo = req.body.toDo;
    const newToDo = {
      id: Date.now(),
      text: todo,
      active: true
    };
    _data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist.push(newToDo);
    res.status(201).json(newToDo);
  } else if (req.method === 'DELETE') {
    const dlt = req.body.todoid;
    const dltToDo = _data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist.find(todo => {
      todo.id === parseInt(dlt);
    });
    const index = _data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist.findIndex(todo => todo.id === parseInt(dlt));
    _data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist.splice(index, 1);
    res.status(200).json(dltToDo);
  } else if (req.method === 'PUT') {
    const dlt = req.body.todoid;
    const dltToDo = _data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist.find(todo => {
      todo.id === parseInt(dlt);
    });
    const index = _data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist.findIndex(todo => todo.id === parseInt(dlt));

    if (_data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist[index].active === false) {
      _data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist[index].active = true;
    } else {
      _data_todolist__WEBPACK_IMPORTED_MODULE_0__.todolist[index].active = false;
    }

    res.status(204).json(dltToDo);
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todolist/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3RvZG9saXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsUUFBUSxHQUFDLEVBQWY7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ2UsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBcUJDLEdBQXJCLEVBQXlCO0FBRXBDLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFhLEtBQWhCLEVBQXNCO0FBQ2xCRCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQk4sb0RBQXJCO0FBRUMsR0FITCxNQUlTLElBQUdFLEdBQUcsQ0FBQ0UsTUFBSixLQUFhLE1BQWhCLEVBQXdCO0FBQ3pCLFVBQU1HLElBQUksR0FBQ0wsR0FBRyxDQUFDTSxJQUFKLENBQVNDLElBQXBCO0FBQ0EsVUFBTUMsT0FBTyxHQUFDO0FBQ2RDLE1BQUFBLEVBQUUsRUFBQ0MsSUFBSSxDQUFDQyxHQUFMLEVBRFc7QUFHYkMsTUFBQUEsSUFBSSxFQUFDUCxJQUhRO0FBSWJRLE1BQUFBLE1BQU0sRUFBQztBQUpNLEtBQWQ7QUFNQWYsSUFBQUEseURBQUEsQ0FBY1UsT0FBZDtBQUNBUCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkksT0FBckI7QUFDUCxHQVZRLE1BV0osSUFBR1IsR0FBRyxDQUFDRSxNQUFKLEtBQWEsUUFBaEIsRUFBeUI7QUFDMUIsVUFBTWEsR0FBRyxHQUFDZixHQUFHLENBQUNNLElBQUosQ0FBU1UsTUFBbkI7QUFDQSxVQUFNQyxPQUFPLEdBQUNuQix5REFBQSxDQUFlTyxJQUFELElBQVE7QUFDaENBLE1BQUFBLElBQUksQ0FBQ0ksRUFBTCxLQUFVVSxRQUFRLENBQUNKLEdBQUQsQ0FBbEI7QUFDSCxLQUZhLENBQWQ7QUFHQSxVQUFNSyxLQUFLLEdBQUN0Qiw4REFBQSxDQUNQTyxJQUFELElBQVNBLElBQUksQ0FBQ0ksRUFBTCxLQUFVVSxRQUFRLENBQUNKLEdBQUQsQ0FEbkIsQ0FBWjtBQUlBakIsSUFBQUEsMkRBQUEsQ0FBZ0JzQixLQUFoQixFQUFzQixDQUF0QjtBQUNBbkIsSUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJhLE9BQXJCO0FBQ0gsR0FYSSxNQVlBLElBQUdqQixHQUFHLENBQUNFLE1BQUosS0FBYSxLQUFoQixFQUFzQjtBQUN2QixVQUFNYSxHQUFHLEdBQUNmLEdBQUcsQ0FBQ00sSUFBSixDQUFTVSxNQUFuQjtBQUNBLFVBQU1DLE9BQU8sR0FBQ25CLHlEQUFBLENBQWVPLElBQUQsSUFBUTtBQUNoQ0EsTUFBQUEsSUFBSSxDQUFDSSxFQUFMLEtBQVVVLFFBQVEsQ0FBQ0osR0FBRCxDQUFsQjtBQUNILEtBRmEsQ0FBZDtBQUdBLFVBQU1LLEtBQUssR0FBQ3RCLDhEQUFBLENBQ1BPLElBQUQsSUFBU0EsSUFBSSxDQUFDSSxFQUFMLEtBQVVVLFFBQVEsQ0FBQ0osR0FBRCxDQURuQixDQUFaOztBQUdELFFBQUdqQixvREFBUSxDQUFDc0IsS0FBRCxDQUFSLENBQWdCUCxNQUFoQixLQUF5QixLQUE1QixFQUFrQztBQUNqQ2YsTUFBQUEsb0RBQVEsQ0FBQ3NCLEtBQUQsQ0FBUixDQUFnQlAsTUFBaEIsR0FBdUIsSUFBdkI7QUFDQSxLQUZELE1BR0k7QUFDSGYsTUFBQUEsb0RBQVEsQ0FBQ3NCLEtBQUQsQ0FBUixDQUFnQlAsTUFBaEIsR0FBdUIsS0FBdkI7QUFDQTs7QUFDRFosSUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJhLE9BQXJCO0FBR0Y7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL2RhdGEvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vcGFnZXMvYXBpL3RvZG9saXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0b2RvbGlzdD1bXHJcbiBcclxuXSIsImltcG9ydCB7dG9kb2xpc3R9IGZyb20gJy4uLy4uLy4uL2RhdGEvdG9kb2xpc3QnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XHJcblxyXG4gICAgaWYocmVxLm1ldGhvZD09PSdHRVQnKXtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0b2RvbGlzdClcclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHJlcS5tZXRob2Q9PT0nUE9TVCcpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9kbz1yZXEuYm9keS50b0RvXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvRG89e1xyXG4gICAgICAgICAgICBpZDpEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgIHRleHQ6dG9kbyxcclxuICAgICAgICAgICAgIGFjdGl2ZTp0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9kb2xpc3QucHVzaChuZXdUb0RvKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdUb0RvKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihyZXEubWV0aG9kPT09J0RFTEVURScpe1xyXG4gICAgICAgIGNvbnN0IGRsdD1yZXEuYm9keS50b2RvaWRcclxuICAgICAgICBjb25zdCBkbHRUb0RvPXRvZG9saXN0LmZpbmQoKHRvZG8pPT57XHJcbiAgICAgICAgICAgIHRvZG8uaWQ9PT1wYXJzZUludChkbHQpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXg9dG9kb2xpc3QuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAodG9kbyk9PiB0b2RvLmlkPT09cGFyc2VJbnQoZGx0KVxyXG4gICAgICAgIClcclxuICAgICAgIFxyXG4gICAgICAgIHRvZG9saXN0LnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRsdFRvRG8pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHJlcS5tZXRob2Q9PT0nUFVUJyl7XHJcbiAgICAgICAgY29uc3QgZGx0PXJlcS5ib2R5LnRvZG9pZFxyXG4gICAgICAgIGNvbnN0IGRsdFRvRG89dG9kb2xpc3QuZmluZCgodG9kbyk9PntcclxuICAgICAgICAgICAgdG9kby5pZD09PXBhcnNlSW50KGRsdClcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpbmRleD10b2RvbGlzdC5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICh0b2RvKT0+IHRvZG8uaWQ9PT1wYXJzZUludChkbHQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgaWYodG9kb2xpc3RbaW5kZXhdLmFjdGl2ZT09PWZhbHNlKXtcclxuICAgICAgICB0b2RvbGlzdFtpbmRleF0uYWN0aXZlPXRydWU7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNle1xyXG4gICAgICAgIHRvZG9saXN0W2luZGV4XS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgICAgICByZXMuc3RhdHVzKDIwNCkuanNvbihkbHRUb0RvKTtcclxuICAgICBcclxuICAgICBcclxuICAgIH1cclxuICAgXHJcbn0iXSwibmFtZXMiOlsidG9kb2xpc3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsInRvZG8iLCJib2R5IiwidG9EbyIsIm5ld1RvRG8iLCJpZCIsIkRhdGUiLCJub3ciLCJ0ZXh0IiwiYWN0aXZlIiwicHVzaCIsImRsdCIsInRvZG9pZCIsImRsdFRvRG8iLCJmaW5kIiwicGFyc2VJbnQiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=