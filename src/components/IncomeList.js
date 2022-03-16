import React, {useState} from 'react';

const IncomeList = ({income, incomes, incomeText, setIncomes, incomeNum, incomeAmounts, setIncomeAmounts, id, index}) => {

    const [ isEditting, setIsEditting ] = useState(null);
    const [ editValue, setEditValue ] = useState('');

    const incomeDeleteHandler = () => {
        setIncomes(incomes.filter(el => el.id !== income.id));
        setIncomeAmounts(incomeAmounts.filter(el => el !== Number(incomeNum)));
    }

    const editToggle = () => {
        setIsEditting(id + 1); //←nullの状態から数字を入れるとtrueになる。
        setEditValue(incomeText);
    };

    const editValueHandler = (e) => {
        setEditValue(e.target.value);
    };

    const onHandleEdit = () => {
        const updated = incomes.map((income, index) => {
            if(income.id === isEditting - 1){ //配列の数字とIncomeFormで作成するidを比較する。
                income = {incomeText: editValue, incomeNum: incomeNum, id: id}; // incomeTextだけ変更を反映する。
            }
            return income;
        })
        setIncomes(updated); // 変更した配列丸ごとで更新
        setIsEditting(false);
    };



    return(
        <div key={id}>
            { !isEditting &&
                <li>
                    <span onClick={editToggle}>{incomeText}</span>に<span>{incomeNum}</span>稼ぎました。
                    <button onClick={incomeDeleteHandler}>削除</button>
                </li>            
            }
            { isEditting && 
                <li>
                    <input onChange={editValueHandler} value={editValue}></input>
                    <button onClick={onHandleEdit}>決定</button>
                </li>     
            }
        </div>
    );
}

export default IncomeList;