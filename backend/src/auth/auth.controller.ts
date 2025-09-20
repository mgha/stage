import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from '../user/entities/user.entity';

interface AuthenticatedRequest extends Request {
  user: User;
}

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  login() {
    // Redirige vers le provider OAuth2
  }

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  callback(@Req() req: AuthenticatedRequest) {
    // Ici, tu peux gérer la session ou retourner un token JWT
    return req.user;
  }
}
