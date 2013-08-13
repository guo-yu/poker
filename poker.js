var request = require('request'),
    _ = require('underscore');

var Poker = function(url) {
    this.url = url;
    this.accounts = {};
}

var findDefault = function(accounts) {
    return _.map(accounts, function(value, key) {
        return value;
    })[0];
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
        headers: {'user-agent': 'Mozilla/5.0'}
    }, function(err, res, body) {
        if (!err) {
            cb(null, res, body);
        } else {
            cb(err, res);
        }
    });
};

module.exports = Poker;