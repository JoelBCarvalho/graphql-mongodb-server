export default `
  scalar Date

  type Routers_Trackers {
    _id: ID!
    router: Routers!
    tracker: Trackers!
    created: Date!
  }

  type Query {
    routers_Tracker(_id: ID!): Routers_Trackers!
    routers_Trackers: [Routers_Trackers!]!
  }

  type Mutation {
    createRouters_Tracker(routers_Tracker: CreateRouters_TrackerInput): Routers_Trackers!
    updateRouters_Tracker(_id: ID!, routers_Tracker: UpdateRouters_TrackerInput): Routers_Trackers!
    deleteRouters_Tracker(_id: ID!): Routers_Trackers!
  }

  input CreateRouters_TrackerInput {
    router: ID!
    tracker: ID!
  }
  
  input UpdateRouters_TrackerInput {
    router: ID!
    tracker: ID!
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
