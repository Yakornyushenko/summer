"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCataloguesData = exports.transformVacancyData = exports.transformVacanciesData = void 0;
async function transformVacanciesData(data) {
    return {
        vacancy: data.objects.map((item) => {
            return {
                profession: item.profession,
                firm_name: item.firm_name,
                town: item.town.title,
                type_of_work: item.type_of_work.title,
                payment_from: item.payment_from,
                payment_to: item.payment_to,
                currency: item.currency,
                id: item.id,
            };
        }),
        total: data.total
    };
}
exports.transformVacanciesData = transformVacanciesData;
async function transformVacancyData(data) {
    return {
        profession: data.profession,
        firm_name: data.firm_name,
        town: data.town.title,
        type_of_work: data.type_of_work.title,
        payment_from: data.payment_from,
        payment_to: data.payment_to,
        currency: data.currency,
        id: data.id,
        vacancyRichText: data.vacancyRichText,
    };
}
exports.transformVacancyData = transformVacancyData;
async function transformCataloguesData(data) {
    data.map((item) => {
        return {
            title_trimmed: item.title_trimmed,
            key: item.key,
        };
    });
}
exports.transformCataloguesData = transformCataloguesData;
//# sourceMappingURL=utils.js.map