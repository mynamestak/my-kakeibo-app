import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
    const [data, setData] = useState([]);

    const apiKey = 'd414e347741a4beb9e5745560fc8e2c8';

    const newsInputTitle = props.newsText;

    useEffect(() => {
        axios.get(
            `https://newsapi.org/v2/everything?q=${newsInputTitle}&from=2022-04-12&to=2022-04-12&lamguage=jp&sortBy=popularity&apiKey=${apiKey}`
        ).then((response) => setData(response.data))
        .catch((error) => console.log(error))
        
    }, [newsInputTitle]);

    return (
        <NewsContext.Provider value={[ data, setData ]}>
            {props.children}
        </NewsContext.Provider>
    )
}