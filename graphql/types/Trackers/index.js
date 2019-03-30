export default `
  scalar Date

  type Trackers {
    _id: ID!
    name: String
    mac: String!
    created: Date!
  }

  type Query {
    tracker(_id: ID!): Trackers!
    trackers: [Trackers!]!
  }

  type Mutation {
    createTracker(tracker: CreateTrackerInput): Trackers!
    updateTracker(_id: ID!, tracker: UpdateTrackerInput): Trackers!
    deleteTracker(_id: ID!): Trackers!
  }

  input CreateTrackerInput {
    name: String
    mac: String!
  }
  
  input UpdateTrackerInput {
    name: String
    mac: String!
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
