"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacanciesModule = void 0;
const common_1 = require("@nestjs/common");
const Vacancies_Controller_1 = require("./Vacancies.Controller");
const axios_1 = require("@nestjs/axios");
const Vacancies_Service_1 = require("./Vacancies.Service");
let VacanciesModule = class VacanciesModule {
};
VacanciesModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [Vacancies_Controller_1.VacanciesController],
        providers: [Vacancies_Service_1.VacanciesService],
    })
], VacanciesModule);
exports.VacanciesModule = VacanciesModule;
//# sourceMappingURL=Vacancies.module.js.map