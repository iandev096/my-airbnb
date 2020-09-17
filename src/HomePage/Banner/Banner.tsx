import { Button } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Search from '../Search/Search';
import './Banner.css'

interface Props {

}

function Banner({ }: Props): ReactElement {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  const toggleShowSearch = () => setShowSearch(value => !value);

  return (
    <div className='banner'>
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          variant='outlined'
          className='banner__searchButton'
          onClick={toggleShowSearch}
        >{showSearch ? 'Hide Dates' : 'Search Dates'}</Button>
      </div>
      <div className="banner__info">
        <h1>Rent your dream house at cool prices</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
