import { IClient } from '@/core/model/Client';
import { useEffect, useState } from 'react';

export default function useClients() {
  const [isHome, setIsHome] = useState<boolean>(false);
  const [listClients, setListClients] = useState<IClient[]>([]);
  const [client, setClient] = useState<Partial<IClient> | null>({
    payFull: false
  });

  async function saveForm() {
    if (!client) return;
    // salvar no banco de dados
    // await Backend.clients.saveClient(client);
    await fetch('/api/client', {
      method: 'POST',
      body: JSON.stringify(client)
    })
    const response = await fetch('/api/client');
    const clients = await response.json()
    setListClients(clients);
    setClient(null);
  }

  async function editForm() {
    if (!client) return;
    // salvar no banco de dados

    await fetch('/api/client', {
      method: 'PUT',
      body: JSON.stringify(client)
    })
    const response = await fetch('/api/client');
    const clients = await response.json()
    setListClients(clients);
    setClient(null);
  }

  async function deleteClient() {
    if (!client || !client.id) return;
    // salvar no banco de dados
    await fetch('/api/client', {
      method: 'DELETE',
      body: JSON.stringify({ id: client.id })
    })
    const response = await fetch('/api/client');
    const clients = await response.json()
    setListClients(clients);
    setClient(null);
  }

  function changeClient(client: Partial<IClient> | null) {
    setClient(client);
  }

  useEffect(() => {
    async function getAllClients() {
      const response = await fetch('/api/client');
      const clients = await response.json()
      setListClients(clients)
    }
    getAllClients()
  }, []);

  useEffect(() => {
    if (client === null) {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [client])

  return {
    editForm,
    isHome,
    listClients,
    client,
    saveForm,
    deleteClient,
    cancel: () => setClient(null),
    changeClient
  }
}