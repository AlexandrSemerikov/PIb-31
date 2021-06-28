const _ = require('lodash');
var data_arr = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor2/data.js')


function rgbToHex(rgb) {
    return (rgb && rgb.length === 4) ? "#" + 
        ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) + 
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) : '';
}


let new_data = _(data_arr)
    .zip(data_arr.colors, data_arr.argb)
    .map(item => _.zipObject(['color','hex_name'], [item[0], rgbToHex(item[1])]))
    .orderBy('color')
    .value();


console.log(new_data)