import { AppDataSource } from "../databases/connections/data-source"
import Turma from "../databases/models/turma"

// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor

const cursor = AppDataSource.getRepository(Turma)

// 2) Recebe dados da Requisição HTTP lá do FRONTEND

type newTurmaRequest = {
    id_turma: string
    fk_curso: string
    data_inicio: Date
    data_fim: Date
    horas_aula_dia: Number
}

type updateTurmaRequest = {
    id_turma: string
    fk_curso: string
    data_inicio: Date
    data_fim: Date
    horas_aula_dia: Number
}

type findOneTurmaRequest = {
id_turma: string
}

// 3) Funções CRUD

export class TurmaService {
  async create({
    id_turma,
    fk_curso,
    data_inicio,
    data_fim,
    horas_aula_dia,
  }: newTurmaRequest): Promise<Turma | Error> {
    if (await cursor.findOne({ where: { id_turma } })) {
    return new Error("Turma já cadastrado!")
    }

    const turma = cursor.create({
        id_turma,
        fk_curso,
        data_inicio,
        data_fim,
        horas_aula_dia,
    })

    await cursor.save(turma)

    return turma
  }

  async readAll() {
    const turmas = await cursor.find()
    return turmas
  }

  async readOne({ id_turma }: findOneTurmaRequest): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrado!")
    }
    return turma
  }

  async update({
    id_turma,
    fk_curso,
    data_inicio,
    data_fim,
    horas_aula_dia,
  }: updateTurmaRequest): Promise<Turma| Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrado!")
    }

    turma.data_inicio = data_inicio
      ? data_inicio
      : turma.data_inicio
    turma.data_inicio = data_inicio
      ? data_inicio
      : turma.data_inicio
    turma.data_inicio = data_fim ? data_fim : turma.data_inicio
    turma.data_inicio = data_inicio ? data_inicio : turma.data_inicio

    await cursor.save(turma)

    return turma
  }

  async delete({ id_turma }: findOneTurmaRequest): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrado!")
    }
    await cursor.delete(turma.id_turma)
    return turma
  }
}
