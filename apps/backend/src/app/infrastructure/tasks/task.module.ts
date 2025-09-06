import { Module } from "@nestjs/common";
import { taskSchedulerProviders } from "./task.providers";

@Module({
  imports: [],
  providers: [...taskSchedulerProviders],
})
export class TaskModule {}
