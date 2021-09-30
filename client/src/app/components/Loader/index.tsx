import React from 'react';
import styles from './styles.module.scss';

interface Props {
  type: string;
}

function Loader({ type }: Props) {
  return (
    <div className={styles.loaderBox}>
      <div className={styles.loader} />
      { type === 'search'
        ? <p className={styles.headline}>Buscando resultados</p>
        : <p className={styles.headline}>Cargando información</p>
      }
    </div>
  );
}

export default Loader;
