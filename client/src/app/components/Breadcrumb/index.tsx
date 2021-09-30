import React from 'react';
import { Category } from '../../../interfaces/item';
import styles from './styles.module.scss';

interface Props {
  categories: Category[];
}

function Breadcrumb({ categories }: Props) {
  return (
    <section className={styles.breadcrumb}>
      { categories &&
        categories.reverse().map((category, index) => {
          const lastCategory = (categories.length === (index + 1));
          if (!lastCategory) {
            return (
              <div className={styles.breadcrumWrapper} key={index}>
                <span>{category.name} </span>
                <span className={styles.BreadcrumbWrapper}> &gt; </span>
              </div>
            );
          } else {
            return (<span className={styles.lastCategory} key={index}>{category.name}</span>)
          }
        })
      }
    </section>
  );
}

export default Breadcrumb;
