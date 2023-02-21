import { useState, useEffect } from 'react';
import styles from './../styles/SearchBar.module.css';
const SearchBar = () => {
  const [hover,setHover] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <p>Search</p>
      </div>
    </div>
  );
};

export default SearchBar;
