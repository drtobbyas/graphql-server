const { buildSchema } = require('graphql')

const schema = buildSchema(`

    type Course {
        id: ID
        title: String
        description: String
        date: String
        isbn: Int

    }

    input CourseInput {
        id: ID
        title: String!
        description: String
        date: String
        isbn: Int
    }



    type Query {
        getCourse(id: ID): Course
    }

    type Mutation {
        addCourse(input: CourseInput): Course
    }
`);

module.exports = schema;