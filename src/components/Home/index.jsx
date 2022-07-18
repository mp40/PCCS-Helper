import React from 'react';
import Link from '../widgets/link';

import styles from './styles.module.css';

const HomePage = () => (
  <div className={styles.wrapper}>
    <h1>
      Welcome To Phoenix Command Tools
    </h1>

    <Link href="/edit" text="Create Character" />
    <Link href="/use" text="Load Character" />

    <Link href="https://pccstools.gtsb.io/" text="More Tools" external />

  </div>
);

export default HomePage;
