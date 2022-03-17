import React, {useState} from 'react';

const IncomeList = ({income, incomes, incomeText, setIncomes, incomeNum, incomeAmounts, setIncomeAmounts, id, index}) => {

    const [ isEditting, setIsEditting ] = useState(null);
    const [ editTextValue, setEditTextValue ] = useState('');
    const [ editNumValue, setEditNumValue ] = useState('');

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

    const onHandleEdit = () => {
        const updated = incomes.map((income) => {
            if(income.id === isEditting - 1){ //配列の数字とIncomeFormで作成するidを比較する。
                income = {incomeText: editTextValue, incomeNum: editNumValue, id: id}; // incomeTextだけ変更を反映する。
            }
            return income;
        })
        setIncomes(updated); // 変更した配列丸ごとで更新
        setIsEditting(false);     
   
    };
    // console.log(incomeAmounts);
    // console.log(incomes);



    return(
        <div>
            { !isEditting &&
                <li>
                    <span onClick={editToggle}>{incomeText}</span>に<span onClick={editToggle}>{incomeNum}</span>稼ぎました。
                    <button onClick={incomeDeleteHandler}>削除</button>
                </li>            
            }
            { isEditting && 
                <li>
                    <input onChange={editTextValueHandler} value={editTextValue}></input>に<input onChange={editNumValueHandler} value={editNumValue}></input>稼ぎました。
                    <button onClick={onHandleEdit}>決定</button>
                </li>     
            }
        </div>
    );
}

export default IncomeList;