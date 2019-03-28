export default `
  scalar Date

  type Maps {
    _id: ID!
    node: Nodes!
    point: Number!
    min_rssi: Number!
    max_rssi: Number!
    created: Date!
  }

  type Query {
    map(_id: ID!): Maps!
    maps: [Maps!]!
  }

  type Mutation {
    createMap(map: CreateMapInput): Maps!
    updateMap(_id: ID!, map: UpdateMapInput): Maps!
    deleteMap(_id: ID!): Maps!
  }

  input CreateMapInput {
    node: Nodes
    point: Number
    min_rssi: Number
    max_rssi: Number
  }
  
  input UpdateMapInput {
    node: Nodes
    point: Number
    min_rssi: Number
    max_rssi: Number
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
