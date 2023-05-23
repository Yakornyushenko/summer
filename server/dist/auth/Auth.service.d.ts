import { HttpService } from "@nestjs/axios";
export declare class AuthService {
    private readonly httpService;
    constructor(httpService: HttpService);
    auth(password: any, login: any): Promise<any>;
}
