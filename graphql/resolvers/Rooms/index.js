import Rooms from "../../../server/models/Rooms";

export default {
  Query: {
    room: async (parent, { _id }, context, info) => {
      return await Rooms.findOne({ _id }).exec();
    },
    rooms: async (parent, args, context, info) => {
      const res = await Rooms.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        name: u.name,
        created: u.created
      }));
    }
  },
  Mutation: {
    createRoom: async (parent, { room }, context, info) => {
      const newRoom = await new Rooms({
        name: room.name
      });
      
      try {
        // const result = await newPost.save();
        const result = await new Promise((resolve, reject) => {
         newRoom.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
        
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateRoom: async (parent, { _id, room }, context, info) => {
      return new Promise((resolve, reject) => {
        Rooms.findByIdAndUpdate(_id, { $set: { ...room } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteRoom: async (parent, { _id }, context, info) => {
      try {
        // searching for creator of the post and deleting it from the list
        return new Promise((resolve, reject) => {
          Rooms.findByIdAndDelete(_id).exec((err, res) => {
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
