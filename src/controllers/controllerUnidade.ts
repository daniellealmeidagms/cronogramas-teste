import { Request, Response } from "express"
import { UnidadeService } from "../services/serviceUnidade"

const service = new UnidadeService()

export default class UnidadeController {
  async create(request: Request, response: Response) {
    const {  fk_curso, descricao_unidade, carga_horaria_unidade, ordem } =
      request.body

    const result = await service.create({
        fk_curso,
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
    })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async readAll(response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.json("Nenhum curso cadastrado!")
    }
    return response.json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_unidade } = request.params
    const result = await service.readOne({ id_unidade })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async update(request: Request, response: Response) {
    const { id_unidade } = request.params
    const { fk_curso, descricao_unidade, carga_horaria_unidade, ordem } =
      request.body
    const result = await service.update({
        id_unidade,
        fk_curso,
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
    })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_unidade } = request.params
    const result = await service.delete({ id_unidade })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }
  
}
