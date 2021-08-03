import React from 'react';
import logoImg from './logo.svg';
import styles from './header.module.scss';
import Menu from '../menu/menu';

const LogoSize = {
  WIDTH: 134,
  HEIGHT: 55,
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <img
            className={styles.logo}
            src={logoImg}
            alt='Лого AVTO MOTO'
            width={LogoSize.WIDTH}
            height={LogoSize.HEIGHT}
          />
          <Menu />
        </div>
      </div>
    </header>
  );
}
