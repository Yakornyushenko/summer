import { HttpService } from "@nestjs/axios";
export declare class VacanciesService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getVacancyCatalogues(): Promise<any>;
    getVacancies(access: string, page: number, count: number, keyword: string, payment_from: number, payment_to: number, catalogues: number): Promise<any[]>;
    getVacancy(id: number): Promise<any>;
}
