import { Injectable } from '@nestjs/common';
import { Client } from './interfaces/client.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClientService {
    constructor(@InjectModel('Client') private readonly clientModel: Model<Client>){}
    
    async Register(client: Client): Promise<Client>{ 
      const newClient = new this.clientModel(client)
      return await newClient.save()
    }

    async Findall(): Promise<Client[]>{
      return await this.clientModel.find()
    }

    async Login(data){
      const findemail = await this.clientModel.find({email: data.email})
      return findemail[0]
    }


}
