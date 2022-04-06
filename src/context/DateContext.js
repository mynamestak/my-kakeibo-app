import React, {useState, createContext } from 'react';

export const DateContext = createContext();

export const DateProvider = (props) => {
    // 収入
    const [date, setDate] = useState(new Date());

    return(
        <DateContext.Provider value={[date, setDate]}>
            {props.children}
        </DateContext.Provider>
    );
} 