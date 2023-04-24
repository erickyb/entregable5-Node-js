const db = require('../utils/database')
const {DataTypes } = require('sequelize')

const PostsMultimedia = db.define('posts_multimedia', {
  id: {
    type: DataTypes.UUID,
    primaryKey:true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl:true
    }

  },
  type: {
    type: DataTypes.ENUM('image', 'video', 'reel'),
    allowNull: false,
    defaultValue:'image'
  },
  postId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Posts,
      key:'id'
    }
  }
})

modele.exports = PostsMultimedia