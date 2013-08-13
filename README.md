![logo](http://ww4.sinaimg.cn/large/61ff0de3jw1e7l8life9hj201y01ywea.jpg) poker ![npm](https://badge.fury.io/js/poker.png)
---

a smart signin simulator and testaccounts switcher base on Node

### How to install

````
$ npm install poker
````

### Sample code

````javascript
// require poker
var Poker = require('poker');

// init a poker
var poker = new Poker({
    signin: 'http://anysite.com/signin',
    passport: {
        username: '123',
        password: '123123123'
    }
});

// signin
poker.signin(function(stat){
    console.log(stat)
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