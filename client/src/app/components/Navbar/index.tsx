import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../../assets/Logo_ML.png'
import searchIcon from '../../../assets/ic_Search.png'
import styles from './styles.module.scss';

function Navbar() {
  const searchQuery = useRef<any>();
  const history = useHistory();

  const handleClick = () => {
    const query = searchQuery.current.value;
    history.push(`/items?search=${query}`)
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
      <div className={styles.searchForm} >
        <input className={styles.searchBox} type="text" ref={searchQuery} placeholder="Nunca dejes de buscar" onKeyPress={handleKeyPress} />
        <div className={styles.searchIconContainer} onClick={handleClick}>
          <img className={styles.searchIcon} src={searchIcon} alt="Buscador" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
