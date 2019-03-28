import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const RoutersSchema = new Schema({
  activation_link: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  connected: {
    type: Boolean,
    required: true,
    default: false
  },
  bt_active: {
    type: Boolean,
    required: true,
    default: false
  },
  registered: {
    type: Boolean,
    required: true,
    default: false
  },
  created: {
    type: Date,
    required: true,
    default: Date.now
  }
});

RoutersSchema.index( { "activation_link": 1 }, { unique: true } )

export default mongoose.model("Routers", RoutersSchema);
