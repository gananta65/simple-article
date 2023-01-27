const Article = require("../models/article.model");
const Comment = require("../models/comment.model");

exports.postArticle = async (req, res) => {
  const data = new Article({
    id: req.body.id,
    title: req.body.title,
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
    const data = await Article.find();
    if (!data) {
      return res.status(404).json("There are no data");
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Article.findOne({ id: id });
    const comment = await Comment.find({ article_id: data.id });
    if (!data) {
      return res.status(404).json("There are no data");
    }
    return res.status(200).json({ data, comment });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Article.findOneAndUpdate(
      { id: id },
      updatedData,
      options
    );

    return res.send(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Article.findOneAndDelete({ id: id });
    return res.send(`Article named ${data.title} has been deleted..`);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
