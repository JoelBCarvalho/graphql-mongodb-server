export default `
  scalar Date

  type Scans {
    _id: ID!
    node: Nodes!
    tracker: Trackers!
    rssi: Int!
    created: Date!
  }

  type Query {
    scan(_id: ID!): Scans!
    scans: [Scans!]!
  }

  type Mutation {
    createScan(scan: CreateScanInput): Scans!
    updateScan(_id: ID!, scan: UpdateScanInput): Scans!
    deleteScan(_id: ID!): Scans!
  }

  input CreateScanInput {
    node: ID!
    tracker: ID!
    rssi: Int!
  }
  
  input UpdateScanInput {
    node: ID!
    tracker: ID!
    rssi: Int!
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
