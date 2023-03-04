const express = require("express");
const { getSinglePost, getPost, updatePost, addPost, deletePost } = require("../controller/post.controller");
const { AdminRoleAuth } = require("../middleware/admin.middleware");
const { Authenticator } = require("../middleware/authentication.middleware");

const postRouter = express.Router();

// /post -- GET/user ==> To get post data.
postRouter.get("/",Authenticator, getPost);

// /post/:id -- GET/user ==> To get single post data.

postRouter.get("/:id",Authenticator, getSinglePost);

// /post/:id -- PATCH/admin ==> To post data.

postRouter.patch("/:id",Authenticator, updatePost);

//  /post -- POST/admin ==> To add new post data.

postRouter.post("/",Authenticator, addPost);

// /post/:id -- DELETE/admin ==> To delete single post data.

postRouter.delete("/:id",Authenticator, deletePost);

module.exports = { postRouter };