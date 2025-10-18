import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../services/auth/auth.service";

@Controller("account")
export class AccountController {
  constructor(private readonly authService: AuthService) {}

  @Post("auth/google")
  async googleLogin(@Body("token") token: string) {
    if (!token) throw new UnauthorizedException("Missing token");
    return this.authService.googleLogin(token);
  }
}
