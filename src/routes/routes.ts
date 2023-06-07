import { Router } from "express"
import CursoController from "../controllers/controllerCurso"
import CursoUnidades from "../controllers/controllerUnidade"

const rotas = Router()

//Rotas Principal
rotas.get("/", (request, response) => {return response.json("Home Page")})

//Rotas Cursos
rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id", new CursoController().readOne)
rotas.get("/cursos/:id", new CursoController().update)
rotas.delete("/cursos/:id", new CursoController().delete)

//Rotas Unidades
rotas.post("/unidade", new CursoController().create)
rotas.get("/unidades", new CursoController().readAll)
rotas.get("/unidades/:id", new CursoController().readOne)
rotas.get("/unidades/:id", new CursoController().update)
rotas.delete("/unidades/:id", new CursoController().delete)

//Rotas Turmas
rotas.post("/turmas", new CursoController().create)
rotas.get("/turmas", new CursoController().readAll)
rotas.get("/turmas/:id", new CursoController().readOne)
rotas.get("/turmas/:id", new CursoController().update)
rotas.delete("/turmas/:id", new CursoController().delete)

export default rotas


