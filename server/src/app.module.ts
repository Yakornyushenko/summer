import {Module} from '@nestjs/common';
import {VacanciesModule} from "./vacancies/Vacancies.module";
import {AuthModule} from "./auth/Auth.Module";
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

@Module({

    imports: [
        // ServeStaticModule.forRoot({
        //     rootPath: join(__dirname, '..', 'dist'),
        //     renderPath: '*',
        // }),
        AuthModule,
        VacanciesModule
    ],
})
export class AppModule {
}
