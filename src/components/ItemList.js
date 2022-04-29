import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, itemActions } from '../features/itemSlice';


// mui
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import DatePickerHandler from './DatePicker';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';


const ItemList = ({itemText, itemNum, id, itemDay, itemMonth, inputType}) => {

    const [ isEditting, setIsEditting ] = useState(null);
    const [ editTextValue, setEditTextValue ] = useState('');
    const [ editNumValue, setEditNumValue ] = useState('');
    const [ editDayValue, setEditDayValue ] = useState(itemDay);
    const [ editMonthValue, setEditMonthValue ] = useState(itemMonth);

    const dispatch = useDispatch();

    const itemDeleteHandler = () => {
        console.log(id)
        dispatch(itemActions.deleteItem(id));
        console.log('delte');
    //     setItems(items.filter(el => el.id !== item.id));
    }
    
    const editToggle = () => {
        console.log('eddittoggle')
    //     setIsEditting(id + 1); //←nullの状態から数字を入れるとtrueになる。
    //     setEditTextValue(itemText);
    //     setEditNumValue(itemNum);
    };

    // //TextとNumは別々にしないと１つ変えると両方とも変更されてしまう。
    // const editTextValueHandler = (e) => {
    //     setEditTextValue(e.target.value);
    // };
    // const editNumValueHandler = (e) => {
    //     setEditNumValue(e.target.value);
    // }

    // const onHandleEdit = () => {
    //     const updated = items.map((item) => {
    //         if(item.id === isEditting - 1){ //配列の数字とItemFormで作成するidを比較する。
    //             item = {itemText: editTextValue, itemNum: editNumValue, id: id, itemDay: editDayValue, itemMonth: editMonthValue, inputType: inputType}; 
    //         }
    //         return item;
    //     })
    //     setItems(updated); // 変更した配列丸ごとで更新
    //     setIsEditting(false);  
    // };




    return(
        <div>
           <Grid container spacing={2} style={{listStyle:'none', display: 'flex',justifyContent:'center', alignItems:'center', marginBottom: 16}}>
               <Grid item sx={{display: 'flex'}}>
                   <Typography variant='h6'>{itemMonth} / {itemDay}'     '{itemText}</Typography><Typography variant='h6'>'   '{itemNum}円</Typography>
               </Grid>
               <Grid item>
                   <ButtonGroup variant='text' aria-label="text button group">
                       <Button variant='contained' color="success" onClick={editToggle}>クイック編集</Button>
                       <Button variant='contained' color="error" onClick={itemDeleteHandler}>削除</Button>
                       {/* <Button variant='contained' color="primary"><Link sx={{color: 'white'}} to={`/item/${id}`} >詳細</Link></Button> */}
                   </ButtonGroup>
               </Grid>
           </Grid>   
        </div>

        // <Box>
        //     { !isEditting &&
        //     <Grid container spacing={2} style={{listStyle:'none', display: 'flex',justifyContent:'center', alignItems:'center', marginBottom: 16}}>
        //         <Grid item sx={{display: 'flex'}}>
        //             <Typography variant='h6'>{itemMonth} / {itemDay}'     '{itemText}</Typography><Typography variant='h6'>'   '{itemNum}円</Typography>
        //         </Grid>
        //         <Grid item>
        //             <ButtonGroup variant='text' aria-label="text button group">
        //                 <Button variant='contained' color="success" onClick={editToggle}>クイック編集</Button>
        //                 <Button variant='contained' color="error" onClick={itemDeleteHandler}>削除</Button>
        //                 <Button variant='contained' color="primary"><Link sx={{color: 'white'}} to={`/item/${id}`} >詳細</Link></Button>
        //             </ButtonGroup>
        //         </Grid>
        //     </Grid>   
        //     }

        //      { isEditting &&
        //         <Grid container spacing={2} style={{listStyle:'none', display: 'flex', justifyContent:'center', alignItems:'center', marginBottom: 4}}>
        //             <Grid item>
        //                 <DatePickerHandler 
        //                     setEditDayValue={setEditDayValue}
        //                     setEditMonthValue={setEditMonthValue}
        //                     editMonthValue={editMonthValue}
        //                     isEditting={isEditting}
        //                 />
        //             </Grid>
        //             <Grid item>
        //                 <TextField size='small' onChange={editTextValueHandler} value={editTextValue}></TextField>
        //             </Grid>
        //             <Grid item>
        //                 <TextField size='small' onChange={editNumValueHandler} value={editNumValue}></TextField>円
        //             </Grid>
        //             <Grid item>
        //                 <Button variant='contained' color='success'onClick={onHandleEdit}>決定</Button>
        //             </Grid>
        //         </Grid>
        //     }
        // </Box>
    );
}

export default ItemList;