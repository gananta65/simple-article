const Comment = require("../models/comment.model");

exports.postComment = async (req, res) => {
  const data = new Comment({
    id: req.body.id,
    article_id: req.body.article_id,
    content: req.body.content,
  });

  try {
    const dataToSave = await data.save();
    return res.status(200).json(dataToSave);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Comment.find();
    if (!data) {
      return res.status(404).json("There are no data");
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Comment.findOne({ id: id });
    if (!data) {
      return res.status(404).json("There are no data");
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Comment.findOne({ id: id });
    if (!data) {
      return res.status(404).json("There are no data");
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Comment.findOneAndUpdate(
      { id: id },
      updatedData,
      options
    );

    return res.send(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Comment.findOneAndDelete({ id: id });
    return res.send(`Comment with id ${data.id} has been deleted..`);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
