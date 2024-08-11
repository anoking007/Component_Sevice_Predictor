import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';
import { MachineService } from '../machine/machine.service';
import { PythonService } from '../python/python.service';

@Injectable()
export class PdfService {
  constructor(
    private readonly machineService: MachineService,
    private readonly pythonService: PythonService,
  ) {}

  async generatePdf(user: any, res: Response) {
    const doc = new PDFDocument({ margin: 50 });
  
    // Set headers for the PDF response
    res.setHeader('Content-Disposition', 'attachment; filename=user_report.pdf');
    res.setHeader('Content-Type', 'application/pdf');
  
    // Pipe the PDF document to the response
    doc.pipe(res);
  
    // Add title and user information
    doc.fontSize(25).font('Helvetica-Bold').text('User Report', { align: 'center' });
    doc.moveDown(1);
  
    doc.fontSize(12).font('Helvetica').text(`Username: ${user.username}`, { align: 'left' });
    doc.fontSize(12).text(`Email: ${user.email}`, { align: 'left' });
    doc.moveDown(1);
  
    // Add section header for machines
    doc.fontSize(18).font('Helvetica-Bold').text('Machines:', { underline: true });
    doc.moveDown(0.5);
    
    const machines = await this.machineService.getMachinesByUser(user.id);
  
    // List all machines owned by the user
    machines.forEach(machine => {
      doc.fontSize(12).font('Helvetica').list([`${machine.machine_type} (ID: ${machine.machine_id})`], {
        bulletIndent: 10,
        indent: 20,
      });
    });
    doc.moveDown(1);
  
    // Add section header for ML model data
    doc.fontSize(18).font('Helvetica-Bold').text('Machine Learning Model Data:', { underline: true });
    doc.moveDown(0.5);
  
    // Include data from the ML model (Python service)
    const mlData = await this.pythonService.readRequirementsFile();
    doc.fontSize(12).font('Helvetica').text(`ML Data: ${mlData}`, { align: 'left' });
  
    // Finalize the PDF
    doc.end();
  }
}


