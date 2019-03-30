export default `
  scalar Date

  type Nodes {
    _id: ID!
    room: Rooms!
    router: Routers
    rfid: String
    created: Date!
  }

  type Query {
    node(_id: ID!): Nodes!
    nodes: [Nodes!]!
  }

  type Mutation {
    createNode(node: CreateNodeInput): Nodes!
    updateNode(_id: ID!, node: UpdateNodeInput): Nodes!
    deleteNode(_id: ID!): Nodes!
  }

  input CreateNodeInput {
    _id: ID!
    rfid: String
  }
  
  input UpdateNodeInput {
    room: ID!
    router: ID!
    rfid: String
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
