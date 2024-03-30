let users = [{ id: "1", username: "John", age: 30 }];

module.exports = {
  create: ({ username, age }) => {
    const newUser = {
      id: String(Date.now()),
      username,
      age,
    };

    if (!users.find((user) => user.username === username)) {
      users.push(newUser);
    } else {
      throw new Error("User already exists");
    }

    return newUser;
  },
  removeById: ({ id }) => {
    const userIndex = users.findIndex((user) => {
      return user.id === id;
    });

    if (userIndex === -1) {
      throw new Error("User not found");
    }

    users.splice(userIndex, 1);

    return id;
  },
  removeByUsername: ({ username }) => {},
  getAll: () => {
    return users;
  },
  getById: ({ id }) => {
    return users.find((user) => user.id === id);
  },
};
