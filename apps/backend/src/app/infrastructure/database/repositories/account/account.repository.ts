import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { Account } from "../../schemas/account.schema";

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Account.name)
    private readonly model: Model<Account>
  ) {}

  async create(data: Partial<Account>): Promise<Account> {
    return this.model.create(data);
  }

  async findOrCreate(profile: Partial<Account>): Promise<Account> {
    const { email, name } = profile;

    let user = await this.model.findOne({ email }).exec();
    if (!user) {
      user = new this.model({ email, name });
      await user.save();
    }
    return user;
  }

  async findAll(): Promise<Account[]> {
    return this.model.find().exec();
  }

  async findById(id: string) {
    assertValidMongoId(id);

    return this.model.findById(id).exec();
  }

  async findByEmail(email: string): Promise<Account | null> {
    return this.model.findOne({ email }).exec();
  }

  async update(id: string, data: Partial<Account>) {
    assertValidMongoId(id);
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string) {
    assertValidMongoId(id);

    await this.model.findByIdAndDelete(id).exec();
  }
}

export function assertValidMongoId(id: string): void {
  if (!isValidObjectId(id)) {
    throw new BadRequestException("Invalid ID format");
  }
}
