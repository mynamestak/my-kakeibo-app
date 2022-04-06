import React, {useState, createContext } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
    // 収入
    const [items, setItems] = useState([]);

    return(
        <ItemsContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemsContext.Provider>
    );
}