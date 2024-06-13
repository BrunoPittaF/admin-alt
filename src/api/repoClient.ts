import { IClient } from '@/core/model/Client';
import { PrismaClient } from '@prisma/client';

export default class RepoClient {
  private static db: PrismaClient = new PrismaClient();

  static async list(): Promise<IClient[]> {
    return await this.db.client.findMany()
  }

  static async save(client: IClient): Promise<IClient> {
    //cria E edita
    return await this.db.client.upsert({
      where: { id: client.id },
      update: client,
      create: client
    })
  }

  static async listPerId(id: string): Promise<IClient | null> {
    return await this.db.client.findUnique({ where: { id } })
  }

  static async delete(id: string): Promise<void> {
    await this.db.client.delete({
      where: { id }
    })
  }



}