const Follows = require('../models/follows.models')
const Users =require('../models/users.models')

const findAllFollowsByUser = async (userId) => {
  const follows = await Follows.findAll({
    where: {
      userId: userId
    },
    include: {
      model: Users,
      as: 'followed'
    }
  })
  return follows.map(({followed})=>followed )
}

const finAllFollowersByUser = async (userId) => {
  const follows = await Follows.findAll({
    where: {
      userId2: userId
     },
    include: {
      model: Users,
      as:'follower'
    }
  })
  return follows.map(({ follower }) =>
  follower)
}
const createFollowToUser = async (userId, userId2) => {
  
  const newFollow = await Follows.create({
    userId,
    userId2
  })  
  return newFollow
}
const deleteFolow = async (userId, userId2) => {
  const deleteFollow = await Follows.destroy({
    where: {
      userId,
      userId2
    }
  })
  return deleteFollow
}

module.exports = {
  finAllFollowersByUser,
  findAllFollowsByUser,
  createFollowToUser,
  deleteFolow
}