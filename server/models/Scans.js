import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const ScansSchema = new Schema({
  node: {
    type: Schema.Types.ObjectId,
    ref: "Nodes"
  },
  tracker: {
    type: Schema.Types.ObjectId,
    ref: "Trackers"
  },
  rssi: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    required: true,
    default: Date.now
  },
  scan_date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

export default mongoose.model("Scans", ScansSchema);
