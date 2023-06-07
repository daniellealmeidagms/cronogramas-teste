import { AppDataSource } from "./databases/connections/data-source"
import rotas from "./routes/routes"
<<<<<<< HEAD
=======

>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119
AppDataSource.initialize()

const express = require("express")
const app = express()
app.use(express.json())
app.use(rotas)
<<<<<<< HEAD

app.get("/", (request, response) => {
  return response.json("E ai, suave?")
})
=======
>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119

app.listen(3333, () => console.log("O server esta ON na porta 3333."))
