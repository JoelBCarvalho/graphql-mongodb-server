import Routers_Trackers from "../../../server/models/Routers_Trackers";

export default {
  Query: {
    routers_Tracker: async (parent, { _id }, context, info) => {
      return await Routers_Trackers.findOne({ _id }).exec();
    },
    routers_Trackers: async (parent, args, context, info) => {
      const res = await Routers_Trackers.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        routers: u.routers,
        trackers: u.trackers,
        created: u.created
      }));
    }
  },
  Mutation: {
    createRouters_Tracker: async (parent, { routers_Tracker }, context, info) => {
      const newRouters_Tracker = await new Routers_Trackers({
        routers: u.routers,
        trackers: u.trackers
      });
      
      try {
        // const result = await newPost.save();
        const result = await new Promise((resolve, reject) => {
         newRouters_Tracker.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
        
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateRouters_Tracker: async (parent, { _id, routers_Tracker }, context, info) => {
      return new Promise((resolve, reject) => {
        Routers_Trackers.findByIdAndUpdate(_id, { $set: { ...routers_Tracker } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteRouters_Tracker: async (parent, { _id }, context, info) => {
      try {
        // searching for creator of the post and deleting it from the list
        return new Promise((resolve, reject) => {
          Routers_Trackers.findByIdAndDelete(_id).exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
};
