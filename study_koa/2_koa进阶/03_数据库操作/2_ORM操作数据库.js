const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('koadb', 'root', 'wxyyjb99.com', {
  host: 'localhost',
  dialect: 'mysql'
})

const User = sequelize.define('tb_user', {
  id: {
    type: Sequelize.STRING(20),
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false
})

User.create({
  username: 'wangxinyu',
  nickname: '汪信宇'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})



