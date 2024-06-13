'use server';

import { IClient } from '@/core/model/Client';
import Id from '@/core/model/utils/id';
import RepoClient from './repoClient';

export default async function saveClient(client: Partial<IClient>) {
  const newClient = {
    ...client,
    id: client.id ?? Id.new
  }

  return RepoClient.save(newClient as IClient)
}