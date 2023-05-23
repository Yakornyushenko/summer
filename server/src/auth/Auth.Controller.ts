import {Controller, Get, Query} from '@nestjs/common';
import {AuthService} from "./Auth.service";

@Controller('/api')
export class AuthController {

    constructor(private readonly AuthService: AuthService) {}

    @Get('auth')
    async auth(
        @Query('password') password: string,
        @Query('login') login: string,
    ): Promise<any> {
        return this.AuthService.auth(password, login);
    }
}