const { SchemaDirectiveVisitor } = require('graphql-tools');
const { defaultFieldResolver } = require('graphql');

class AuthDirective extends  SchemaDirectiveVisitor{
    visitFieldDefinition(field, details) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async function ( ...args ) { // root , params, context, info
            const [,,context] = args;
            if(context.user){
                return await resolve.apply(this, args);
            } else {
                throw new Error('You must be authenticate');
            }
        }
    }
}

module.exports = AuthDirective;