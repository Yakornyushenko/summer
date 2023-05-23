import React, {useContext, useEffect, useState} from 'react';
import {Box, Container, createStyles, em, Flex, Image, Loader, Text} from "@mantine/core";
import {useParams} from "react-router-dom";
import {getVacancy} from "../http/vacancies";
import parse from 'html-react-parser';
import location from "../static/location.png";
import {transformTitle} from "../utils/transformTitle";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import StorageFiling from "../components/vacancies/StorageFiling";

export const useStyles = createStyles({
    wrapper: {
        paddingLeft: "6rem",
        paddingRight: "5.8rem",
        [`@media (max-width: ${em(500)})`]: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        }
    },
    titleWrapper: {
        marginTop: 3,
        padding: "20px 24px 17px 22px",
        border: "1px solid #EAEBED",
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
    },
    infoWrapper: {
        border: "1px solid #EAEBED",
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
        padding: "20px 24px 17px 22px",
    },
    cardTitle: {
        fontWight: 700, fontSize: 28, color: "#232134",
    },
    locationText: {
        fontWeight: 400,
        color: "#232134",
        paddingLeft: 7,
        paddingTop: 2
    }
})

const Vacancy = observer(() => {
    const {vacancy} = useContext(Context)
    const {id} = useParams()
    const {classes} = useStyles()

    const [unparsedVacancy, setUnparsedVacancy] = useState('')
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || [])

    const parsedText = typeof unparsedVacancy.vacancyRichText === 'string' ? parse(unparsedVacancy.vacancyRichText) : null;

    const addToStorage = (event) => {
        event.stopPropagation();
        const isFavorites = favorites.some(vacancy => vacancy.id === unparsedVacancy.id);
        if (!isFavorites) {
            const updateFavorites = [...favorites, unparsedVacancy]
            setFavorites(updateFavorites);
            localStorage.setItem('favorites', JSON.stringify(updateFavorites));
        }
    }
    const deleteFromStorage = (event) => {
        event.stopPropagation();
        const updateFavorites = favorites.filter(vacancy => vacancy.id !== unparsedVacancy.id)
        setFavorites(updateFavorites);
        localStorage.setItem('favorites', JSON.stringify(updateFavorites));
    }

    useEffect(() => {
        if (vacancy.isFavorite) {
            vacancy.setIsActive(false)
        } else {
            vacancy.setIsActive(true)
        }

        getVacancy(id).then(res => setUnparsedVacancy(res))
    }, []);
    console.log('vacancy', vacancy)
    if (!unparsedVacancy.profession) {
        return <div style={{display: "flex", paddingTop: 100, justifyContent: "center"}}>
            <Loader width={40} height={40}/>
        </div>
    }

    return (
        <Container className={classes.wrapper}>
            <Box style={{cursor: 'default'}} className={classes.titleWrapper} mih={156}>
                <Flex justify="space-between" align="center">
                    <Text className={classes.cardTitle}>{transformTitle(unparsedVacancy.profession)}</Text>
                    <StorageFiling
                        filled={favorites.some(favorite => favorite.id === unparsedVacancy.id)}
                        addToStorage={(event) => addToStorage(event)}
                        deleteFromStorage={(event) => deleteFromStorage(event)}
                    />
                </Flex>

                <Flex style={{paddingTop: 5}} align="center">
                    <Text style={{fontWeight: 600, color: "#232134"}}>з/п
                        от {unparsedVacancy.payment_from} {unparsedVacancy.currency}</Text>
                    <Text style={{paddingLeft: 40, paddingRight: 14, fontSize: 20}}>•</Text>
                    <Text style={{fontWeight: 400, color: "#232134"}}>{unparsedVacancy.type_of_work}</Text>
                </Flex>

                <Flex align="center" mt={7}>
                    <Image alt="Расположение" src={location} width={20} height={20}/>
                    <Text className={classes.locationText}>
                        {unparsedVacancy.town}
                    </Text>
                </Flex>
            </Box>
            <Box className={classes.infoWrapper} mt={20}>
                {parsedText}
            </Box>
        </Container>
    );
});

export default Vacancy;