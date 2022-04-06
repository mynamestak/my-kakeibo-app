import React, { useEffect, useContext} from 'react';
import ItemList from './ItemList';
import { ItemsContext } from '../context/ItemsContext';
import { Box, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';



const ItemLists = ({date, filteredIncomeItems, setFilteredIncomeItems, filteredExpenseItems, setFilteredExpenseItems}) => {


    const [items, setItems] = useContext(ItemsContext);
    
    const selectedMonth = date.getMonth() + 1;

    const filterIncomeHandler = () => {
        setFilteredIncomeItems(items.filter(item => item.inputType === 'income' && item.itemMonth === selectedMonth));
    }
    const filterExpenseHandler = () => {
        setFilteredExpenseItems(items.filter(item => item.inputType === 'expense' && item.itemMonth === selectedMonth))
    }


    // useEffect(() => {
    //     filterMonthHandler();
    //   }, [items, date]);

      useEffect(() => {
        filterIncomeHandler();
        filterExpenseHandler();
      }, [items, date]);


    //   console.log(filteredIncomeItems);
    //   console.log('test tes test test');
    //   console.log(filteredExpenseItems);
    
    return(
        <Box sx={{marginTop:16}}>
            {/* 登録したすべての収入表示 */}
            {/* <ul>
                {items.map(item => (
                    <IncomeList 
                        item={item}
                        items={items}
                        itemText={item.itemText}
                        key={item.id}
                        id={item.id}
                        itemNum={item.itemNum}
                        setItems={setItems}
                        itemAmounts={itemAmounts}
                        setItemAmounts={setItemAmounts}
                        itemDay={item.itemDay}
                        itemMonth={item.itemMonth}
                    />
                ))}
            </ul> */}
            <Box sx={{backgroundColor:'lightGreen', minHeight: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography 
                    varient='h3' 
                    component='h3' 
                    sx={{color: 'white'}}>{selectedMonth}月収支リスト</Typography>
            </Box>

             <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'center'}}>
               <Grid item>
                    <Typography>収入</Typography>
                    <Box sx={{marginTop: '16px'}}>
                        {filteredIncomeItems.map(item => (
                            <ItemList 
                                item={item}
                                items={items}
                                itemText={item.itemText}
                                key={item.id}
                                id={item.id}
                                itemNum={item.itemNum}
                                setItems={setItems}
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
                                item={item}
                                items={items}
                                itemText={item.itemText}
                                key={item.id}
                                id={item.id}
                                itemNum={item.itemNum}
                                setItems={setItems}
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