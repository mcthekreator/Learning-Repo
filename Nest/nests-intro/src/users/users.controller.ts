import { Controller, Get, Post, Patch, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/:id')
    public getUsers(){
        return 'Get users';
    }


    @Post() 
    public createUsers(){
        return "you send a post request to this endpoint"

    }
}
