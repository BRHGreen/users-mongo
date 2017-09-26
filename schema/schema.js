const graphql = require('graphql')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const UserProfile = mongoose.model('userProfile')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} = graphql

// This is the usertype. It should be moved to another file down the line

// Remember: you changed `users` to `user`. Check if you get errors.
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id:           { type: GraphQLID },
    userName:     { type: GraphQLString },
    email:        { type: GraphQLString },
    password:     { type: GraphQLString }
  })
})

const UserProfileType = new GraphQLObjectType({
  name: 'UserProfile',
  fields: () => ({
      firstName:  { type: GraphQLString },
      lastName:   { type: GraphQLString },
      age:        { type: GraphQLInt },
      occupation: { type: GraphQLString },
      bio:        { type: GraphQLString }
  })
})


// const UserType = new GraphQLObjectType({
//   name: 'Users',
//   fields: () => ({
//     id: { type: GraphQLID },
//     firstName: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     companyId: { type: GraphQLString }
//   })
// })

// This is the rootquery type
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: (parentValue, { id }) => {
        return User.findById(id)
        }
      },
      userProfile: {
        type: UserProfileType,
        args: { id: { type: GraphQLID } },
        resolve: (parentValue, { id }) => {
          return UserProfile.findById(id)
        }
      }
    })
  })

/*
Include the userProfile within the UserType.
Put the userProfile in the root query.

*/


module.exports = new GraphQLSchema({
  query: RootQueryType
})
