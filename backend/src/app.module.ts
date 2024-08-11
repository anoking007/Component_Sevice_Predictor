import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigurationModule } from './config/config.module';
import { PdfController } from './pdf/pdf.controller';
import { PdfService } from './pdf/pdf.service';
import { MachineModule } from './machine/machine.module';
import { MachinesService } from './machineservice/machineservice.service';
import { MachinesController } from './machineservice/machineservice.controller';
import { GeminiService } from './gemini/gemini.service';
import { GeminiController } from './gemini/gemini.controller';
import { GeminiModule } from './gemini/gemini.module';
import { PythonService } from './python/python.service';
import { PythonController } from './python/python.controller';
import { PythonModule } from './python/python.module';
import { PdfModule } from './pdf/pdf.module';
import { MachineServiceModule} from './machineservice/machineservice.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, PrismaModule,ConfigurationModule, MachineModule,GeminiModule, PythonModule, PdfModule,MachineServiceModule],
  controllers: [MachinesController, GeminiController, PythonController,PdfController],
  providers: [MachinesService, GeminiService, PythonService,PdfService,PrismaService],
})
export class AppModule {}
