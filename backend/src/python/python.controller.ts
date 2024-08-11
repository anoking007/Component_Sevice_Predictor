// src/python/python.controller.ts

import { Controller, Get } from '@nestjs/common';
import { PythonService } from './python.service';

@Controller('python')
export class PythonController {
  constructor(private readonly pythonService: PythonService) {}

  @Get('run')
  async runScript(): Promise<string> {
    return this.pythonService.readRequirementsFile();
  }
}

