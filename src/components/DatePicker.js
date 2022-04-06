import React , { useState } from "react";
import {TextField} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import jalocale from 'date-fns/locale/ja'; 


export default function BasicDatePicker({ setItemInputMonth, setItemInputDay, setEditDayValue, setEditMonthValue, isEditting}) {
  const [value, setValue] = useState(null);


  const DatePickerHandler = (e) => {
    if(e === null){
      return;
    }
    if(!isEditting){
      setValue(e);
      setItemInputMonth(e.getMonth()+1);
      setItemInputDay(e.getDate());
    }
    if(isEditting){
      setValue(value);
      setEditMonthValue(e.getMonth() +1);
      setEditDayValue(e.getDate());
    }
  }


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={jalocale}>
        <DatePicker
          label="日付を入力"
          value={value}
          onChange={DatePickerHandler}
          renderInput={(params) => <TextField size='small' {...params}></TextField>}
        />
    </LocalizationProvider>
  );
};