import { All_Posts } from "../data/post-data"
import { Request, Response } from "express"

export const getPosts = (req: Request, res: Response) => {
  res.json(All_Posts)
}
