const userModel = require("./model");

module.exports = {
  getAll: (req, res) => {
    return res.render("users.hbs", {
      users: userModel.getAll(),
    });
  },
  create: (req, res) => {
    try {
      const { username, age } = req.body;

      if (!username || !age) {
        throw new Error("Username and age are required");
      }

      userModel.create({ username, age });

      return res.redirect("/users");
    } catch (e) {
      return res.render("user-error.hbs", {
        message: e.message,
      });
    }
  },
  removeById: (req, res) => {
    try {
      const id = req.query.id;

      if (!id) {
        throw new Error("Id is required");
      }

      userModel.removeById({ id });

      //   res.render("users-view.hbs", {
      //     users: userModel.getAll(),
      //   });
    } catch (e) {
      return res.render("user-error.hbs", {
        message: e.message,
      });
    }
  },
};
