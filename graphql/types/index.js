import { mergeTypes } from "merge-graphql-schemas";

import Maps from "./Maps/";
import Routers from "./Routers/";
import Nodes from "./Nodes/";
import Rooms from "./Rooms/";
import Routers_Trackers from "./Routers_Trackers/";
import Scans from "./Scans/";
import Trackers from "./Trackers/";

const typeDefs = [
    Maps, 
    Routers,
    Nodes,
    Rooms,
    Routers_Trackers,
    Scans,
    Trackers
];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypes(typeDefs, { all: true });
