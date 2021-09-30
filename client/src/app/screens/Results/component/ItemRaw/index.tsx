import React from 'react';
import { useHistory } from 'react-router-dom';
import { ItemResult } from '../../../../../interfaces/item';

import iconTruck from '../../../../../assets/ic_shipping.png';
import styles from './styles.module.scss';

interface Props {
  item: ItemResult;
}

function Item({ item }: Props) {
  const { id, title, price, thumbnail, shipping, address } = item;

  const history = useHistory();

  const handleClick = () => {
    history.push("/items/" + id);
  }

  return (
    <div className={styles.itemsBox} >
      <div className={styles.cardItem} onClick={handleClick}>
        <div className={styles.content}>
          <img className={styles.thumbnail} src={thumbnail} alt={title} />
          <div className={styles.properties}>
            <div className={styles.headline}>
              <h3 className={styles.price}>{price.amount.toLocaleString("es-AR", { style: "currency", currency: price.currency, maximumFractionDigits: 0 })}</h3>
              {shipping?.free_shipping &&
                <img className={styles.icon} src={iconTruck} alt="Icono" />
              }
            </div>
            <h4 className={styles.shortDescription} >{title}</h4>
          </div>
        </div>
        <p className={styles.address}>{address?.state_name}</p>
      </div>
    </div>
  );
}

export default Item;