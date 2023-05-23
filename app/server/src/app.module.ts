import {Module} from '@nestjs/common';
import {VacanciesModule} from "./vacancies/Vacancies.module";
import {AuthModule} from "./auth/Auth.Module";

@Module({

    imports: [
        AuthModule,
        VacanciesModule
    ],
})
export class AppModule {
}
