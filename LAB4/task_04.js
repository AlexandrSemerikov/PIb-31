const get_conn = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor4/utils.js').get_conn;
const conv = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor4/convert_json.js');

let data_set_array = conv.csv_to_json('/Users/ladamelcakova/Desktop/Лабораторные работы/labor4/data_set.csv');
let rows = data_set_array.map(item => Object.values(item));

let query_insert = "INSERT INTO data_set \
(day, city, name, count) VALUES ? ";

const conn = get_conn();

conn.promise()
    .query(query_insert, [rows])
    .then(() => console.log("CSV файл импортирован"))
    .catch((err) => console.error(err))
    .then(conn.end());