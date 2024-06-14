import { IClient } from '@/core/model/Client';
import styles from '@/app/lineClient.module.css';

export interface lineClientProps {
  client: IClient;
  onClick: (client: IClient) => void;
  isMobile: boolean;
}

export default function LineClient(props: lineClientProps) {
  function openMessageWhatsapp(numberClient: string) {
    window.open(`https://wa.me/${numberClient}`);
  }

  return (
    <>
      {props.isMobile ? (
        <>
          <div
            style={
              props.client.statusSale === 'entregue' || props.client.statusSale === 'Entregue'
                ? { backgroundColor: '#28a745' }
                : { backgroundColor: 'transparent' }
            }
            className={styles.lineMobile}
          >
            <p onClick={() => openMessageWhatsapp(props.client.clientNumber)}>
              Número do cliente
              <span>{props.client.clientNumber}</span>
            </p>

            <p>
              Data de venda
              <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(props.client.dateSale))}</span>
            </p>

            <p>
              Descrição do pedido
              <span>{props.client.descriptionSale}</span>
            </p>

            <p>
              Descrição de Entrega
              <span>
                {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(
                  new Date(props.client.dateSend)
                )}
              </span>
            </p>

            <p>
              Preço
              <span>{props.client.price}</span>
            </p>

            <p>
              Status da venda
              <span>{props.client.statusSale}</span>
            </p>

            <p>
              Pagamento Integral?
              <span>{props.client.payFull ? 'Sim' : 'Não'}</span>
            </p>
            <button className={styles.editClientButton} onClick={() => props.onClick(props.client)}>
              Editar Cliente
            </button>
          </div>
        </>
      ) : (
        <div
          style={
            props.client.statusSale === 'entregue' || props.client.statusSale === 'Entregue'
              ? { backgroundColor: '#28a745' }
              : { backgroundColor: 'transparent' }
          }
          className={styles.lineClient}
        >
          <span onClick={() => openMessageWhatsapp(props.client.clientNumber)}>
            {props.client.clientNumber}
          </span>
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
      )}
    </>
  );
}
