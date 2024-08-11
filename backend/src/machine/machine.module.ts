import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigurationModule } from '../config/config.module'; 

@Module({
  imports: [PrismaModule],
  providers: [MachineService],
  controllers: [MachineController],
  exports: [MachineService],
})
export class MachineModule {}

