import React from 'react';
import logoImg from './logo.svg';
import styles from './header.module.scss';
import Menu from '../menu/menu';
import {Link} from 'react-router-dom';

const LogoSize = {
  WIDTH: 134,
  HEIGHT: 55,
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Link to='/' className={styles.logo}>
            <img
              src={logoImg}
              alt='Лого AVTO MOTO'
              width={LogoSize.WIDTH}
              height={LogoSize.HEIGHT}
            />
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
}
