import LineClient from './lineClient';
import { IClient } from '@/core/model/Client';
import styles from '@/app/listClients.module.css';

export interface IListClientsProps {
  clients: IClient[];
  onClick: (client: IClient) => void;
}

export default function ListClients(props: IListClientsProps) {
  return (
    <div className={styles.listClients}>
      <ul className={styles.headerListClients}>
        <li>Número do cliente</li>
        <li>Data de venda</li>
        <li>Descrição do pedido</li>
        <li>Data de entrega</li>
        <li>Valor</li>
        <li>Status da venda</li>
        <li>Pagamento Completo?</li>
      </ul>
      {props.clients.map((client: IClient) => {
        return <LineClient onClick={props.onClick} client={client} key={client.id} />;
      })}
    </div>
  );
}
