import React from 'react';
import {createStyles, Grid, Text, Image} from "@mantine/core";

import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../index";
import {FAVORITE_VACANCIES_ROUTE, SEARCH_ROUTE} from "../routing/consts";

import Union from "../static/union.png";
import {observer} from "mobx-react-lite";

const useStyles = createStyles((theme) => ({
    wrapper: {
        width: "100%",
        [theme.fn.largerThan('sm')]: {
            paddingLeft: 109,
        },
    },

    logo: {
        paddingLeft: 12,
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "36px",
        color: "#232134",
    },
    searchLink: {
        color: "#232134",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "20px",
        minWidth: 127,
        textDecoration: "none",
    },
    activeSearchLink: {
        color: "#5E96FC",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "20px",
        minWidth: 127,
        textDecoration: "none",
    },
    link: {
        marginLeft: 60,
        color: "#232134",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "20px",
        textDecoration: "none",
    },
    headerCentering: {
        display: "flex",
        textDecoration: "none",
        [theme.fn.smallerThan('sm')]: {
            justifyContent: "center",
        }
    },
}));
export const DefaultHeader = observer(() => {
    const {vacancy} = useContext(Context)
    const {classes} = useStyles();

    return (
        <Grid className={classes.wrapper} justify="space-around" align="center" style={{height: 98}}>
            <Grid.Col sm={3} xs={3}>
                <NavLink className={classes.headerCentering} to={SEARCH_ROUTE} exact>
                    <Image alt="Jobored" style={{marginTop: 4}} width={30} height={30} src={Union}/>
                    <Text className={classes.logo}>Jobored</Text>
                </NavLink>
            </Grid.Col>

            <Grid.Col className={classes.headerCentering} sm={3} xs={3}>
                <NavLink className={classes.searchLink}
                         to={SEARCH_ROUTE}
                         activeStyle={vacancy.isActive && {color: "#5E96FC"}}>
                    Поиск Вакансий
                </NavLink>

                <NavLink activeStyle={{color: "#5E96FC"}}
                         className={classes.link}
                         to={FAVORITE_VACANCIES_ROUTE}>
                    Избранное
                </NavLink>
            </Grid.Col>
            <Grid.Col sm={3} xs={3}>
            </Grid.Col>
        </Grid>
    );
});