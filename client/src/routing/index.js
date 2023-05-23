import {
    EMPTY_VACANCY_ROUTE,
    FAVORITE_VACANCIES_ROUTE,
    FAVORITE_VACANCY_ROUTE,
    SEARCH_ROUTE,
    VACANCIES_ROUTE,
    VACANCY_ROUTE
} from "./consts.js";

import SearchVacancies from "../pages/SearchVacancies";
import Vacancy from "../pages/Vacancy";
import Empty from "../pages/Empty";
import FavoritesVacancies from "../pages/FavoritesVacancy";


export const Routes = [
    {
        path: SEARCH_ROUTE,
        component: SearchVacancies
    },
    {
        path: VACANCIES_ROUTE + '/:id',
        component: SearchVacancies
    },
    {
        path: VACANCY_ROUTE + '/:id',
        component: Vacancy
    },
    {
        path: FAVORITE_VACANCIES_ROUTE,
        component: FavoritesVacancies
    },
    {
        path: FAVORITE_VACANCY_ROUTE + '/:id',
        component: Vacancy
    },
    {
        path: EMPTY_VACANCY_ROUTE,
        component: Empty
    },
]