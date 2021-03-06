const _ = require('lodash');
const conv = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor3/convert_csv_to_json.js');


let file_csv1 = '/Users/ladamelcakova/Desktop/Лабораторные работы/labor3/csv/groups.csv';
let file_csv2 = '/Users/ladamelcakova/Desktop/Лабораторные работы/labor3/csv/students.csv'


let arr_groups = conv.csv_to_json(file_csv1);
let arr_students = conv.csv_to_json(file_csv2);


function getAge(arr_groups, arr_students, name_group, type_sort) {
    let filter_students = _.find(arr_groups, item => item.nameGr == name_group).id;
    let find_student = _.filter(arr_students, item => item.idGr == filter_students);
    return _.filter(find_student, item => item.age > 17);
}


console.log(getAge(arr_groups, arr_students, 'ПИб-1'));