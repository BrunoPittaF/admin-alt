import LineClient from './lineClient';
import { IClient } from '@/core/model/Client';
import styles from '@/app/listClients.module.css';
import { useEffect, useState } from 'react';

export interface IListClientsProps {
  clients: IClient[];
  onClick: (client: IClient) => void;
}

export default function ListClients(props: IListClientsProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className={styles.listClients}>
      {!isMobile && (
        <ul className={styles.headerListClients}>
          <li>Número do cliente</li>
          <li>Data de venda</li>
          <li>Descrição do pedido</li>
          <li>Data de entrega</li>
          <li>Valor</li>
          <li>Status da venda</li>
          <li>Pagamento Completo?</li>
        </ul>
      )}

      {props.clients.map((client: IClient) => {
        return <LineClient isMobile={isMobile} onClick={props.onClick} client={client} key={client.id} />;
      })}
    </div>
  );
}
