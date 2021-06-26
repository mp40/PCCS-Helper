import React, { useState } from 'react';

import SaveModal from './modal';

import styles from './styles.module.css';

const Save = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal
   && (
   <SaveModal
     setShowSaveCharacter={setShowModal}
   />
   )}
      <button
        aria-label="save"
        type="button"
        className={styles.icon}
        onClick={() => setShowModal(true)}
      />
    </>
  );
};

export default Save;
