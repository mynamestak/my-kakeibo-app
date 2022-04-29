import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { itemActions } from '../features/itemSlice';


// mui
import BasicDatePicker from './DatePicker';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';



const AddItem = () => {

    const dispatch = useDispatch()

    const [itemInputText, setItemInputText] = useState('');
    const [itemInputNum, setItemInputNum] = useState('');
    const [itemCount, setItemCount] = useState(1);
    const [itemInputDay, setItemInputDay] = useState(0);
    const [itemInputMonth, setItemInputMonth] = useState(0);
    const [inputType, setInputType] = useState('');
    const [datePickerValue, setDatePickerValue] = useState(null);


    const itemInputHandler = (e) => {
        setItemInputText(e.target.value);
    }
    const itemInputNumHandler = (e) => {
        setItemInputNum(e.target.value);
    }
    const typeHandler = (e) => {
        setInputType(e.target.value);
      };
    
    const itemSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(
            itemActions.addItem({
                itemInputText: itemInputText,
                itemInputNum: itemInputNum,
                itemCount: itemCount,
                itemInputMonth: itemInputMonth,
                itemInputDay: itemInputDay,
                inputType: inputType,
            })
        );

        setItemCount((prevCount) => prevCount + 1);
        setItemInputText('');
        setItemInputNum('');
        setItemInputDay('');
        setInputType('');
        setDatePickerValue(null);
    }

    return(
        <form>
            <FormControl sx={{display: 'flex', justifyContent: 'center', marginY:4, height: 30, marginX: 'auto'}}>
                <Grid container spacing={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item>
                        <BasicDatePicker 
                            setItemInputDay={setItemInputDay} 
                            setItemInputMonth={setItemInputMonth}
                            setDatePickerValue={setDatePickerValue}
                            datePickerValue={datePickerValue}
                        />
                    </Grid>
                    <Grid item >
                        <FormControl>
                            <InputLabel>内容</InputLabel>
                            <Select
                                value={inputType}
                                label="type"
                                onChange={typeHandler}
                                size='small'
                                sx={{minWidth: 120, bottom: '-50%'}}
                                >
                                <MenuItem value={'income'}>収入</MenuItem>
                                <MenuItem value={'expense'}>支出</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sx={{display: 'flex'}}>
                            <TextField 
                                label='収入内容'
                                size='small'
                                id="income-input"
                                value={itemInputText}
                                onChange={itemInputHandler}>
                            </TextField>
                    </Grid>
                    <Grid item sx={{display: 'flex'}}>
                            <TextField
                                label='金額'
                                size='small'
                                value={itemInputNum}
                                onChange={itemInputNumHandler}
                                ></TextField>
                    </Grid>
                    <Grid item>
                        <Button onClick={itemSubmitHandler} variant='contained'>決定</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </form>
);
}


export default AddItem;
