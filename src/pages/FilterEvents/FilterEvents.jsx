import React, { useCallback, useState } from 'react'
import FilterBox from '../../Components/FilterBox/FilterBox'
import SearchEventList from '../../Components/SearchEventList/SearchEventList'
import Navigation from '../../Components/Navigation/Navigation'
import './FilterEvents.css'

const FilterEvents = () => {
  const [monthYear,setMonthYear] = useState({
    selectedMonth:null,
    selectedYear:null
  })
  const getMonthYear = useCallback((selectedMonth,selectedYear) =>{
    
      setMonthYear({selectedMonth,selectedYear})
  },[])
  return (
    <>
    
    <div className="find-events-wrapper">
    <FilterBox getMonthYear={getMonthYear}/>
    <SearchEventList monthYear = {monthYear} />
    </div>
    </>
  )
}

export default FilterEvents