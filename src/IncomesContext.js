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


// export const filteredIncomesContext = createContext();

// export const FilteredIncomesProvider = (props) => {
//     const [filteredIncomes, setFilteredIncomes] = useState([]);

//     return (
//         <filteredIncomesContext.Provider value={[filteredIncomes, setFilteredIncomes]}>
//             {props.children}
//         </filteredIncomesContext.Provider>
//     )
// }