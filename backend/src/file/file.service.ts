import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FileService {
  async createFile(file: any): Promise<string> {
    try {
      const extension = file.mimetype.split('/')[1];
      const fileName = `${uuid.v4()}.${extension}`;
      const filePath = path.resolve(__dirname, '..', 'static');
      //Todo - переписать на асинхронный вариант
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при обработке файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
