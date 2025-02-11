import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body   } from '@nestjs/common';


@Controller('users')
export class UsersController {
    @Get('/:id/:optional?')
    public getUsers(@Param() params:any, @Query() query:any){
        console.log(params);
        console.log(query);
        
        return 'Get users';
    }

 
    @Post()  
    public createUsers(@Body() request:any) {
        console.log(request);
        return "you send a post request to this endpoint"

    }
}
 