import { Router, response } from "express";
import CursoController from "../controllers/controllerCurso";
import TurmaController from "../controllers/controllerTurma";
import UnidadeController from "../controllers/controllerUnidade";


const rotas = Router()

// Rota Principal
rotas.get("/", (request, response) => {
  return response.json("Home Page")
})

// Rota Cursos
rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id", new CursoController().readOne)
rotas.put("/cursos/:id", new CursoController().update)
rotas.delete("/cursos/:id", new CursoController().delete)

// Rota Turma
rotas.post("/turma", new TurmaController().create)
rotas.get("/turma", new TurmaController().readAll)
rotas.get("/turma/:id", new TurmaController().readOne)
rotas.put("/turma/:id", new TurmaController().update)
rotas.delete("/turma/:id", new TurmaController().delete)

// Rota Unidade
rotas.post("/unidade", new TurmaUnidade().create)
rotas.get("/unidade", new TurmaUnidade().readAll)
rotas.get("/unidade/:id", new TurmaUnidade().readOne)
rotas.put("/unidade/:id", new TurmaUnidade().update)
rotas.delete("/unidade/:id", new TurmaUnidade().delete)

export default rotas