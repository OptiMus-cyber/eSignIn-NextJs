import { PDF } from '../entities/pdf.entity';

export interface PDFRepository {
    create(pdf: PDF): Promise<PDF>;
    findById(id: number): Promise<PDF>;
    update(pdf: PDF): Promise<PDF>;
}
