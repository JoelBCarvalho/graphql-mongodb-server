import { mergeResolvers } from "merge-graphql-schemas";

import Routers from "./Routers/";
import Routers_Trackers from "./Routers_Trackers/";
import Scans from "./Scans/";
import Trackers from "./Trackers/";
import Rooms from "./Rooms/";
import Nodes from "./Nodes/";
import Maps from "./Maps/";

const resolvers = [
    Maps,
    Routers
];

export default mergeResolvers(resolvers);
