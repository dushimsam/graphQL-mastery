const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const { GraphQLSchema, GraphQLString, GraphQLObjectType } = require('graphql')
const app =  express()

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name:"HelloWorld",
    fields: () =>({
        message:{
           type: GraphQLString,
           resolve: () => "Hello World" 
        },
        resp:{
            type: GraphQLString,
            resolve: () =>"Hey man"
        }
    })
})
})

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true,
}))


app.listen(5000,() =>{
console.log('listening on port 5000')
})