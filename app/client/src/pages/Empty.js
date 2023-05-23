import React, {useContext, useEffect} from 'react';
import {Button, Container, createStyles, em, Image, Text} from "@mantine/core";
import {NavLink} from "react-router-dom";
import {SEARCH_ROUTE} from "../routing/consts";

import emptyMan from "../static/EmptyMan.png";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

export const useStyles = createStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: "6rem",
        paddingRight: "5.8rem",
        marginTop: 83,
        [`@media (max-width: ${em(500)})`]: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
    emptyText: {
        fontWight: 700,
        fontSize: 27,
        letterSpacing: 1,
        margin: "26px 0 25px 0",
        color: "#343A40",
    },
})

const Empty = observer(() => {
    const {vacancy} = useContext(Context)
    const {classes} = useStyles()

    useEffect(() =>  vacancy.setIsActive(false), [])

    return (
        <Container className={classes.wrapper}>
            <Image alt={"Список избранных вакансий пуст"} src={emptyMan} height={230} width={240}/>
            <Text className={classes.emptyText}>Упс здесь ещё ничего нет!</Text>
            <Button variant="light" style={{letterSpacing: 1}} w={164} h={42}>
                <NavLink style={{textDecoration: "none", color: "#3B7CD3"}} to={SEARCH_ROUTE}>Поиск Вакансий</NavLink>
            </Button>
        </Container>
    );
});

export default Empty;