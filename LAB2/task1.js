const _ = require('lodash');
var colors_arr = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor2/colors.json');


let colors = _(colors_arr)
    .map(item => _.toPairs(item))
    .flatten()
    .map(item => item[0])
    .filter(item => item.length < 6)
    .orderBy()
    .value();


console.log(colors);
