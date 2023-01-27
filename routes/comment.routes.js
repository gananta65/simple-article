const comment = require("../controllers/comment.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.post("/comment", comment.postComment);
  router.get("/comment", comment.getAll);
  router.get("/comment/:id", comment.getCommentById);
  router.patch("/comment/:id", comment.updateComment);
  router.delete("/comment/:id", comment.deleteComment);

  app.use("/api", router);
};
