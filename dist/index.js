"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/docs', function (req, res) {
  res.send(process.env);
});
app.listen(process.env.PORT || 8080, function () {
  console.log("Running at PORT ".concat(process.env.PORT || 8080));
});
//# sourceMappingURL=index.js.map