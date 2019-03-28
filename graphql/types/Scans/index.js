export default `
  scalar Date

  type Routers {
    _id: ID!
    activation_link: String!
    name: String
    connected: Boolean
    bt_active: Boolean
    registered: Boolean
    created: Date!
  }

  type Query {
    router(activation_link: String!): Routers!
    routers: [Routers!]!
  }

  type Mutation {
    createRouter(router: CreateRouterInput): Routers!
    updateRouter(_id: ID!, router: UpdateRouterInput): Routers!
    deleteRouter(_id: ID!): Routers!
  }

  input CreateRouterInput {
    activation_link: String!
    name: String
  }
  
  input UpdateRouterInput {
    name: String
    connected: Boolean
    bt_active: Boolean
    registered: Boolean
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
