import React, { useEffect } from 'react';

const IncomeTotal = ({incomeAmounts, incomeResult, setIncomeResult, decreNum, setDecreNum}) => {


    useEffect(() => {
        setIncomeResult(incomeAmounts.reduce(reducer));
    }, [incomeAmounts]);

    const reducer = (sum,currentValue) => sum + currentValue;
    // incomeResult = incomeAmounts.reduce(reducer) - decreNum;

    console.log(incomeAmounts);
    console.log(incomeResult + "  -  " + decreNum);
    
  
    return(
        <div>
            <p>あなたの収入は{incomeResult - decreNum}です。</p>
        </div>
    );
}

export default IncomeTotal; 