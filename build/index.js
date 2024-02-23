"use strict";

var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.get("/", function (req, res) {
  return res.send({
    name: "kenJo"
  });
});
app.get("/apple", function (req, res) {
  return res.send({
    name: "apple"
  });
});
app.listen(3000, function () {
  return console.log("http://localhost:3000");
});