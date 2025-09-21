import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { Seed } from "../../schemas/seed.schema";

@Injectable()
export class SeedRepository {
  constructor(
    @InjectModel(Seed.name)
    private readonly model: Model<Seed>
  ) {}

  async create(data: Partial<Seed>): Promise<Seed> {
    return this.model.create(data);
  }

  async findOrCreate(profile: Partial<Seed>): Promise<Seed> {
    const { email } = profile;

    let user = await this.model.findOne({ email }).exec();
    if (!user) {
      user = new this.model({ email });
      await user.save();
    }
    return user;
  }

  async findAll(): Promise<Seed[]> {
    return this.model.find().exec();
  }

  async findById(id: string) {
    assertValidMongoId(id);

    return this.model.findById(id).exec();
  }

  async update(id: string, data: Partial<Seed>) {
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
