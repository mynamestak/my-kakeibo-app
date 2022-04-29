import { alertTitleClasses } from '@mui/material';
import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import NewsList from './NewsList';

const NewsLists = () => {

    const [ data, setData ] = useContext(NewsContext);

    const articles = data.articles;
    

    return(
        <div>
            <h1>news lists</h1>
            {articles ? articles.map(article => (
                <NewsList 
                    title={article.title}
                    desc={article.desc}
                    url={article.url}
                    key={article.url}
                />
            )) : <h1>Loading...</h1>}
        </div>
    );
}

export default NewsLists;