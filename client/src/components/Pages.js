import React, {useContext, useEffect, useState} from 'react';
import {Pagination} from "@mantine/core";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Pages = observer(({isFavorites, setCurrentPage, currentPage}) => {
    const {vacancy} = useContext(Context)
    const [currentVacancyPage, setCurrentVacancyPage] = useState(1)
    const favoritesVacancy = JSON.parse(localStorage.getItem('favorites'))

    useEffect(() => {
        if (!isFavorites) {
            document.querySelector('.mantine-Pagination-dots').style.display = 'none';
            const btn = document.querySelectorAll('.mantine-UnstyledButton-root');
            btn[11].style.display = 'none'
        }
    }, [])

    useEffect(() => {
        vacancy.setPages(currentVacancyPage)
    }, [currentVacancyPage])
    useEffect(() => {

    }, [])

    return (
        isFavorites ?
            <Pagination
                style={{display: 'flex', justifyContent: 'center', paddingTop: 40}}
                total={favoritesVacancy.length / 4}
                siblings={0}
                withControls={true}
                value={currentPage}
                onChange={setCurrentPage}
            />
            : <Pagination
                style={{display: 'flex', justifyContent: 'center', paddingTop: 40}}
                total={vacancy.totalPages}
                siblings={0}
                withControls={true}
                value={currentVacancyPage}
                onChange={setCurrentVacancyPage}
            />

    );
});

export default Pages;


