import React, {useContext} from 'react';
import { ItemsContext } from '../ItemsContext';
import { useParams } from 'react-router';


const ItemDetail = () => {

    const {id} = useParams();
    const [items, setItems] = useContext(ItemsContext);

    const item = items[id-1];

    
    return(
        <div>
            <h1>{item.itemText}</h1>
            <h2>{item.itemNum}</h2>
            <p>{item.itemMonth}月{item.itemDay}日</p>
        </div>
    );
}

export default ItemDetail;