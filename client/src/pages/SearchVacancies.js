import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {FilterForm} from "../components/vacancies/FilterForm";
import {getCategories, getVacancies} from "../http/vacancies";
import VacancyCard from "../components/vacancies/VacancyCard";

import {Context} from "../index";
import {Box, Button, createStyles, em, Flex, Input} from "@mantine/core";

import SearchInputIcon from "../static/imageComponents/searchInputIcon";
import {auth} from "../http/auth";

const useStyles = createStyles(() => ({
    searchInput: {
        width: "100%",
        borderRadius: "12px",
        [`@media (max-width: ${em(800)})`]: {
            marginLeft: 0,
            marginTop: 10,
        }
    },
    wrapper: {
        [`@media (max-width: ${em(800)})`]: {
            flexWrap: "wrap",
            justifyContent: "center",
        },
    },
    formWrapper: {
        paddingLeft: 30,
        width: "-webkit-fill-available",
        [`@media (max-width: ${em(800)})`]: {
            paddingLeft: 0,
        },
    },
    inputWrap: {
        position: "relative",
        display: "flex",
        [`@media (max-width: ${em(350)})`]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    searchButton: {
        height: 32,
        width: 81,
        zIndex: 5,
        position: "absolute",
        borderRadius: "10px",
        marginRight: 10,
        right: 2,
        top: 10,
        [`@media (max-width: ${em(800)})`]: {
            marginRight: 14,
            top: 18,
        },
        [`@media (max-width: ${em(350)})`]: {
            position: "unset",
            margin: "20px 0px 0px 0px",
            width: 100,
            height: 40,

        },
    },
}))

const SearchVacancies = observer(() => {
    const {vacancy} = useContext(Context)
    const [categories, setCategories] = useState([])
    const {classes} = useStyles()

    const [inputKeyword, setInputKeyword] = useState('')
    useEffect(() => {
        vacancy.setIsActive(true)
        getVacancies(vacancy.access_token, vacancy.pages, 4, vacancy.keyword, vacancy.catalogues, vacancy.paymentFrom, vacancy.paymentTo)
            .then(res => {
                vacancy.setTotalPages(res.total);
                vacancy.setVacancies(res.vacancy)
            })
    }, [vacancy.pages, vacancy.keyword, vacancy.catalogues, vacancy.paymentFrom, vacancy.paymentTo])

    useEffect(() => {
        auth().then((res) => {
            vacancy.setAccess_token(res.access_token)
            vacancy.setRefresh_token(res.refresh_token)
        })
        getCategories().then((res) => setCategories(res))
    }, [])

    return (
        <Flex className={classes.wrapper}>

            <FilterForm categories={categories}/>

            <div className={classes.formWrapper}>
                <Box w="100%" className={classes.inputWrap}>
                    <SearchInputIcon/>
                    <Input
                        data-elem="search-input"
                        className={classes.searchInput}
                        placeholder="Введите название вакансии"
                        value={inputKeyword}
                        onChange={(e) => setInputKeyword(e.target.value)}
                        styles={{
                            input: {
                                height: 50,
                                fontSize: 16,
                                paddingLeft: 32,
                            }
                        }}
                    />
                    <Button
                        data-elem="search-button"
                        onClick={() => vacancy.setKeyword(inputKeyword)}
                        className={classes.searchButton}>Поиск</Button>
                </Box>
                <VacancyCard isFavorites={false}/>
            </div>
        </Flex>
    );
});

export default SearchVacancies;
