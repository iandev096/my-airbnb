import React, { ReactElement, useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from "@material-ui/icons/People";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Search.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface Props {

}

type SelectionRange = {
  startDate: Date;
  endDate: Date;
  key: string;
}

function Search({ }: Props): ReactElement {
  const history = useHistory();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const selectionRange: SelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  function handleSelect(ranges: any) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
    </div>
  )
}

export default Search
