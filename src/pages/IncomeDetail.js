import React, {useContext} from 'react';
import { IncomesContext } from '../IncomesContext';
import { useParams } from 'react-router';


const IncomeDetail = () => {

    const {id} = useParams();
    const [incomes, setIncomes] = useContext(IncomesContext);

    const income = incomes[id-1];

    return(
        <div>
            <h1>{income.incomeText}</h1>
            <h2>{income.incomeNum}</h2>
            <p>{income.incomeMonth}月{income.incomeDay}日</p>
        </div>
    );
}

export default IncomeDetail;