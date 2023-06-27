import express from "express"
import post from "./post"
import comment from "./comment"

const router = express.Router()

export default (): express.Router => {
  post(router)
  comment(router)
  return router
}
