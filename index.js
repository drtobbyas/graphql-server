const express = require('express')
const { graphqlHTTP } =  require('express-graphql')
const schema = require('./schema')
const resolvers = require('./resolvers')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'GragphQL server ok'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: resolvers
}))

app.listen(8080, () => {
    console.log('app running on port 8080')
})