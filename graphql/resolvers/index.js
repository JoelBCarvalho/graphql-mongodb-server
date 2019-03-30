import { mergeResolvers } from "merge-graphql-schemas";

import Maps from "./Maps/";
import Routers from "./Routers/";
import Nodes from "./Nodes/";
import Rooms from "./Rooms/";
import Routers_Trackers from "./Routers_Trackers/";
import Scans from "./Scans/";
import Trackers from "./Trackers/";

const resolvers = [
    Maps,
    Routers,
    Nodes,
    Rooms,
    Routers_Trackers,
    Scans,
    Trackers
];

export default mergeResolvers(resolvers);
