var request = require('request');
var _ = require('underscore');

module.exports = Poker;

function Poker(url) {
  this.url = url;
  this.accounts = {};
}

Poker.prototype.add = function(accounts) {
  var accounts = accounts.length ? accounts : [accounts],
    self = this;
  _.each(accounts, function(item) {
    if (item.alias) {
      self.accounts[item.alias] = item;
      delete self.accounts[item.alias].alias;
    }
  })
  return self;
}

Poker.prototype.mock = function(alias, callback) {
  var self = this;
  var cb = (typeof(alias) == 'string') ? callback : alias,
    params = (typeof(alias) == 'string') ? self.accounts[alias] : findDefault(self.accounts);

  request.post({
    url: self.url,
    form: params,
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36'
    }
  }, function(err, res, body) {
    if (!err) {
      cb(null, res, body);
    } else {
      cb(err, res);
    }
  });
};

function findDefault(accounts) {
  return _.map(accounts, function(value, key) {
    return value;
  })[0];
}
