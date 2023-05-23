import { Module } from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {AuthController} from "./Auth.Controller";
import {AuthService} from "./Auth.service";

@Module({
    imports: [HttpModule],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
