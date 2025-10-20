import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AccountDocument = Account & Document;

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ required: true, default: 0 })
  level: number;

  @Prop({ required: false })
  avatar?: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
