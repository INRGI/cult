import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { AccountRepository } from "../../../infrastructure/database/repositories/account/account.repository";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(private accountRepository: AccountRepository) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        "http://localhost:3000/account/google/callback",
      scope: ["email", "profile"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    const email = profile.emails[0].value;

    if (!email.endsWith("@epcnetwork")) {
      throw new UnauthorizedException("Unauthorized");
    }

    const user = await this.accountRepository.findOrCreate({
      email,
      name: profile.displayName,
    });

    return done(null, user);
  }
}
