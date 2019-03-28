import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const TrackersSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  mac: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true,
    default: Date.now
  }
});

TrackersSchema.index( { mac: 1 }, { unique: true } )

export default mongoose.model("Trackers", TrackersSchema);
