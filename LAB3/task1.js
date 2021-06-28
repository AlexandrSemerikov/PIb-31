const _ = require('lodash');
const conv = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor3/convert_csv_to_json.js');


let file_csv;
file_csv = '/Users/ladamelcakova/Desktop/Лабораторные работы/labor3/csv/students.csv';


let arr = conv.csv_to_json(file_csv);


function getAge(array) {
    let map_f = _.map(array, item => item.age);
    let average_age = _.reduce(map_f, (prev, next) => (parseInt(prev) + parseInt(next)) / next.length);
    return average_age;
}


console.log(getAge(arr));