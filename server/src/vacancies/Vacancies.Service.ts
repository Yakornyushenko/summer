import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import { transformVacanciesData, transformVacancyData} from "./utils";


const headers = {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
};

@Injectable()
export class VacanciesService {
    constructor(private readonly httpService: HttpService) {
    }

    async getVacancyCatalogues(): Promise<any> {
        const url = 'https://startup-summer-proxy-production.up.railway.app/2.0/catalogues/';

        const res = await this.httpService.get(url, {headers}).toPromise();
        const response = res.data;
        return await response
    }

    async getVacancies(
        access: string,
        page: number,
        count: number,
        keyword: string,
        payment_from: number,
        payment_to: number,
        catalogues: number,): Promise<any[]> {
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
        const res = await this.httpService.get(url, {params, headers}).toPromise();
        const response = res.data;
        return await transformVacanciesData(response)
    };

    async getVacancy(id: number): Promise<any> {
        const url = `https://startup-summer-proxy-production.up.railway.app/2.0/vacancies/${id}/`;
        const res = await this.httpService.get(url, {headers}).toPromise();

        const response = res.data;
        return await transformVacancyData(response)
    }
}