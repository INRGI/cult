import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SeedDocument = Seed & Document;

@Schema({ timestamps: true })
export class Seed {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  ownerId: string;
}

export const SeedSchema = SchemaFactory.createForClass(Seed);
