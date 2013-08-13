![logo](http://ww4.sinaimg.cn/large/61ff0de3jw1e7l8life9hj201y01ywea.jpg) poker ![npm](https://badge.fury.io/js/poker.png)
---

a smart signin simulator and test accounts switcher base on Node

### How to install

````
$ npm install poker
````

### Sample code

````javascript
// require poker
var Poker = require('poker');

// init a poker
// watch out replace passport from keywords
var poker = new Poker('http://abc.com/signin');

// add test account and then signin
poker.add({
    alias: 'testAccountNo.1',
    username: 'abc',
    password: '123'
}).mock(function(err,result){
    console.log(result)
});

// add as much accounts as you like
poker.add(
    [{
        alias: 'testAccountNo.1',
        username: 'abc',
        password: '123'
    },{
        alias: 'testAccountNo.2',
        username: 'admin',
        password: '21212'
    },{
        alias: 'testAccountNo.3',
        username: 'sqwsqws',
        password: '112312323'
    }]);

// switch to selected user will signin automatically
poker.mock('testAccountNo.1',function(result){
    console.log(result);
});
````

### Features

- multiple test accounts supported
- account quick switch supported
- cookie supported

### Pull Request Welcome !

- fork this repo
- feel free to add your feature
- make sure your feature are fully tested!
- send me a PR, and enjoy !