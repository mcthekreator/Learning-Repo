import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    public async createUser() {
        return 'User created';
    }
}
