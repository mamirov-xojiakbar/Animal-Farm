import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './entities/admin.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>,
  private readonly jwtService: JwtService) {}

   async getTokens(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_active: admin.is_active,
      is_owner: admin.is_creator,
    };

    // Generate access and refresh tokens
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async create(createAdminDto: CreateAdminDto) {
    const {password, confirm_password} = createAdminDto

    const hashed_password = await bcrypt.hash(password, 7)

    if(password != confirm_password) {
      throw new BadRequestException('Password is incorrect')
    }

    const newAdmin = await this.adminModel.create({
      ...createAdminDto, password: hashed_password
    })

    const tokens = await this.getTokens(newAdmin)

    const hashed_token= await bcrypt.hash(tokens.refreshToken, 7)

    const updatedAdmin = await this.adminModel.findByIdAndUpdate(newAdmin._id, {hashed_token}, {new: true})

    return updatedAdmin
  }

  findAll() {
    return this.adminModel.find();
  }

  findOne(id: string) {
    return this.adminModel.findById(id);
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.findByIdAndUpdate(id, updateAdminDto);
  }

  remove(id: string) {
    return this.adminModel.deleteOne({_id: id});
  }
}
