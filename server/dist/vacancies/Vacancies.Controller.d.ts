import { VacanciesService } from "./Vacancies.Service";
export declare class VacanciesController {
    private readonly vacanciesService;
    constructor(vacanciesService: VacanciesService);
    getCategory(): Promise<any>;
    getVacancies(access: string, count: number, page: number, keyword: string, payment_from: number, payment_to: number, catalogues: number): Promise<any[]>;
    getVacancy(id: number): Promise<any>;
}
