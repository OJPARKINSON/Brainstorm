
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type contributions {
        weeks: [week]
        days: [day]
    }
    type week {
        contributionDays: [day]
    }
    type day {
        contributionCount: Int
        date: String
    }
    type Query {
        getContributions(username: String!): contributions
    }
`
module.exports = {
    typeDefs
}