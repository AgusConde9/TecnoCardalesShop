import Item from "./Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(cel => <Item key={cel.id} info={cel} />)
    );
}

export default ItemList;