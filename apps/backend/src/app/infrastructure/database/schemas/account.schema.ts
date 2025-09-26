import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Seed } from "./seed.schema";

export type AccountDocument = Account & Document;

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop({ default: false })
  isAdmin: boolean;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
