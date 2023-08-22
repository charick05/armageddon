import React from 'react';
import getAllAsteroids from "./actions/getAllAsteroids";
import Logo from "./components/logo/Logo";
import styles from './page.module.css';
import AsteroidsBlock from './components/asteroidsBlock/AsteroidsBlock';
import Earth from './components/earth/Earth';

export default async function Home() {
  const fetchAsteroids = await getAllAsteroids();
  return (
    <>
      <Logo />
      <Earth />
      <main className={styles.main}>
        <AsteroidsBlock fetchAsteroids={fetchAsteroids} />
      </main>
    </>
  )
};