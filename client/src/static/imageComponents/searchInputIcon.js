import React from 'react';
import searchIcon from "../search.png";
import {createStyles, em, Image} from "@mantine/core";
// import {Image} from "/"

const useStyles = createStyles({
    searchIcon: {
        position: "absolute",
        zIndex: 5,
        top: 19,
        left: 13,
        [`@media (max-width: ${em(800)})`]: {
            top: 30,
            left: 15,
        }
    },
})
const SearchInputIcon = () => {
    const {classes} = useStyles()
    return (
        <Image alt="Поиск вакансий" className={classes.searchIcon} src={searchIcon} w={13} h={13} style={{width: 13}}/>
    );
};

export default SearchInputIcon;