import Scans from "../../../server/models/Scans";

export default {
  Query: {
    scan: async (parent, { _id }, context, info) => {
      return await Scans.findOne({ _id }).exec();
    },
    scans: async (parent, args, context, info) => {
      const res = await Scans.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        node: u.activation_link,
        tracker: u.name,
        rssi: u.connected,
        created: u.bt_active,
        scan_date: u.registered
      }));
    }
  },
  Mutation: {
    createScan: async (parent, { scan }, context, info) => {
      const newScan = await new Scans({
        node: u.activation_link,
        tracker: u.name,
        rssi: u.connected,
        scan_date: u.registered
      });
      
      try {
        // const result = await newPost.save();
        const result = await new Promise((resolve, reject) => {
         newScan.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
        
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateScan: async (parent, { _id, scan }, context, info) => {
      return new Promise((resolve, reject) => {
        Scans.findByIdAndUpdate(_id, { $set: { ...scan } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteScan: async (parent, { _id }, context, info) => {
      try {
        // searching for creator of the post and deleting it from the list
        return new Promise((resolve, reject) => {
          Scans.findByIdAndDelete(_id).exec((err, res) => {
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
