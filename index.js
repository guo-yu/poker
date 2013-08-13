var request = require('request');

var Poker = function(params) {
    this.gateway = params.signin;
    this.passport = params.passport;
}

Poker.prototype.signin = function() {
    var self = this;
    request.post({
        url: self.gateway,
        form: {
            
        }
    })
};

exports.cli = function() {
    
}