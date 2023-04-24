const { DataTypes } = requir('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')
const Posts = require('./posts.models')
const { model } = require('../utils/database')

const likes = db.define('likes', {
  
  userId: {
    tytpe: DataTypes.UUID,
    primaryKey: true,
    references: {
      model: Users,
      ke:'id'
    },

  },
  postId: {
    tytpe: DataTypes.UUID,
    primaryKey: true,
    references: {
      model: Users,
      ke: 'id'
    },
  }
})

modele.exports = likes

