const Users = require('./users.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Follows = require('./follows.models')
const Comments = require('./comments.models')
const PostsMultimedia = require('./posts_multimedia.models')

const initModels = () => { 
    //? hasOne 'una'
    //? hasMany 'muchas'
    //? belongsTo 'pertenece a una'
    //? belongsToMany 'pertenece muchas'

  //* users 1:M posts
  Users.hasMany(Posts) 
  Posts.belongsTo(Users)

  //* Posts 1:M Comments
  Posts.hasMany(Comments)
  Comments.belongsTo(Posts)

  //* Users 1:M Comments
  Users.hasMany(Comments)
  Comments.belongsTo(Users)

  //* Posts 1:M PostsMultimedia
  Posts.hasMany(PostsMultimedia)
  PostsMultimedia.belongsTo(Posts)

  //* Users 1:M likes
  Users.hasMany(Likes)
  Likes.belongsTo(Users)

  //* Posts 1:M likes
  Posts.hasMany(Likes)
  Likes.belongsTo(Posts)

  Users.hasMany(Follows)
  //* Users 1:M Follows
  Follows.belongsTo(Users, {
    foreignKey: 'userId',
    as:'Follower'
  })
  
  //* Users 1:M Follows
  Follows.belongsTo(Users, {
    foreignKey: 'userId2',
    as:'followed'
  })

}


module.exports = initModels