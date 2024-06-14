'use client';

import styles from './page.module.css';
import ListClients from './components/client/listClients';
import FormClient from './components/client/formClient';
import useClients from './data/hooks/useClients';

import { AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { MdFormatAlignJustify } from 'react-icons/md';
import { useState } from 'react';

export default function Home() {
  const [showHeader, setShowHeader] = useState<Boolean>(false);
  const { client, listClients, cancel, deleteClient, changeClient, saveForm, isHome, editForm } =
    useClients();

  return (
    <main className={styles.main}>
      <MdFormatAlignJustify
        className={styles.menuIcon}
        onClick={() => setShowHeader((oldState) => !oldState)}
        width={36}
        height={36}
      />
      {showHeader && (
        <header className={styles.header}>
          <ul className={styles.headerList}>
            <li>
              <AiFillHome />
              <span onClick={cancel}>Lista de Clientes</span>
            </li>
            <li>
              <AiOutlinePlus />
              <span onClick={() => changeClient({})}>Cadastrar cliente</span>
            </li>
          </ul>
        </header>
      )}
      <section className={styles.section}>
        <h1>{isHome ? 'Lista de Clientes' : 'Formulário de cliente'}</h1>

        {client ? (
          <FormClient
            delete={deleteClient}
            cancel={cancel}
            client={client}
            onChange={changeClient}
            onSave={saveForm}
            onEdit={editForm}
          />
        ) : (
          <>
            <ListClients clients={listClients} onClick={changeClient} />
          </>
        )}
      </section>
    </main>
  );
}
