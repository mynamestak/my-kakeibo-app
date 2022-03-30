import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import DatePickerHandler from './DatePicker';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';


const IncomeList = ({income, incomes, incomeText, setIncomes, incomeNum, incomeAmounts, setIncomeAmounts, id, incomeDay, incomeMonth}) => {

    const [ isEditting, setIsEditting ] = useState(null);
    const [ editTextValue, setEditTextValue ] = useState('');
    const [ editNumValue, setEditNumValue ] = useState('');
    const [ editDayValue, setEditDayValue ] = useState(incomeDay);
    const [ editMonthValue, setEditMonthValue ] = useState(incomeMonth);


    const incomeDeleteHandler = () => {
        setIncomes(incomes.filter(el => el.id !== income.id));
        setIncomeAmounts(incomeAmounts.filter(el => el !== Number(incomeNum)));
    }
    
    const editToggle = () => {
        setIsEditting(id + 1); //←nullの状態から数字を入れるとtrueになる。
        setEditTextValue(incomeText);
        setEditNumValue(incomeNum);
        // setDatePickerValue(datePickerValue);
    };

    //TextとNumは別々にしないと１つ変えると両方とも変更されてしまう。
    const editTextValueHandler = (e) => {
        setEditTextValue(e.target.value);
    };
    const editNumValueHandler = (e) => {
        setEditNumValue(e.target.value);
    }
    const editDayValueHandler = (e) => {
        setEditDayValue(e.target.value);
    }
    const editMonthValueHandler = (e) => {
        setEditMonthValue(e.target.value);
    }

    const onHandleEdit = () => {
        const updated = incomes.map((income) => {
            if(income.id === isEditting - 1){ //配列の数字とIncomeFormで作成するidを比較する。
                income = {incomeText: editTextValue, incomeNum: editNumValue, id: id, incomeDay: editDayValue, incomeMonth: editMonthValue}; // incomeNumとincomeTextだけ変更を反映する。
            }
            return income;
        })
        setIncomes(updated); // 変更した配列丸ごとで更新
        setIsEditting(false);  
        setIncomeAmounts( //編集した額だけ配列内を入れ替える。
            incomeAmounts.map((incomeAmount, id) => (id === isEditting -1 ? Number(editNumValue) : incomeAmount))
        );
    };



    return(
        <Box>
            { !isEditting &&
            <Grid container spacing={2} style={{listStyle:'none', display: 'flex',justifyContent:'center', alignItems:'center', marginBottom: 16}}>
                <Grid item sx={{display: 'flex'}}>
                    <Typography variant='h6'>{incomeMonth}/{incomeDay}  {incomeText}  </Typography><Typography variant='h6'>+{incomeNum}円</Typography>
                </Grid>
                <Grid item>
                    <ButtonGroup variant='text' aria-label="text button group">
                        <Button variant='contained' color="success" onClick={editToggle}>編集</Button>
                        <Button variant='contained' color="error" onClick={incomeDeleteHandler}>削除</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>           
            }
            { isEditting && 
                <Grid container spacing={2} style={{listStyle:'none', display: 'flex', justifyContent:'center', alignItems:'center', marginBottom: 4}}>
                    <Grid item>
                        <DatePickerHandler 
                            setEditDayValue={setEditDayValue}
                            setEditMonthValue={setEditMonthValue}
                            editMonthValue={editMonthValue}
                            isEditting={isEditting}
                        />
                    </Grid>
                    <Grid item>
                        <input onChange={editTextValueHandler} value={editTextValue}></input>
                    </Grid>
                    <Grid item>
                        <input onChange={editNumValueHandler} value={editNumValue}></input>円
                    </Grid>
                    <Grid item>
                        <Button variant='contained' color='success'onClick={onHandleEdit}>決定</Button>
                    </Grid>
                </Grid>
            }
        </Box>
    );
}

export default IncomeList;