export default `
  scalar Date

  type Maps {
    _id: ID!
    node: Nodes!
    point: Int!
    min_rssi: Int!
    max_rssi: Int!
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
    node: ID!
    point: Int
    min_rssi: Int
    max_rssi: Int
  }
  
  input UpdateMapInput {
    node: ID!
    point: Int
    min_rssi: Int
    max_rssi: Int
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
