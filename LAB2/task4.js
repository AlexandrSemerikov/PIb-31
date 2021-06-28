const { flatten, filter } = require('lodash');
const _ = require('lodash');
var clients_arr = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor2/clients.json')


let client = _(clients_arr)
    .flatMapDeep()
    .filter(item => item.address.city == 'Кунгур')
    .orderBy(['gender','age','name'],['asc','desc','asc'])
    .value();


console.log(client);