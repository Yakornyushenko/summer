import React, {useContext, useEffect, useState} from "react";
import {Flex, Text, Image, createStyles, Loader, Box, em} from "@mantine/core";

import {observer} from "mobx-react-lite";

import {EMPTY_VACANCY_ROUTE, FAVORITE_VACANCY_ROUTE} from "../routing/consts";
import StorageFiling from "../components/vacancies/StorageFiling";
import Pages from "../components/Pages";
import {transformTitle} from "../utils/transformTitle";
import {Context} from "../index";

import location from "../static/location.png";
import {useHistory} from "react-router-dom";


export const useStyles = createStyles({
    wrapper: {
        margin: "0px 170px 13px 174px",
        padding: "19px 7px 17px 22px",
        border: "1px solid #EAEBED",
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        cursor: "pointer",
        [`@media (max-width: ${em(350)})`]: {
            height: 250,
            margin: "0px 0px 20px 0px",
        }
    },
    cardTitle: {
        fontWight: 600, fontSize: 20, color: "#5E96FC",
    }
})

const FavoritesVacancies = observer(() => {
    const {vacancy} = useContext(Context);
    const {classes} = useStyles()
    const history = useHistory()

    const favoritesVacancies = JSON.parse(localStorage.getItem('favorites'));
    const [pages, setPages] = useState([]);
    const [vacancies, setVacancies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || [])

    useEffect(() => {
        vacancy.setIsFavorite(true)
        vacancy.setIsActive(false)

        setVacancies(favoritesVacancies);
    }, [])

    if (!localStorage.getItem('favorites')) {
        window.location = EMPTY_VACANCY_ROUTE
    } else if (JSON.parse(localStorage.getItem('favorites')).length === 0) {
        window.location = EMPTY_VACANCY_ROUTE
    }

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

 useEffect(() => {
     const pagesCount = Math.ceil(favoritesVacancies.length / 4);
     const pagesData = Array.from({ length: pagesCount }, (_, i) =>
         favoritesVacancies.slice(i * 4, (i + 1) * 4),

     );
     console.log(pagesData)
     setPages(pagesData)
 }, [vacancies]);

    const pageChange = (page) => {
        setCurrentPage(page);
    };

    if (favoritesVacancies === null) {
        return <div style={{display: "flex", paddingTop: 100, justifyContent: "center"}}>
            <Loader width={40} height={40}/>
        </div>
    }
    return (
        <>
            <Box pb={50}>
                {pages[currentPage]?.map((item, index) =>
                    <Box key={index} className={classes.wrapper} mih={140} data-elem={`vacancy-${item.id}`}
                         onClick={() => history.push(FAVORITE_VACANCY_ROUTE + '/' + item.id)}
                    >
                        <Flex justify="space-between" align="center">
                            <Text className={classes.cardTitle}>{transformTitle(item.profession)}</Text>

                            <StorageFiling
                                vacancyId={item.id}
                                filled={favorites.some(favorite => favorite.id === item.id)}
                                addToStorage={(event) => addToStorage(event, item)}
                                deleteFromStorage={(event) => deleteFromStorage(event, item)}
                            />

                        </Flex>

                        <Flex style={{paddingTop: 2, marginLeft: 2}} align="center">
                            <Text style={{fontWeight: 600, color: "#232134"}}>з/п
                                от {item.payment_from} {item.currency}</Text>
                            <Text style={{paddingLeft: 30, paddingRight: 14, fontSize: 20}}>•</Text>
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
                </Box>
                <Pages setCurrentPage={pageChange} currentPage={currentPage} isFavorites={true}/>
            </>
            );
            });

            export default FavoritesVacancies;
