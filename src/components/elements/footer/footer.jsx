import React from 'react';
import Menu from '../menu/menu';
import { MenuType } from '../../../const';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Menu type={MenuType.FOOTER}/>
    </footer>
  );
}
