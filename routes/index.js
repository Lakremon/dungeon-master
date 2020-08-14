var express = require('express');
var Game = require('./game.js');
var router = express.Router();

/* GET home page. */
router.post('/alice-webhook/', function(req, res, next) {
  const request = req.body || {};
  console.log(request);
  console.log(Game);
  const game = new Game();
  res.json({
    version: request.version,
    session: request.session,
    response: {
      // В свойстве response.text возвращается исходная реплика пользователя.
      // Если навык был активирован без дополнительной команды,
      // пользователю нужно сказать "Hello!".
      text: game.getText(request),
      end_session: false,
    },
  });
});

module.exports = router;
