import { Controller, Get, Post, Patch, Put, Delete, Param, Query } from '@nestjs/common';
import { log } from 'console';

@Controller('users')
export class UsersController {
    @Get('/:id/:optional?')
    public getUsers(@Param() params:any, @Query() query:any){
        console.log(params);
        
        return 'Get users';
    }


    @Post() 
    public createUsers(){
        return "you send a post request to this endpoint"

    }
}
