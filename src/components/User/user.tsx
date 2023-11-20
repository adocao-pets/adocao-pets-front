"use client";
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import styles from './user.module.css';

interface UserProps {
}

const User: React.FC<UserProps> = ({}) => {
  // Exemplo simples de função para obter informações do usuário logado
  const getLoggedUser = () => {
    // Suponha que esta função retorna um objeto com informações do usuário
    return {
      name: 'John Doe', // Substitua por lógica real de obtenção de usuário
    };
  };

  const user = getLoggedUser();

  return (
    <div className={styles.user}>
        <div className={styles.userInfo}>
            <span className={styles.hello} >Hello</span>
            <span className={styles.userName}>{user.name}</span>
        </div>
        <button className={styles.logoutButton}>
            <FaSignOutAlt />
        </button>
    </div>
  );
};

export default User;
