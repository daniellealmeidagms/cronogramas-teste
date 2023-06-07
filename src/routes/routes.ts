import { Router } from "express";
import  CursoController from "../controllers/controllerCurso"
import TurmaController from "../controllers/controllerTurma"
import UnidadeController from "../controllers/controllerUnidade"


const rotas = Router()

// Rota Principal
rotas.get("/", (request, response) => {
    return response.json("Home Page")
})

rotas.post("/curso", new CursoController().create)
rotas.get("/curso", new CursoController().readAll)
rotas.get("/curso", new CursoController().readOne)
rotas.put("/curso", new CursoController().update)
rotas.delete("/curso", new CursoController().delete)

rotas.post("/turma", new TurmaController().create)
rotas.get("/turma", new TurmaController().readAll)
rotas.get("/turma", new TurmaController().readOne)
rotas.put("/turma", new TurmaController().update)
rotas.delete("/turma", new TurmaController().delete)


rotas.post("/unidade", new UnidadeController().create)
rotas.get("/unidade", new UnidadeController().readAll)
rotas.get("/unidade", new UnidadeController().readOne)
rotas.put("/unidade", new UnidadeController().update)
rotas.delete("/unidade", new UnidadeController().delete)

export default rotas