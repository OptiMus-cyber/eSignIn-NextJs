// src/infrastructure/services/zoho.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ZohoService {
    async submitForESign(pdfPath: string): Promise<any> {
        const response = await axios.post(
            'https://sign.zoho.com/api/v1/templates/{template_id}/actions',
            {
                // Zoho API payload here
            },
            {
                headers: {
                    'Authorization': `Zoho-oauthtoken yourZohoToken`,
                },
            },
        );
        return response.data;
    }
}
