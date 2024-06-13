import Backend from '@/api';
import { IClient } from '@/core/model/Client';
import { useEffect, useState } from 'react';

export default function useClients() {
  const [isHome, setIsHome] = useState<boolean>(false);
  const [listClients, setListClients] = useState<IClient[]>([]);
  const [client, setClient] = useState<Partial<IClient> | null>({});

  async function saveForm() {
    if (!client) return;
    // salvar no banco de dados
    await Backend.clients.saveClient(client);
    const clients = await Backend.clients.getClients();
    setListClients(clients);
    setClient(null);
  }

  async function deleteClient() {
    if (!client || !client.id) return;
    // salvar no banco de dados
    await Backend.clients.deleteClient(client.id!);
    const clients = await Backend.clients.getClients();
    setListClients(clients);
    setClient(null);
  }

  useEffect(() => {
    Backend.clients.getClients().then(setListClients);
  }, []);

  useEffect(() => {
    if (client === null) {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [client])

  return {
    isHome,
    listClients,
    client,
    saveForm,
    deleteClient,
    cancel: () => setClient(null),
    changeClient: (client: Partial<IClient> | null) => setClient(client)
  }
}