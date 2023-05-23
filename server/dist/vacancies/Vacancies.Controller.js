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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacanciesController = void 0;
const common_1 = require("@nestjs/common");
const Vacancies_Service_1 = require("./Vacancies.Service");
let VacanciesController = class VacanciesController {
    constructor(vacanciesService) {
        this.vacanciesService = vacanciesService;
    }
    async getCategory() {
        return await this.vacanciesService.getVacancyCatalogues();
    }
    async getVacancies(access, count, page, keyword, payment_from, payment_to, catalogues) {
        return await this.vacanciesService.getVacancies(access, page, count, keyword, payment_from, payment_to, catalogues);
    }
    async getVacancy(id) {
        return await this.vacanciesService.getVacancy(id);
    }
};
__decorate([
    (0, common_1.Get)('catalogues'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VacanciesController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Get)('vacancies'),
    __param(0, (0, common_1.Query)('access')),
    __param(1, (0, common_1.Query)('count')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('keyword')),
    __param(4, (0, common_1.Query)('payment_from')),
    __param(5, (0, common_1.Query)('payment_to')),
    __param(6, (0, common_1.Query)('catalogues')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], VacanciesController.prototype, "getVacancies", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VacanciesController.prototype, "getVacancy", null);
VacanciesController = __decorate([
    (0, common_1.Controller)(['/api']),
    __metadata("design:paramtypes", [Vacancies_Service_1.VacanciesService])
], VacanciesController);
exports.VacanciesController = VacanciesController;
//# sourceMappingURL=Vacancies.Controller.js.map