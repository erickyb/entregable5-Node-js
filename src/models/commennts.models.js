const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Posts = require('./posts.models')
const { mainModule } = require('process')

const Connents = db.define('comments', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull:false
  },
  postIp: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Posts,
      key:'id'
    }
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: 'id'
    }
  }
})
Module.exports = Connents
