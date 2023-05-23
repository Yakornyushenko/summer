"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacanciesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const utils_1 = require("./utils");
const headers = {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
};
let VacanciesService = class VacanciesService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getVacancyCatalogues() {
        const url = 'https://startup-summer-proxy-production.up.railway.app/2.0/catalogues/';
        const res = await this.httpService.get(url, { headers }).toPromise();
        const response = res.data;
        return await response;
    }
    async getVacancies(access, page, count, keyword, payment_from, payment_to, catalogues) {
        const url = 'https://startup-summer-proxy-production.up.railway.app/2.0/vacancies/';
        const params = {
            page: page || 0,
            count: count || 4,
            published: 1,
            payment_from: payment_from,
            payment_to: payment_to,
            catalogues: catalogues,
            keyword: keyword,
        };
        const headers = {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
            'access_token': access
        };
        const res = await this.httpService.get(url, { params, headers }).toPromise();
        const response = res.data;
        return await (0, utils_1.transformVacanciesData)(response);
    }
    ;
    async getVacancy(id) {
        const url = `https://startup-summer-proxy-production.up.railway.app/2.0/vacancies/${id}/`;
        const res = await this.httpService.get(url, { headers }).toPromise();
        const response = res.data;
        return await (0, utils_1.transformVacancyData)(response);
    }
};
VacanciesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], VacanciesService);
exports.VacanciesService = VacanciesService;
//# sourceMappingURL=Vacancies.Service.js.map