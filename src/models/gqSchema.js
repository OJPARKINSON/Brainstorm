
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
