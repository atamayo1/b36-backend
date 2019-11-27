const AuthorResolver = require('./AuthorResolvers');
const PostResolver = require('./PostResolver');
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    URL: URLResolver,
    EmailAddress: EmailAddressResolver,
    Query:{
      ...AuthorResolver.Query,
        ...PostResolver.Query
    },
    Mutation: {
        ...AuthorResolver.Mutation,
        ...PostResolver.Mutation
    }
};