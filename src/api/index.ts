import saveClient from './saveClient'
import getClients from './getAllClients'
import deleteClient from './deleteClient'

export default class Backend {
  static readonly clients = {
    saveClient,
    getClients,
    deleteClient
  }
}