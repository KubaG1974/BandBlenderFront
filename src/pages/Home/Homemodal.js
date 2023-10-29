import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Logowanie</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
             <Link to="/Login" className={styles.login}>Login</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
