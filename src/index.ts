import express from "express"
import router from "./router"

const app = express()
const port = 5000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Server")
})

app.listen(5000, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})

app.use("/", router())
