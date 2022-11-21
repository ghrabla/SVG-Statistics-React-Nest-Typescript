import { Injectable } from '@nestjs/common';
import { Admin } from './interfaces/admin.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AdminsService {
    constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin>){}
    
    async Register(admin: Admin): Promise<Admin>{
      const newAdmin = new this.adminModel(admin)
      return await newAdmin.save()
    }

    async Findall(): Promise<Admin[]>{
      return await this.adminModel.find()
    }

    async Login(data){
      const findemail = await this.adminModel.find({email: data.email})
      return findemail[0]
    }


}
