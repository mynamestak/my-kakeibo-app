import React, {useContext} from 'react';
import { DateContext } from '../DateContext';

const DateHeader = ({date, setDate}) => {


    const today = date;
    const year = today.getFullYear();
    const month = today.getMonth()+1;

    const setPrevMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth()-1;
        const day = date.getDate();
        setDate(new Date(year, month, day));
    }
    
    const setNextMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const day = date.getDate();
        setDate(new Date(year, month, day));
    }
    
    

    return(
        <div>
            <p>{year}年{month}月の収支を表示しています。</p>
            <button onClick={setPrevMonth}>前月</button>
            <button onClick={setNextMonth}>次月</button>
        </div>
    );
}

export default DateHeader;