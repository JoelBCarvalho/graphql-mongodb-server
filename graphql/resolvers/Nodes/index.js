import Nodes from "../../../server/models/Nodes";

export default {
  Query: {
    node: async (parent, { _id }, context, info) => {
      return await Nodes.findOne({ _id }).exec();
    },
    nodes: async (parent, args, context, info) => {
      const res = await Nodes.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        room: u.room,
        router: u.router,
        rfid: u.rfid,
        created: u.created
      }));
    }
  },
  Mutation: {
    createNode: async (parent, { node }, context, info) => {
      const newNode = await new Nodes({
        rfid: u.rfid
      });
      
      try {
        // const result = await newPost.save();
        const result = await new Promise((resolve, reject) => {
         newNode.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
        
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateNode: async (parent, { _id, node }, context, info) => {
      return new Promise((resolve, reject) => {
        Nodes.findByIdAndUpdate(_id, { $set: { ...node } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteNode: async (parent, { _id }, context, info) => {
      try {
        // searching for creator of the post and deleting it from the list
        return new Promise((resolve, reject) => {
          Nodes.findByIdAndDelete(_id).exec((err, res) => {
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
