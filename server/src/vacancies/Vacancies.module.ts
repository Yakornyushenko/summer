import { Module } from '@nestjs/common';
import { VacanciesController } from './Vacancies.Controller';
import {HttpModule} from "@nestjs/axios";
import {VacanciesService} from "./Vacancies.Service";

@Module({
    imports: [HttpModule],
    controllers: [VacanciesController],
    providers: [VacanciesService],
})
export class VacanciesModule {}
