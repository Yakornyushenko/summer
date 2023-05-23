import React, {useContext, useState} from "react";
import {Flex, Text, Image, createStyles, Loader, Box, em} from "@mantine/core";

import location from "../../static/location.png";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Pages from "../Pages";
import {useHistory} from "react-router-dom";
import {VACANCY_ROUTE} from "../../routing/consts";
import {transformTitle} from "../../utils/transformTitle";
import StorageFiling from "./StorageFiling";

export const useStyles = createStyles({
    wrapper: {
        marginTop: 16,
        padding: "20px 24px 17px 22px",
        border: "1px solid #EAEBED",
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
        cursor: "pointer",
        [`@media (max-width: ${em(350)})`]: {
            height: 200,
        }
    },
    cardTitle: {
        fontWight: 600, fontSize: 20, color: "#5E96FC",
    }
})

const VacancyCard = observer(({isFavorites}) => {
    const {vacancy} = useContext(Context)
    const {classes} = useStyles()
    const history = useHistory()

    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || [])

    const addToStorage = (event, item) => {
        event.stopPropagation();
        const isFavorites = favorites.some(vacancy => vacancy.id === item.id);
        if (!isFavorites) {
            const updateFavorites = [...favorites, item]
            setFavorites(updateFavorites);
            localStorage.setItem('favorites', JSON.stringify(updateFavorites));
        }
    }

    const deleteFromStorage = (event, item) => {
        event.stopPropagation();
        const updateFavorites = favorites.filter(vacancy => vacancy.id !== item.id)
        setFavorites(updateFavorites);
        localStorage.setItem('favorites', JSON.stringify(updateFavorites));
    }

    if (vacancy.vacancies.length === 0) {
        return <div style={{display: "flex", paddingTop: 100, justifyContent: "center"}}>
            <Loader width={40} height={40}/>
        </div>
    }
    return (
        <>
            {vacancy.vacancies.map((item, index) =>
                <Box key={index} className={classes.wrapper} mih={137} data-elem={`vacancy-${item.id}`}
                     onClick={() => history.push(VACANCY_ROUTE + '/' + item.id)}
                >
                    <Flex justify="space-between" align="center">
                        <Text className={classes.cardTitle}>{transformTitle(item.profession, 69)}</Text>

                        <StorageFiling
                            vacancyId={item.id}
                            filled={favorites.some(favorite => favorite.id === item.id)}
                            addToStorage={(event) => addToStorage(event, item)}
                            deleteFromStorage={(event) => deleteFromStorage(event, item)}
                        />

                    </Flex>

                    <Flex style={{paddingTop: 5}} align="center">
                        <Text style={{fontWeight: 600, color: "#232134"}}>
                            {item.payment_from === 0 ? 'з/п по договоренности'
                                : `з/п от ${item.payment_from} ${item.currency}`}
                        </Text>
                        <Text style={{paddingLeft: 40, paddingRight: 14, fontSize: 20}}>•</Text>
                        <Text style={{fontWeight: 400, color: "#232134"}}>{item.type_of_work}</Text>
                    </Flex>

                    <Flex align="flex-end">
                        <Image alt="Расположение" src={location} width={20} height={20}/>
                        <Text style={{
                            fontWeight: 400,
                            color: "#232134",
                            paddingLeft: 7,
                            paddingTop: 2
                        }}>
                            {item.town}
                        </Text>
                    </Flex>
                </Box>
            )}
            <Pages isFavorites={isFavorites}/>
        </>
    );
});

export default VacancyCard;