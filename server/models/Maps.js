import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const MapsSchema = new Schema({
  node: {
    type: Schema.Types.ObjectId,
    ref: "Nodes"
  },
  point: {
    type: Number,
    required: true
  },
  min_rssi: {
    type: Number,
    required: true
  },
  max_rssi: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    required: true,
    default: Date.now
  }
});

MapsSchema.index( { node: 1, point: 1 }, { unique: true } )

export default mongoose.model("Maps", MapsSchema);
