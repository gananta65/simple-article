const article = require("../controllers/article.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.post("/article", article.postArticle);
  router.get("/article", article.getAll);
  router.get("/article/:id", article.getArticleById);
  router.patch("/article/:id", article.updateArticle);
  router.delete("/article/:id", article.deleteArticle);

  app.use("/api", router);
};
