import { Module } from '@nestjs/common';
import { GeminiController } from './gemini.controller'; // Rename the controller
import { GeminiService } from './gemini.service';
import { ConfigurationModule } from '../config/config.module';

@Module({
  controllers: [GeminiController], // Updated controller
  imports: [ConfigurationModule],
  providers: [GeminiService], // Updated service
})
export class GeminiModule {}