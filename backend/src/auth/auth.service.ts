import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateOAuthLogin(profile: OAuthProfile): Promise<User> {
    let user = await this.userService.findByEmail(profile.email);
    if (!user) {
      user = await this.userService.create({
        name: profile.displayName,
        email: profile.email,
      });
    }
    return user;
  }
}

interface OAuthProfile {
  email: string;
  displayName: string;
}
