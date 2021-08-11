import React from 'react';
import {Card, Icon} from "react-materialize";
import {NavLink} from "react-router-dom";
import ImageView from "./ImageView";

const PreviewCard = ({item, image}) => {

    const actionsProp = item.id ? {
        actions: [<NavLink key={item.id} to={`/${item.id}`}>Подробнее</NavLink>]
    } : {}
    return (
        <Card
            {...actionsProp}
            closeIcon={<Icon>close</Icon>}
            header={<ImageView route={item.route} image={image}/>}
            style={{
                whiteSpace: "nowrap",
            }}
        >
            <h5 style={{overflow: "hidden", textOverflow: "ellipsis",}}>{item.name}</h5>
            {item.id ? <div style={{overflow: "hidden", textOverflow: "ellipsis",}}>
                {item.description ? item.description : "Нет описания"}
            </div> : <></>}
        </Card>
    );
};

export default PreviewCard;