import { Injectable } from '@nestjs/common';
import { AdminsService } from 'src/admins/admins.service';
@Injectable()
export class AuthService {
    constructor(private adminsService: AdminsService){}

    async validateAdmin(email: string, password: string): Promise<any>{
        const admin = await this.adminsService.findOne(email);
        if(admin && admin.password === password){
            const {password, email, ...rest} = admin;
            return rest;
        }
        return null;
    }
}
