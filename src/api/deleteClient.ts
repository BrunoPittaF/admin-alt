'use server';

import RepoClient from './repoClient';

export default async function deleteClient(id: string) {
  return RepoClient.delete(id)
}