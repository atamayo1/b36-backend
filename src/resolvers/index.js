const AuthorResolver = require('./AuthorResolvers');
const PostResolver = require('./PostResolver');

module.exports = {
    Query:{
      ...AuthorResolver.Query,
        ...PostResolver.Query
    },
    Mutation: {
        ...AuthorResolver.Mutation,
        ...PostResolver.Mutation
    }
};