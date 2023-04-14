const toDoModel = require("../models/toDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await toDoModel.find();
  res.send(toDo);
};

// SaveTodo
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  toDoModel.create({ text }).then((data) => {
    console.log("added successfully");
    console.log(data);
    res.send(data);
  });
};

// UpdateTodo
module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  toDoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated sucessfully"))
    .catch((err) => console.log(err));
};

// deleteTodo
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  toDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("deleted sucessfully"))
    .catch((err) => console.log(err));
};
