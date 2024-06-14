import { IClient } from '@/core/model/Client';
import Input from '../shared/Input';
import styles from '@/app/formClient.module.css';
import useClients from '@/app/data/hooks/useClients';
import { useEffect } from 'react';

export interface IFormClientProps {
  client: Partial<IClient>;
  onChange: (client: Partial<IClient>) => void;
  onSave: () => void;
  cancel: () => void;
  delete: () => void;
  onEdit: () => void;
}

export default function FormClient(props: IFormClientProps) {
  return (
    <div>
      <Input
        label="Numero de telefone"
        value={props.client.clientNumber}
        onChange={(e) => props.onChange?.({ ...props.client, clientNumber: e.target.value })}
      />
      <Input
        label="Descrição do pedido"
        value={props.client.descriptionSale}
        onChange={(e) => props.onChange?.({ ...props.client, descriptionSale: e.target.value })}
      />
      <Input
        label="Data de venda"
        type="date"
        value={props.client.dateSale}
        onChange={(e) => props.onChange?.({ ...props.client, dateSale: e.target.value })}
      />
      <Input
        label="Data de entrega"
        type="datetime-local"
        value={props.client.dateSend}
        onChange={(e) => props.onChange?.({ ...props.client, dateSend: e.target.value })}
      />
      <Input
        label="Preço"
        value={props.client.price}
        onChange={(e) => props.onChange?.({ ...props.client, price: e.target.value })}
      />
      <Input
        label="Status de venda"
        value={props.client.statusSale}
        onChange={(e) => props.onChange?.({ ...props.client, statusSale: e.target.value })}
      />
      <Input
        label="Pago totalmente?"
        type="checkbox"
        style={{ flexDirection: 'row' }}
        checked={props.client.payFull}
        onChange={(e) => props.onChange?.({ ...props.client, payFull: e.target.checked })}
      />

      <div className={styles.buttonsContainer}>
        <button onClick={props.onSave}>Salvar</button>
        <button onClick={props.cancel}>Cancelar</button>
        <button onClick={props.delete}>Deletar Cliente</button>
      </div>
    </div>
  );
}
