import { mergeTypes } from "merge-graphql-schemas";

import Routers from "./Routers/";
import Routers_Trackers from "./Routers_Trackers/";
import Scans from "./Scans/";
import Trackers from "./Trackers/";
import Rooms from "./Rooms/";
import Nodes from "./Nodes/";
import Maps from "./Maps/";

const typeDefs = [
    Maps, 
    Nodes, 
    Rooms, 
    Routers, 
    Routers_Trackers, Scans, 
    Trackers
];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypes(typeDefs, { all: true });
