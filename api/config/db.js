var mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '211.37.179.52',
    port: 3306,
    user: 'admin',   
    password: 'Choo121903*!',
    database: 'box',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    dateStrings: [
        'DATE',
        'DATETIME'
    ]
});

module.exports = {
    conn: async (sql, params=[]) => {
        try {
          let connection = await pool.getConnection(async conn => conn);

          try {
            console.log("sql => " + sql);
            console.log("args => " + params);
            const [result] = await connection.query(sql, params);
            return result;
          } catch(err){
            console.log("query_error => " + err);
            return err;
          } finally {
            await connection.release(connection);
          }
        } catch(err){
          console.log("DataBase CONNECTION... ERROR");
          return false;
        }
    },
    tran: async (sql, params) => {
        try {
          let connection = await pool.getConnection(async conn => conn);

          try{
            console.log("sql => " + sql);
            console.log("args => " + params);
            await connection.beginTransaction();
            const [result] = await connection.query(sql, params);
            await connection.commit();
            return result;
          } catch(err){
            await connection.rollback();
            console.log("query_error => " + err);
            return err;
          } finally {
            await connection.release(connection);
          }
        } catch(err){
          console.log("DataBase CONNECTION... ERROR");
          return false;
        }
    }
};
