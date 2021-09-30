import React, { useState, useEffect } from 'react';
import { ItemService } from '../../../services/item.services';
import { RouteComponentProps } from 'react-router-dom';

import ItemDetails from './component';
import Navbar from '../../components/Navbar';
import { DEFAULT_VALUE } from '../constans';

function Item(props: RouteComponentProps<any>) {
  const [item, setItem] = useState(DEFAULT_VALUE);

  useEffect(() => {
    const { id } = props.match.params;

    if (id) {
      getItem(id)
    }
  }, [props.location.search, props.match.params, props.match.params.id]);

  const getItem = async (id: string) => {
    const result = await ItemService.get(id)

    try {
      setItem(result);
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      {
        item &&
        <ItemDetails item={item} />
      }
    </>
  );
}
export default Item;