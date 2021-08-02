import React from 'react';
import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';
import styles from './not-found.module.scss';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main>
        <h1 className={styles.title}>Страница в разработке</h1>
      </main>
      <Footer />
    </>
  );
}
