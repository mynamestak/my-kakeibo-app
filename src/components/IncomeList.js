import React, {useState} from 'react';
import { DateContext } from '../DateContext';

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
        <div>
            { !isEditting &&
                <li>
                    <span>{incomeMonth}月{incomeDay}日に{incomeText}</span>で<span>{incomeNum}円</span>稼ぎました。
                    <button onClick={editToggle}>編集</button>
                    <button onClick={incomeDeleteHandler}>削除</button>
                </li>            
            }
            { isEditting && 
                <li>
                    <select onChange={editMonthValueHandler} value={editMonthValue}>
                        <option value={1}>1月</option>
                        <option value={2}>2月</option>
                        <option value={3}>3月</option>
                        <option value={4}>4月</option>
                        <option value={5}>5月</option>
                        <option value={6}>6月</option>
                        <option value={7}>7月</option>
                        <option value={8}>8月</option>
                        <option value={9}>9月</option>
                        <option value={10}>10月</option>
                        <option value={11}>11月</option>
                        <option value={12}>12月</option>
                    </select>
                    <select onChange={editDayValueHandler} value={editDayValue}>
                        <option value={1}>1日</option>
                        <option value={2}>2日</option>
                        <option value={3}>3日</option>
                        <option value={4}>4日</option>
                        <option value={5}>5日</option>
                        <option value={6}>6日</option>
                        <option value={7}>7日</option>
                        <option value={8}>8日</option>
                        <option value={9}>9日</option>
                        <option value={10}>10日</option>
                        <option value={11}>11日</option>
                        <option value={12}>12日</option>
                        <option value={13}>13日</option>
                        <option value={14}>14日</option>
                        <option value={15}>15日</option>
                        <option value={16}>16日</option>
                        <option value={17}>17日</option>
                        <option value={18}>18日</option>
                        <option value={19}>19日</option>
                        <option value={20}>20日</option>
                        <option value={21}>21日</option>
                        <option value={22}>22日</option>
                        <option value={23}>23日</option>
                        <option value={24}>24日</option>
                        <option value={25}>25日</option>
                        <option value={26}>26日</option>
                        <option value={27}>27日</option>
                        <option value={28}>28日</option>
                        <option value={29}>29日</option>
                        <option value={30}>30日</option>
                        <option value={31}>31日</option>
                    </select>に
                    <input onChange={editTextValueHandler} value={editTextValue}></input>で
                    <input onChange={editNumValueHandler} value={editNumValue}></input>円稼ぎました。
                    <button onClick={onHandleEdit}>決定</button>
                </li>     
            }
        </div>
    );
}

export default IncomeList;