import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class PythonService {
  async readRequirementsFile(): Promise<string> {
    try {

      const filePath = '/home/cybrosys/Music/Component_Sevice_Predictor/ml/predictions.txt';
      const fileContents = await this.readFile(filePath);
     //console.log('Requirements:', fileContents);
      return fileContents;
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }

  private async readFile(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  }
}

