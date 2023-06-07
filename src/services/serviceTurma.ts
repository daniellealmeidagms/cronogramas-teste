import { AppDataSource } from "../databases/connections/data-source"
import Turma from "../databases/models/turma"

// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor

const cursor = AppDataSource.getRepository(Turma)

// 2) Recebe dados da Requisição HTTP lá do FRONTEND

type newTurmaRequest = {
<<<<<<< HEAD
  id_turma: string
  data_inicio: Date
  data_fim: Date
  horas_aula_dia: number
  fk_curso: string
}

type updateTurmaRequest = {
  id_turma: string
  data_inicio: Date
  data_fim: Date
  horas_aula_dia: number
  fk_curso: string
}

type findOneTurmaRequest = {
  id_turma: string
=======
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
>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119
}

// 3) Funções CRUD

export class TurmaService {
<<<<<<< HEAD
  async create({
    id_turma,
    data_inicio,
    data_fim,
    horas_aula_dia,
    fk_curso,
  }: newTurmaRequest): Promise<Turma | Error> {
    if (await cursor.findOne({ where: { id_turma } })) {
      return new Error("Turma já cadastrada!")
    }

    const turma = cursor.create({
      data_inicio,
      data_fim,
      horas_aula_dia,
      fk_curso,
=======
    
  async create({
    fk_curso,
    data_inicio,
    data_fim,
    horas_aula_dia,
    }: newTurmaRequest): Promise<Turma | Error> {
    if (await cursor.findOne({ where: { fk_curso } })) {
    return new Error("Turma já cadastrada!")
    }

    const turma = cursor.create({
        data_inicio,
        data_fim,
        horas_aula_dia,
        fk_curso,
>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119
    })

    await cursor.save(turma)

    return turma
  }

  async readAll() {
    const turma = await cursor.find()
    return turma
  }

  async readOne({ id_turma }: findOneTurmaRequest): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrada!")
    }
    return turma
  }

  async update({
    id_turma,
<<<<<<< HEAD
    data_inicio,
    data_fim,
    horas_aula_dia,
    fk_curso,
  }: updateTurmaRequest): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrada!")
    }

    turma.data_inicio = data_inicio
      ? data_inicio
      : turma.data_inicio
    turma.data_fim = data_fim
      ? data_fim
      : turma.data_fim
    turma.horas_aula_dia = horas_aula_dia ? horas_aula_dia: turma.horas_aula_dia
    
    await cursor.save(turma)

    return turma
  }
=======
    fk_curso,
    data_inicio,
    data_fim,
    horas_aula_dia,
  }: updateTurmaRequest): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Cliente não encontrado!")
    }

    turma.id_turma = id_turma
    ? id_turma
    : turma.id_turma
    turma.fk_curso = fk_curso
    ? fk_curso
    : turma.id_turma
    turma.data_inicio = data_inicio
    ? data_inicio
    : turma.data_inicio
    turma.data_fim = data_fim ? data_fim : turma.data_fim
    turma.horas_aula_dia = horas_aula_dia ? horas_aula_dia : turma.horas_aula_dia
}
>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119

  async delete({ id_turma }: findOneTurmaRequest): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
<<<<<<< HEAD
      return new Error("Turma não encontrada!")
=======
      return new Error("Turma não encontrado!")
>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119
    }
    await cursor.delete(turma.id_turma)
    return turma
  }
}
<<<<<<< HEAD
=======

>>>>>>> 8970e48737f052fcae0f597fc3b07ba04d3fe119
