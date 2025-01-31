import { Module } from '@nestjs/common';
import {UsersController} from './users.controller'

@Module({

    controllers: [UsersConntroller]
})
export class UsersModule {}
