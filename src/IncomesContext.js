import React, {useState, createContext } from 'react';

export const IncomesContext = createContext();

export const IncomesProvider = (props) => {
    // 収入
    const [incomes, setIncomes] = useState([]);

    return(
        <IncomesContext.Provider value={[incomes, setIncomes]}>
            {props.children}
        </IncomesContext.Provider>
    );
}