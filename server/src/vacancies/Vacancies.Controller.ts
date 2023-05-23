import {Controller, Get, Param, Query} from '@nestjs/common';
import {VacanciesService} from "./Vacancies.Service";

@Controller(['/api'])
export class VacanciesController {
    constructor(private readonly vacanciesService: VacanciesService) {
    }

    @Get('catalogues')
    async getCategory(): Promise<any> {
        return await this.vacanciesService.getVacancyCatalogues();
    }

    @Get('vacancies')
    async getVacancies(
        @Query('access') access: string,
        @Query('count') count: number,
        @Query('page') page: number,
        @Query('keyword') keyword: string,
        @Query('payment_from') payment_from: number,
        @Query('payment_to') payment_to: number,
        @Query('catalogues') catalogues: number,
    ): Promise<any[]> {
        return await this.vacanciesService.getVacancies(access, page, count, keyword, payment_from, payment_to, catalogues);

    }

    @Get(':id')
    async getVacancy(@Param('id') id: number): Promise<any> {
        return await this.vacanciesService.getVacancy(id);
    }
}