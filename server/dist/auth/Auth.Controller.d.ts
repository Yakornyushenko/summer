import { AuthService } from "./Auth.service";
export declare class AuthController {
    private readonly AuthService;
    constructor(AuthService: AuthService);
    auth(password: string, login: string): Promise<any>;
}
