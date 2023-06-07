<<<<<<< HEAD
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
=======
import { Router } from "express"
import CursoController from "../controllers/controllerCurso"
import TurmaController from "../controllers/controllerTurma"
import UnidadeController from "../controllers/controllerUnidade"

const rotas = Router()

rotas.get("/", (request, response) => {
    return response.json("home page")
})

//Curso
>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119
rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id", new CursoController().readOne)
rotas.put("/cursos/:id", new CursoController().update)
rotas.delete("/cursos/:id", new CursoController().delete)

<<<<<<< HEAD
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
=======
//Turma
rotas.post("/turmas", new TurmaController().create)
rotas.get("/turmas", new TurmaController().readAll)
rotas.get("/turmas/:id", new TurmaController().readOne)
rotas.put("/turmas/:id", new TurmaController().update)
rotas.delete("/turmas/:id", new TurmaController().delete)

//Unidade
rotas.post("/Unidades", new UnidadeController().create)
rotas.get("/Unidades", new UnidadeController().readAll)
rotas.get("/Unidades/:id", new UnidadeController().readOne)
rotas.put("/Unidades/:id", new UnidadeController().update)
rotas.delete("/Unidades/:id", new UnidadeController().delete)

export default rotas
>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119
