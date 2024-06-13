// src/application/use-cases/submit-for-esign.usecase.ts
import { Injectable } from '@nestjs/common';
import { ZohoService } from '../../infrastructure/services/zoho.service';

@Injectable()
export class SubmitForESignUseCase {
    constructor(private readonly zohoService: ZohoService) {}

    async execute(pdfId: number): Promise<any> {
        // Fetch PDF details using PDFRepository
        const pdf = '';
        if (!pdf) {
            throw new Error('PDF not found');
        }
        // Submit to Zoho
        return this.zohoService.submitForESign(pdf);
    }
}
