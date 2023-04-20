const express = require("express");
const router = express.Router();
const { createUser, findById } = require("../controllers/index");

router.post("/", async (req, res, next) => {
  try {
    await createUser(req);
    return res.render("index", { title: "Express" });
  } catch {
    return res.render("index", { title: "Something went wrong" });
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params.id;
  console.log(req.params.id);
  try {
    const user = await findById(id);
    return res
      .status(200)
      .send({ message: `user ${id} found successfully: ${user}` });
  } catch {}
});

module.exports = router;
