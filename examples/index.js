var Poker = require('../poker');
var poker = new Poker('http://www.abc.com/signin');

poker.add({
  alias: 'mime',
  login: '123',
  password: '123'
});

poker.mock('mime', function(err, res, result) {
  // do sth.
});
