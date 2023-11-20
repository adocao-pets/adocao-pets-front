import React from 'react';
import Image from 'next/image';
import styles from './menu.module.css';
import NavLink from '../NavLink/navLink';
import User from '../User/user';

const Menu: React.FC = () => {
    return (
      <div className={styles.menu} >
        <div className={styles.image}>
            <Image src="/logo-branco.png" width={93} height={73} alt="Paw buddy" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.op1}>
          <NavLink href='' iconUrl='/Vector.png' text='Procurar Pets'></NavLink>
          <NavLink href='' iconUrl='/Vector.png' text='Meus Pets'></NavLink>
        </div>
        <div className={styles.op2}>
          <NavLink href='' iconUrl='/Vector.png' text='Pets adotados'></NavLink>
          <NavLink href='' iconUrl='/Vector.png' text='Cadastrar Pet'></NavLink>
        </div>
        <div className={styles.user}>
            <User/>
        </div>
      </div>
    );
  };

export default Menu;
