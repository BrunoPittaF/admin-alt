import { IClient } from '@/core/model/Client';
import styles from '@/app/lineClient.module.css';

export interface lineClientProps {
  client: IClient;
  onClick: (client: IClient) => void;
}

export default function LineClient(props: lineClientProps) {
  function openMessageWhatsapp(numberClient: string) {
    window.open(`https://wa.me/${numberClient}`);
  }
  return (
    <div className={styles.lineClient}>
      <span onClick={() => openMessageWhatsapp(props.client.clientNumber)}>{props.client.clientNumber}</span>
      <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(props.client.dateSale))}</span>
      <span>{props.client.descriptionSale}</span>
      <span>
        {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(
          new Date(props.client.dateSend)
        )}
      </span>
      <span>{props.client.price}</span>
      <span>{props.client.statusSale}</span>
      <span>{props.client.payFull ? 'Sim' : 'Não'}</span>

      <button className={styles.editClientButton} onClick={() => props.onClick(props.client)}>
        Editar Cliente
      </button>
    </div>
  );
}
