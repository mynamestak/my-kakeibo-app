import React, { useEffect} from 'react';
import ItemList from './ItemList';
import { useSelector } from 'react-redux';
import { selectItems } from '../features/itemSlice'; 

// mui
import { Box, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';



const ItemLists = ({date, filteredIncomeItems, setFilteredIncomeItems, filteredExpenseItems, setFilteredExpenseItems}) => {


    const items = useSelector(selectItems);
    console.log(items);
    
    const selectedMonth = date.getMonth() + 1;

    const filterIncomeHandler = () => {
        console.log("🫣")
        console.log(items)
        setFilteredIncomeItems(items.filter(item => item.inputType === 'income' && item.itemMonth === selectedMonth));
    }
    const filterExpenseHandler = () => {
        setFilteredExpenseItems(items.filter(item => item.inputType === 'expense' && item.itemMonth === selectedMonth))
    }

      useEffect(() => {
        filterIncomeHandler();
        filterExpenseHandler();
      }, [items, date]);

    
    return(
        <Box sx={{marginTop:16}}>
            <Box sx={{backgroundColor:'lightGreen', minHeight: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography 
                    varient='h3' 
                    component='h3' 
                    sx={{color: 'white'}}>{selectedMonth}月収支リスト</Typography>
            </Box>
            <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'center'}}>
                {/* {items.map(item => (
                    <div>
                        <p>text {item.itemText}</p>
                        <p>num {item.itemNum}</p>
                        <p>day {item.itemDay}</p>
                        <p>month {item.itemMonth}</p>
                        <p>id {item.id}</p>
                        <p>inputype {item.inputType}</p>
                    </div>
                ))} */}
               <Grid item>
                    <Typography>収入</Typography>
                    <Box sx={{marginTop: '16px'}}>
                        {filteredIncomeItems.map(item => (
                            <ItemList 
                                itemText={item.itemText}
                                key={item.id}
                                id={item.id}
                                itemNum={item.itemNum}
                                itemDay={item.itemDay}
                                itemMonth={item.itemMonth}
                                inputType={item.inputType}
                            />    
                        ))}
                    </Box>
                </Grid>
                <Grid item>
                    <Typography>支出</Typography>
                    <Box sx={{marginTop: '16px'}}>
                        {filteredExpenseItems.map(item => (
                            <ItemList 
                                itemText={item.itemText}
                                key={item.id}
                                id={item.id}
                                itemNum={item.itemNum}
                                itemDay={item.itemDay}
                                itemMonth={item.itemMonth}
                                inputType={item.inputType}
                            />
                        ))}
                    </Box>
                </Grid> 
            </Grid>
        </Box>
    );
}

export default ItemLists;