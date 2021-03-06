const get_conn = require('/Users/ladamelcakova/Desktop/Лабораторные работы/labor4/utils.js').get_conn;

let query_select = "SELECT id, DATE_FORMAT(day, '%Y.%m.%d'), city, name, count \
FROM data_set WHERE name = (SELECT name FROM data_set ORDER BY count DESC LIMIT 1) ORDER BY day ASC"
const conn = get_conn();

conn.promise()
    .query(query_select)
    .then(([rows]) => console.table(rows))
    .catch((err) => console.error(err))
    .then(conn.end());