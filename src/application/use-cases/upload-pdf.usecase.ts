import { Injectable } from '@nestjs/common';
import { PDF } from '../../domain/entities/pdf.entity';
import { PDFRepository } from '../../domain/repositories/pdf.repository';
import { Express } from 'express';

@Injectable()
export class UploadPDFUseCase {
    constructor(private readonly pdfRepository: PDFRepository) {}

    async execute(file: Express.Multer.File): Promise<PDF> {
        const pdf = new PDF();
        pdf.filePath = file.path;
        pdf.status = 'Uploaded';
        pdf.createdAt = new Date();
        pdf.updatedAt = new Date();
        return this.pdfRepository.create(pdf);
    }
}
