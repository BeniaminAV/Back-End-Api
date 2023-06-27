import { getComments } from "../controllers/comment-controllers"
import express from "express"

export default (router: express.Router) => {
  router.get("/comments", getComments)
}
