import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ZohoESignService {
    async addESignTag(pdfId: number): Promise<any> {
        // Use Zoho API to add eSign tag
    }

    async submitForESign(pdfId: number): Promise<any> {
        // Use Zoho API to submit PDF for eSign
    }
}
