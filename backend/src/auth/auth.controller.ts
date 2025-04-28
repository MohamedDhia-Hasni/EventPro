import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup') //auth/signup
  async signup(@Body() signupData: SignupDto) {
    return this.authService.signup(signupData);
  }
  @Post('login') //auth/login
  async login(@Body() loginData: { email: string; password: string }) {
    return this.authService.login(loginData);
  }
  /*@Post('logout') //auth/logout
  async logout(@Body() logoutData: { userId: string }) {
    return this.authService.logout(logoutData);
  }*/
}
