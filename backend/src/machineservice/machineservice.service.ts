import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class MachinesService {
  constructor(private prisma: PrismaService) {}

  async assignMachineToUser(machineId: string, userId: number) {
    
    const machine = await this.prisma.machine.findUnique({
      where: { machine_id: machineId },
    });
    if (!machine) {
      throw new NotFoundException('Machine not found');
    }

   
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.machine.update({
      where: { machine_id: machineId },
      data: { ownerId: userId },
    });
  }
}
