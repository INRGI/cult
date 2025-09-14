import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("account")
export class AccountController {
  @Get("google")
  @UseGuards(AuthGuard("google"))
  async googleAuth(@Req() req) {
    return;
  }

  @Get("google/callback")
  @UseGuards(AuthGuard("google"))
  async googleAuthRedirect(@Req() req) {
    return {
      message: "success",
      user: req.user,
    };
  }
}
