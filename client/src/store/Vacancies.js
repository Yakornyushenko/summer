import {makeAutoObservable} from "mobx";

export default class VacanciesStore {
    constructor() {
        this._vacancies = [];
        this._page = 1;
        this._totalPages = 125;
        this._isActive = true;
        this._isFavorite = false;

        this._keyword = '';
        this._catalogues = '';
        this._paymentFrom = 0;
        this._paymentTo = 0;

        this._access_token = '';
        this._refresh_token = '';

        makeAutoObservable(this)
    }

    setRefresh_token(refresh_token) {
        this._refresh_token = refresh_token
    }

    get refresh_token() {
        return this._refresh_token
    }

    setAccess_token(access_token) {
        this._access_token = access_token
    }

    get access_token() {
        return this._access_token
    }

    setPages(page) {
        this._page = page
    }

    get pages() {
        return this._page
    }

    setVacancies(vacancies) {
        this._vacancies = vacancies
    }

    get vacancies() {
        return this._vacancies
    }

    setTotalPages(totalPages) {
        this._totalPages = totalPages
    }

    get totalPages() {
        return this._totalPages
    }

    setIsActive(isActive) {
        this._isActive = isActive
    }

    get isActive() {
        return this._isActive
    }

    setIsFavorite(isFavorite) {
        this._isFavorite = isFavorite
    }

    get isFavorite() {
        return this._isFavorite
    }

    setKeyword(keyword) {
        this._keyword = keyword
    }

    get keyword() {
        return this._keyword
    }

    setCatalogues(catalogues) {
        this._catalogues = catalogues
    }

    get catalogues() {
        return this._catalogues
    }

    setPaymentFrom(paymentFrom) {
        this._paymentFrom = paymentFrom
    }

    get paymentFrom() {
        return this._paymentFrom
    }

    setPaymentTo(paymentTo) {
        this._paymentTo = paymentTo
    }

    get paymentTo() {
        return this._paymentTo
    }

}