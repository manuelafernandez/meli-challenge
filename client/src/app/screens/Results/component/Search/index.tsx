import React from 'react';
import { ItemResult, Category } from '../../../../../interfaces/item';
import Item from '../ItemRaw';
import Breadcrumb from '../../../../components/Breadcrumb';

import styles from './styles.module.scss';

interface Props {
  items: ItemResult[];
  categories: Category[];
}

function SearchResults({ items, categories }: Props) {
  return (
    <>
      <Breadcrumb categories={categories} />
      <section className={styles.mainContainer}>
        <div className={styles.itemsContainer}>
          {
            items.map((item: ItemResult) => <Item key={item.id} item={item} />)
          }
        </div>
      </section>
    </>
  );
}

export default SearchResults;
