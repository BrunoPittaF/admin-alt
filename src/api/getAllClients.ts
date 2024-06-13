'use server';

import RepoClient from './repoClient';

export default async function getClients() {

  return RepoClient.list()
}