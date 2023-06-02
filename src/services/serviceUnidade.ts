import { AppDataSource } from "../databases/connections/data-source"
import Unidade from "../databases/models/unidade"

// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor

const cursor = AppDataSource.getRepository(Unidade)

// 2) Recebe dados da Requisição HTTP lá do FRONTEND

type newUnidadeRequest = {
  fk_curso: string
  descricao_unidade: string
  carga_horaria_unidade: number
  ordem: number
}

type updateUnidadeRequest = {
  id_unidade: string
  fk_curso: string
  descricao_unidade: string
  carga_horaria_unidade: number
  ordem: number
}

type findOneUnidadeRequest = {
  id_unidade: string
}

// 3) Funções CRUD

export class UnidadeService {
  async create({
    fk_curso,
    descricao_unidade,
    carga_horaria_unidade,
    ordem,

  }: newUnidadeRequest): Promise<Unidade | Error> {
    if (await cursor.findOne({ where: { descricao_unidade } })) {
      return new Error("Unidade já cadastrado!")
    }

    const unidade = cursor.create({
        fk_curso,
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
    })

    await cursor.save(unidade)

    return unidade
  }

  async readAll() {
    const unidade = await cursor.find()
    return unidade
  }

  async readOne({ id_unidade }: findOneUnidadeRequest): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("Unidade não encontrado!")
    }
    return unidade
  }

  async update({
    id_unidade,
    fk_curso,
    descricao_unidade,
    carga_horaria_unidade,
    ordem,
    }: updateUnidadeRequest): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("Unidade não encontrado!")
    }

    unidade.fk_curso = fk_curso
      ? descricao_unidade
      : unidade.descricao_unidade

    unidade.descricao_unidade = descricao_unidade
      ? descricao_unidade
      : unidade.descricao_unidade

    unidade.carga_horaria_unidade = carga_horaria_unidade
      ? carga_horaria_unidade
      : unidade.carga_horaria_unidade

      unidade.ordem = ordem
      ? ordem
      : unidade.ordem

    await cursor.save(unidade)

    return unidade
  }

  async delete({ id_unidade }: findOneUnidadeRequest): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("Unidade não encontrado!")
    }
    await cursor.delete(unidade.id_unidade)
    return unidade
  }
}
