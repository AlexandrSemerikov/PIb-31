const get_conn = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor4/utils.js').get_conn;

let query_truncate = "TRUNCATE data_set";

const conn = get_conn();

conn.promise()
    .query(query_truncate)
    .then(() => console.log("Содержимое таблицы удалено"))
    .catch((err) => console.error(err))
    .then(conn.end());