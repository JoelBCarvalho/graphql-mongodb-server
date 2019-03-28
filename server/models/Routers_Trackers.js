import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const RoutersTrackersSchema = new Schema({
  routers: {
    type: Schema.Types.ObjectId,
    ref: "Routers",
    required: true
  },
  trackers: {
    type: Schema.Types.ObjectId,
    ref: "Trackers",
    required: true
  },
  created: {
    type: Date,
    required: true,
    default: Date.now
  }
});

RoutersTrackersSchema.index( { routers: 1, trackers: 1 }, { unique: true } )

export default mongoose.model("Routers_Trackers", RoutersTrackersSchema);
