export default `
  scalar Date

  type Rooms {
    _id: ID!
    name: String!
    created: Date!
  }

  type Query {
    room(_id: ID!): Rooms!
    rooms: [Rooms!]!
  }

  type Mutation {
    createRoom(room: CreateRoomInput): Rooms!
    updateRoom(_id: ID!, room: UpdateRoomInput): Rooms!
    deleteRoom(_id: ID!): Rooms!
  }

  input CreateRoomInput {
    name: String!
  }
  
  input UpdateRoomInput {
    name: String!
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
