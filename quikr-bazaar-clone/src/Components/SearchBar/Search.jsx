import Styles from './Search.module.css';
import {HiOutlineSearch} from 'react-icons/hi';



function Search(){
  return (
    <>
      <div className={Styles.searchBox}>
        <div className={Styles.selectHolder}>
          <select className={Styles.select}>
            <option value="all categories">All Categories</option>
            <option value="cars and bikes">Cars & Bikes</option>
            <option value="mobiles and tablets">Mobiles & Tablets</option>
            <option value="electronics and appliances">Electronics & Appliances</option>
          </select>
        </div>
        <input type='text' className={Styles.searchBar} placeholder='Search in All India' />
        <button className={Styles.searchButton}><HiOutlineSearch className={Styles.searchIcon} /></button>
      </div>
    </>
  )
}

export default Search;

