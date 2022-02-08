import React from 'react';
import Link from '../widgets/link';
import BetaTemp from '../BetaTemp'; // mptodo delete this once at MVP

import styles from './styles.module.css';

const HomePage = () => (
  <div className={styles.wrapper}>
    <h1>
      Welcome To Phoenix Command Tools
    </h1>

    <Link href="/edit" text="Create Character" />
    <Link href="/use" text="Load Character" />

    <BetaTemp />
  </div>
);

export default HomePage;
