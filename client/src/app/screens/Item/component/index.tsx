import React from 'react';
import { ItemResult } from '../../../../interfaces/item';
import Breadcrumb from '../../../components/Breadcrumb';
import Loader from '../../../components/Loader';

import styles from './styles.module.scss';

interface Props {
  item: ItemResult;
}

function ItemDetails({ item }: Props) {
  const {
    title,
    price,
    picture,
    condition,
    item_categories,
    sold_quantity,
    description } = item;

  return (
    <>
      {
        !title &&
        <Loader type="item" />
      }
      { title &&
        <>
          <Breadcrumb categories={item_categories} />
          <div className={styles.container}>
            <div className={styles.content}>
              <img className={styles.picture} src={picture} alt={title} />
              <div className={styles.properties}>
                <p className={styles.condition}>{condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity} vendidos</p>
                <h4 className={styles.itemHeadline}>{title.trim()}</h4>
                <div>
                  <h3 className={styles.price}>{price.currency === "ARS"
                    ? price.amount.toLocaleString("es-AR", { style: "currency", currency: `ARS`, maximumFractionDigits: 0 })
                    : price.amount.toLocaleString("es-AR", { style: "currency", currency: `USD`, maximumFractionDigits: 0 })}
                    {price.decimals !== 0 ? <span className={styles.decimals}>{price.decimals.toString().slice(2)}</span> : <span className={styles.decimals}>00</span>}</h3>
                </div>
                <button className={styles.button}>Comprar</button>
              </div>
            </div>
            <div className={styles.description}>
              <h4 className={styles.descriptionHeadline}>Descripción del producto</h4>
              <p className={styles.descriptionBody}>{description}</p>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default ItemDetails;
