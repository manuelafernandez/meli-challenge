import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../../assets/Logo_ML@2x.png'

function NotFound() {
  return (
    <div className={styles.error}>
      <p>Ups!</p>
      <h3>No se encontraron productos</h3>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default NotFound;