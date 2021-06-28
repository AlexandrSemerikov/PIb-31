const { filter } = require('lodash');
const _ = require('lodash');
var users_arr = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor2/users.json');



let user = _(users_arr)
    .filter(item => item.address.geo.lat < 0)
    .map(item => _.zipObject(['username','city'], [item.username, item.address.city])) // lat - широта, lng - долгота
    .orderBy('city','desc')
    .value();

    
console.log(user)