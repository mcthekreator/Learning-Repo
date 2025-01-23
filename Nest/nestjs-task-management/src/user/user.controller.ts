import { Controller , Get} from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';

@Controller('user')
export class UserController {

    constructor(){}

    @Get()
    getuser(): UserEntity{
        const user = new UserEntity({
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'example@mail.com'
        })
        return user;
    }




}
