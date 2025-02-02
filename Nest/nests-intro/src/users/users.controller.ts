import { Controller, Get, Post, Patch, Put, Delete, Param } from '@nestjs/common';
import { log } from 'console';

@Controller('users')
export class UsersController {
    @Get('/:id/:optional?')
    public getUsers(@Param() params:any){
        log
        return 'Get users';
    }


    @Post() 
    public createUsers(){
        return "you send a post request to this endpoint"

    }
}
