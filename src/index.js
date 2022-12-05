const {ApolloServer} = require('apollo-server');

const typeDefs = `
     type Query {
          info: String!
     }
`;

const resolver = `
     Query: {
          info: () => "This is a test command in graphql"
     }
`;

const server = new ApolloServer({
     typeDefs,resolver
});

server.listen().then(({url}) => console.log(`Server running in port ${url}`))