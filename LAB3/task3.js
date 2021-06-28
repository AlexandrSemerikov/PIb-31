const _ = require('lodash');
const path = require('path');
const conv = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor3/convert_csv_to_json.js');


let file_csv;
file_csv = '/Users/ladamelcakova/Desktop/Лабораторные работы/labor3/csv/students.csv'


let arr_students = conv.csv_to_json(file_csv);


function getAge(arr_students) {
    return _.filter(arr_students, item => item.age > 17);
}


console.log(getAge(arr_students));