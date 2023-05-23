export async function transformVacanciesData(data: any): Promise<any> {
    return {
        vacancy: data.objects.map((item: any) => {
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
    }
}

export async function transformVacancyData(data: any): Promise<any> {
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

export async function transformCataloguesData(data: any): Promise<any> {
    data.map((item: any) => {
        return {
            title_trimmed: item.title_trimmed,
            key: item.key,
        }
    })
}