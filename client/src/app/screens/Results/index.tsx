import React, { useState, useEffect } from 'react';
import { ItemService } from '../../../services/item.services';
import { useHistory } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import SearchResults from './component/Search';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';

function Results(props: RouteComponentProps<any>) {
  const history = useHistory();

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [haveResults, setHaveResults] = useState(false);

  useEffect(() => {
    searchItems();
  }, [props.location.search, props.match.params.id]);

  const searchItems = async () => {
    const { items, categories } = await ItemService.search(props.location.search.substring(8).toString())

    try {
      if (items) {
        setItems(items);
        setHaveResults(true);
      }
      if (categories) {
        setCategories(categories);
      }
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
        ((items.length > 0) && <SearchResults items={items} categories={categories} />)
        ||
        (haveResults ? history.push(`/error`) : <Loader type="search" />)
      }
    </>
  );
}
export default Results;
