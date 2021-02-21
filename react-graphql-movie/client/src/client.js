import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    //graphql api를 어떻게 찾는가?
    uri: "http://localhost:4000/"
})

export default client;