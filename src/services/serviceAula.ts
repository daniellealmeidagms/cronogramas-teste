import { AppDataSource } from "../databases/connections/datasourceDev"
import Aula from "../databases/models/aula"
import Curso from "../databases/models/aula"

// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor

const cursor = AppDataSource.getRepository(Aula)

// 2) Recebe dados da Requisição HTTP lá do FRONTEND

type newCursoRequest = {
    data_aula: Date
    status_aula: string
    fk_turma: string
    fk_unidade: string
}

type updateCursoRequest = {
    id_aula: string
    data_aula: Date
    status_aula: string
    fk_turma: string
    fk_unidade: string
}

type findOneCursoRequest = {
  id_aula: string
}

// 3) Funções CRUD

export class AulaService {
  async create({
    data_aula,
    status_aula,
    fk_turma,
    fk_unidade,
  }: newCursoRequest): Promise<Aula | Error> {
    if (await cursor.findOne({ where: { data_aula } })) {
      return new Error("Aula já ministrada!")
    }

    const aula = cursor.create({
        data_aula,
        status_aula,
        fk_turma,
        fk_unidade,
    })

    await cursor.save(aula)

    return aula
  }

  async readAll() {
    const aulas = await cursor.find()
    return aulas
  }

  async readOne({ id_aula }: findOneAulaRequest): Promise<Aula | Error> {
    const aula = await cursor.findOne({ where: { id_aula } })
    if (!aula) {
      return new Error("Aula não encontrado!")
    }
    return aula
  }

  async update({
    id_aula,
    data_aula,
    status_aula,
    fk_turma,
    fk_unidade,
  }: updateAulaRequest): Promise<Aula | Error> {
    const aula = await cursor.findOne({ where: { id_aula } })
    if (!aula) {
      return new Error("aula não encontrada!")
    }

    curso.descricao_curso = descricao_curso
      ? descricao_curso
      : curso.descricao_curso
    curso.carga_horaria_curso = carga_horaria_curso
      ? carga_horaria_curso
      : curso.carga_horaria_curso
    curso.modalidade = modalidade ? modalidade : curso.modalidade
    curso.eixo = eixo ? eixo : curso.eixo

    await cursor.save(curso)

    return curso
  }

  async delete({ id_curso }: findOneCursoRequest): Promise<String | Error> {
    const curso = await cursor.findOne({ where: { id_curso } })
    if (!curso) {
      return new Error("Curso não encontrado!")
    }
    await cursor.delete(curso.id_curso)
    return "Curso excluído com sucesso!"
  }
}
