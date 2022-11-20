import { Injectable } from '@nestjs/common';



export type Admin = {
    id: number;
    fullname: string;
    email: string;
    password: string
}


@Injectable()
export class AdminsService {
    private readonly admins: Admin[] = [
        {id: 1,fullname: "kamal ghrabla",email:"kamalghrabla@gmail.com",password:"hh190093" },
        {id: 2,fullname: "hamza ghrabla",email:"hamzaghrabla@gmail.com",password:"hh160063" },
        {id: 3,fullname: "othmane ghrabla",email:"othmaneghrabla@gmail.com",password:"hh120023" }
    ]
    async findOne(email: string): Promise<Admin | undefined>{
      return this.admins.find(admin => admin.email === email);
    }
}



