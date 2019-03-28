import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const NodesSchema = new Schema({
  room: {
    type: Schema.Types.ObjectId,
    ref: "Rooms"
  },
  router: {
    type: Schema.Types.ObjectId,
    ref: "Routers"
  },
  rfid: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true,
    default: Date.now
  }
});

NodesSchema.index( { rfid: 1 }, { unique: true } )

export default mongoose.model("Nodes", NodesSchema);
