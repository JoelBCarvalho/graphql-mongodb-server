import Trackers from "../../../server/models/Trackers";

export default {
  Query: {
    tracker: async (parent, { _id }, context, info) => {
      return await Trackers.findOne({ _id }).exec();
    },
    trackers: async (parent, args, context, info) => {
      const res = await Trackers.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        name: u.name,
        mac: u.mac,
        created: u.created
      }));
    }
  },
  Mutation: {
    createTracker: async (parent, { tracker }, context, info) => {
      const newTracker = await new Trackers({
        name: tracker.name,
        mac: tracker.mac
      });
      
      try {
        // const result = await newPost.save();
        const result = await new Promise((resolve, reject) => {
         newTracker.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
        
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateTracker: async (parent, { _id, tracker }, context, info) => {
      return new Promise((resolve, reject) => {
        Trackers.findByIdAndUpdate(_id, { $set: { ...tracker } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteTracker: async (parent, { _id }, context, info) => {
      try {
        // searching for creator of the post and deleting it from the list
        return new Promise((resolve, reject) => {
          Trackers.findByIdAndDelete(_id).exec((err, res) => {
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
