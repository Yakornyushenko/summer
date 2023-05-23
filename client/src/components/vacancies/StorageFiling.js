import React from 'react';
import star from "../../static/star.png";
import filledStar from "../../static/filledStar.png"
import {Button, Image} from "@mantine/core";

const StorageFiling = ({vacancyId, filled, addToStorage, deleteFromStorage}) => {

    if (!filled) {
        return (
            <Button variant="subtle"
                    onClick={addToStorage}
                    data-elem={`vacancy-${vacancyId}-shortlist-button`}
            >
                <Image alt="Добавить в избранное" src={star} width={21} height={21}/>
            </Button>
        )
    }
    return (
        <Button variant="subtle"
                onClick={deleteFromStorage}
                data-elem={`vacancy-${vacancyId}-shortlist-button`}
        >
            <Image alt="Удалить из избранного" src={filledStar} width={21} height={21}/>
        </Button>
    );
};

export default StorageFiling;