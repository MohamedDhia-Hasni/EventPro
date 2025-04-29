import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { SignupDto } from './dtos/signup.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signup(signupData: SignupDto) {
    const { name, email, password } = signupData;
    const emailInUse = await this.userModel.findOne({ email: email });
    if (emailInUse) {
      throw new BadRequestException('Email already in use');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.userModel.create({
      email,
      password: hashedPassword,
      name,
    });
    return {
      message: 'User created successfully',
      status: 'success',
    };
  }
  async login(loginData: LoginDto) {
    const { email, password } = loginData;
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.generateUserToken(user._id as string);
  }
  async generateUserToken(userId: string) {
    const accessToken = await this.jwtService.sign({ userId });

    return {
      accessToken,
    };
  }
}
