import Maps from "../../../server/models/Maps";

export default {
  Query: {
    map: async (parent, { _id }, context, info) => {
      return await Maps.findOne({ _id }).exec();
    },
    maps: async (parent, args, context, info) => {
      const res = await Maps.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        node: u.node,
        point: u.point,
        min_rssi: u.min_rssi,
        max_rssi: u.max_rssi,
        created: u.created
      }));
    }
  },
  Mutation: {
    createMap: async (parent, { map }, context, info) => {
      const newMap = await new Maps({
        node: map.node,
        point: map.point,
        min_rssi: map.min_rssi,
        max_rssi: map.max_rssi
      });
      
      try {
        // const result = await newPost.save();
        const result = await new Promise((resolve, reject) => {
          newMap.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
        
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateMap: async (parent, { _id, map }, context, info) => {
      return new Promise((resolve, reject) => {
        Maps.findByIdAndUpdate(_id, { $set: { ...map } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteMap: async (parent, { _id }, context, info) => {
      try {
        // searching for creator of the post and deleting it from the list
        return new Promise((resolve, reject) => {
          Maps.findByIdAndDelete(_id).exec((err, res) => {
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
