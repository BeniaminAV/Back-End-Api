import { All_Comments } from "../data/comment-data"
import { Request, Response } from "express"

export const getComments = (req: Request, res: Response) => {
  res.json(All_Comments)
}
