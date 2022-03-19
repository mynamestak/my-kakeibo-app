import React, { useEffect } from 'react';

const IncomeTotal = ({incomeAmounts, incomeResult, setIncomeResult}) => {


    // useEffect(() => {
    //     setIncomeResult(incomeAmounts.reduce(reducer));
    // }, []);

    useEffect(() => {
        setIncomeResult(incomeAmounts.reduce(reducer));
    }, [incomeAmounts]);

    const reducer = (sum,currentValue) => sum + currentValue;

    
  
    return(
        <div>
            <p>あなたの収入は{incomeResult}です。</p>
        </div>
    );
}

export default IncomeTotal; 