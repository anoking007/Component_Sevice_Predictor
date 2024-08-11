import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { PdfService } from './pdf.service';
import { Response, Request } from 'express';

@Controller('pdf')
@UseGuards(JwtAuthGuard)
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('generate')
  async generatePdf(@Req() req: Request, @Res() res: Response) {
    
    const user = req.user;
    await this.pdfService.generatePdf(user, res);
  }
}