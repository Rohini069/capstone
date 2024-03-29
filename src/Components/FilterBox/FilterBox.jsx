import React, { useEffect, useState } from 'react'
import { dataToRender, months, years } from '../../utils/DataRender'
import './FilterBox.css'

const FilterBox = ({ getMonthYear }) => {
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedYear, setSelectedYear] = useState(2023);

    const monthRender = () => dataToRender(months);

    const yearRender = () => dataToRender(years);

    const handleMonthChange = (e) => {
        
        setSelectedMonth(e.target.value)
    }
    const handleYearChange = (e) => {
        
        setSelectedYear(Number(e.target.value))
    }
    

    // const submitEventInfo = (e)=>{
        
    //     updateParent();
    // }

    // useEffect(()=>{
    //     
        
    // },[selectedmonth,selectedYear,getMonthYear])
   
    

    useEffect(()=>{
        const updateParent=()=>{
            getMonthYear(selectedMonth,selectedYear)
        }
       updateParent()
    },[selectedMonth,selectedYear,getMonthYear])


    return (
        <>
            <form className='filter-card' >
                <div className="wrapper">
                    <div className="date">
                        <label htmlFor="month">Month : </label>
                        <select value={selectedMonth} onChange={handleMonthChange}>
                            {monthRender()}
                        </select>
                    </div>
                    <div className="date">
                        <label htmlFor="year">Year : </label>
                        <select
                            value={selectedYear} onChange={handleYearChange}
                        >
                            {yearRender()}
                        </select>
                    </div>
                </div>
                
            </form>

        </>
    )
}

export default FilterBox