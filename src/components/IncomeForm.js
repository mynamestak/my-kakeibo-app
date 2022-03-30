import React, {useState, useContext} from 'react';
import { IncomesContext } from '../IncomesContext';
import BasicDatePicker from './DatePicker';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const InputForm = ({date, datePickerValue, setDatePickerValue, incomeAmounts, setIncomeAmounts}) => {

    const [incomes, setIncomes] = useContext(IncomesContext);
    const [incomeInputText, setIncomeInputText] = useState('');
    const [incomeInputNum, setIncomeInputNum] = useState('');
    const [incomeCount, setIncomeCount] = useState(1);
    const [incomeInputDay, setIncomeInputDay] = useState(0);
    const [incomeInputMonth, setIncomeInputMonth] = useState(0);

    const incomeInputHandler = (e) => {
        setIncomeInputText(e.target.value);
    }
    const incomeInputNumHandler = (e) => {
        setIncomeInputNum(e.target.value);
    }

    const incomeSubmitHandler = (e) => {
        e.preventDefault();
        setIncomes([
            ...incomes, {incomeText: incomeInputText, incomeNum: incomeInputNum, id:incomeCount, incomeMonth: Number(incomeInputMonth), incomeDay: incomeInputDay}
        ]);

        setIncomeAmounts([
            ...incomeAmounts, parseInt(incomeInputNum)
        ]);


        setIncomeCount((prevCount) => prevCount + 1);

        setIncomeInputText('');
        setIncomeInputNum('');
        setIncomeInputDay('');
        setDatePickerValue(null);
    }
    
    return(
        <form>
            <Box sx={{display: 'flex', justifyContent: 'center', marginY:4, height: 30, marginX: 'auto'}}>
                <Grid container spacing={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item>
                        <BasicDatePicker 
                            setIncomeInputDay={setIncomeInputDay} 
                            setIncomeInputMonth={setIncomeInputMonth}
                            setDatePickerValue={setDatePickerValue}
                            datePickerValue={datePickerValue}
                        />
                    </Grid>
                    <Grid item sx={{display: 'flex'}}>
                            <Typography variant='body1'marginRight={2}>収入内容</Typography>
                            <input 
                                id="income-input"
                                value={incomeInputText}
                                onChange={incomeInputHandler}>
                            </input>
                    </Grid>
                    <Grid item sx={{display: 'flex'}}>
                            <Typography 
                                variant='body1' 
                                marginRight={2} 
                                marginTop={10}>金額</Typography>
                            <input
                                // num={incomeInputNum}
                                value={incomeInputNum}
                                onChange={incomeInputNumHandler}
                                ></input>
                    </Grid>
                    
                    <Grid item>
                        <Button onClick={incomeSubmitHandler} variant='contained'>決定</Button>
                    </Grid>
                </Grid>
            </Box>
        </form>
);
}


export default InputForm;
