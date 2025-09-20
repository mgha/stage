import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { OAuth2Strategy } from './oauth2.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PassportModule, UserModule],
  providers: [AuthService, OAuth2Strategy],
})
export class AuthModule {}
