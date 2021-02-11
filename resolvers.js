const courseHolder = []

const resolvers = {
    getCourse: ({id}) => {
        // FIXME: get data from database
        return courseHolder.find((item) => item.id === id)
    },
    addCourse: ({input}) => {
        
        courseHolder.push(input)
        return input
    }
}

module.exports = resolvers

