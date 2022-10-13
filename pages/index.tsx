import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Seen On Foot</title>
        <meta name='description' content='Best Seen On Foot Travel Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Best Seen On Foot</h1>

        <p className={styles.description}>Coming soon...</p>
      </main>

      <footer className={styles.footer}>Copyright 2022</footer>
    </div>
  );
};

export default Home;
