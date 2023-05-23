import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";

@Injectable()
export class AuthService {

    constructor(private readonly httpService: HttpService) {}

    async auth(password, login): Promise<any> {
        const url = 'https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password';
        const params = {
            login: login,
            password: password,
            client_id: '2356',
            client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
            hr: 0
        };
        const headers = {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        };

        const response = await this.httpService.get(url, { params, headers }).toPromise();
        return response.data;
    }
}