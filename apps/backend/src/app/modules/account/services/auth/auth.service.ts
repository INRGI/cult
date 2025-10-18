import { Injectable, UnauthorizedException } from "@nestjs/common";
import { OAuth2Client } from "google-auth-library";
import { AccountRepository } from "../../../../infrastructure/database/repositories/account/account.repository";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  private client: OAuth2Client;

  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly jwtService: JwtService
  ) {
    this.client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }

  async googleLogin(token: string) {
    const ticket = await this.client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload?.email) {
      throw new UnauthorizedException("Invalid Google token");
    }

    if (!payload.email.endsWith("@epcnetwork.io")) {
      throw new UnauthorizedException(
        "Access denied: only EPC Network members allowed"
      );
    }

    let user = await this.accountRepository.findByEmail(payload.email);
    if (!user) {
      user = await this.accountRepository.create({
        email: payload.email,
        name: payload.name,
      });
    }

    const appToken = this.jwtService.sign({ email: user.email });

    return {
      token: appToken,
      user,
    };
  }
}
