import { Module } from '@nestjs/common';
import { MachinesService } from './machineservice.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigurationModule } from '../config/config.module'; 

@Module({
  imports: [ConfigurationModule],
  providers: [MachinesService, PrismaService],
  exports: [MachinesService], 
})
export class MachineServiceModule {}