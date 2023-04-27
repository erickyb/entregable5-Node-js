const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./utils/database')

const Follows = db.define('follows', {
  
  userId: {
    type: DataTypes.UUID,
    primaryKey: true,
    reference: {
      model: Users,
      key:'id'
    }
  },
  userId2: {
    type: DataTypes.UUID,
    primaryKey: true,
    reference: {
      model: Users,
      key: 'id'
    }
}
}) 

module.exports = Follows