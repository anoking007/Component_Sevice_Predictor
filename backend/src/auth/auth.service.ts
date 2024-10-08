import { Injectable, ConflictException } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async validateUser({ username, password }: AuthPayloadDto) {
    const findUser = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!findUser) return null;

    const isPasswordValid = password === findUser.password;
    if (isPasswordValid) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }

    return null;
  }

  async signup({ username, password, email, phone }: AuthPayloadDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const newUser = await this.prisma.user.create({
      data: {
        username,
        password,
        email,
        phone,
      },
    });

    const { password: _, ...user } = newUser;

    return this.jwtService.sign(user);
  }
}

