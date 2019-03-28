import Routers from "../../../server/models/Routers";

export default {
  Query: {
    router: async (parent, { activation_link }, context, info) => {
      return await Routers.findOne({ activation_link }).exec();
    },
    routers: async (parent, args, context, info) => {
      const res = await Routers.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        activation_link: u.activation_link,
        name: u.name,
        connected: u.connected,
        bt_active: u.bt_active,
        regsitered: u.registered,
        created: u.created
      }));
    }
  },
  Mutation: {
    createRouter: async (parent, { router }, context, info) => {
      const newRouter = await new Routers({
        activation_link: router.activation_link
      });
      
      try {
        // const result = await newPost.save();
        const result = await new Promise((resolve, reject) => {
         newRouter.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
        
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateRouter: async (parent, { _id, router }, context, info) => {
      return new Promise((resolve, reject) => {
        Routers.findByIdAndUpdate(_id, { $set: { ...router } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteRouter: async (parent, { _id }, context, info) => {
      try {
        // searching for creator of the post and deleting it from the list
        return new Promise((resolve, reject) => {
          Routers.findByIdAndDelete(_id).exec((err, res) => {
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
