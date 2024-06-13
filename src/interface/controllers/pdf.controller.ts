import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadPDFUseCase } from '../../application/use-cases/upload-pdf.usecase';
import { Express } from 'express';

@Controller('pdf')
export class PDFController {
    constructor(private readonly uploadPDFUseCase: UploadPDFUseCase) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadPDF(@UploadedFile() file: Express.Multer.File) {
        return this.uploadPDFUseCase.execute(file);
    }
}
