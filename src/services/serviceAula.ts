import { AppDataSource } from "../databases/connections/data-source"
import Aula from "../databases/models/aula"

// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor
const cursor = AppDataSource.getRepository(Aula)

// 2) Recebe dados da Requisição HTTP lá do FRONTEND
type newAulaRequest = {
  data_aula,
  status_aula,
}

type updateAulaRequest = {
  id_aula: string,
  data_aula: Date,
  status_aula: string,  
}

type findOneAulaRequest = {
  id_aula: string
}

// 3) Funções CRUD
export class AulaService {
  async create({
    data_aula,
    status_aula,

  }: newAulaRequest): Promise<Aula | Error> {
    if (await cursor.findOne({ where: { data_aula } })) {
      return new Error("Aula já cadastrado!")
    }

    const aula = cursor.create({
      data_aula,
      status_aula,
    })

    await cursor.save(aula)

    return aula
  }

  async readAll() {
    const aula = await cursor.find()
    return aula
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
  }: updateAulaRequest): Promise<Aula | Error> {
    const aula = await cursor.findOne({ where: { id_aula } })
    if (!aula) {
      return new Error("Aula não encontrado!")
    }

    aula.data_aula = data_aula
      ? data_aula
      : aula.data_aula
    aula.status_aula = status_aula
      ? status_aula
      : aula.status_aula
    
    await cursor.save(aula)
    return aula
  }

  async delete({ id_aula }: findOneAulaRequest): Promise<String | Error> {
    const aula = await cursor.findOne({ where: { id_aula } })
    if (!aula) {
      return new Error("Aula não encontrado!")
    }
    await cursor.delete(aula.id_aula)
    return "Aula excluída com sucesso!"
  }
}
