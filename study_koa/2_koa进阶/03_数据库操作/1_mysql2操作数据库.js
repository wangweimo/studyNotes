const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wxyyjb99.com',
  database: 'koadb'
})
connection.connect()
const sql = `INSERT INTO tb_user(username,nickname) values('wangweimo','汪伟墨')`
connection.query(sql, (err, result, fields) => {
  if (err) throw err
  console.log('this results is:', result)
})