import { Request, Response } from "express"
import {TurmaService} from "../services/serviceTurma"

const service = new TurmaService()

export default class TurmaController {
  async create(request: Request, response: Response) {
    const { id_turma, data_inicio, data_fim, horas_aula_dia, fk_curso } =
      request.body

    const result = await service.create({
      id_turma,
      data_inicio,
      data_fim,
      horas_aula_dia,
      fk_curso,
    })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async readAll(response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.json("Nenhuma turma cadastrada!")
    }
    return response.json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_turma } = request.params
    const result = await service.readOne({ id_turma })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async update(request: Request, response: Response) {
    const { id_turma } = request.params
    const { data_inicio, data_fim, horas_aula_dia, fk_curso } =
      request.body
    const result = await service.update({
      id_turma,
      data_inicio,
      data_fim,
      horas_aula_dia,
      fk_curso,
    })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_turma } = request.params
    const result = await service.delete({ id_turma })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }
  
}