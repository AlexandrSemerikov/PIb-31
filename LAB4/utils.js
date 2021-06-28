const mysql = require("mysql2");

const BD = {
    host: "pgsha.ru",
    port: "35006",
    user: "soft0088",
    password: "RHyCsedU",
    database: "soft0088_labrab04"
};

function get_connection() {
    return mysql.createConnection(BD);
}

module.exports.get_conn = get_connection;