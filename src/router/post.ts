import express from "express"
import { getPosts } from "../controllers/post-controllers"

export default (router: express.Router) => {
  router.get("/posts", getPosts)
}
