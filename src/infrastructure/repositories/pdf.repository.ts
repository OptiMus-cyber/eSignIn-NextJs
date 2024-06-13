import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PDF } from '../../domain/entities/pdf.entity';
import { PDFRepository } from '../../domain/repositories/pdf.repository';

@Injectable()
export class TypeormPDFRepository implements PDFRepository {
    constructor(
        @InjectRepository(PDF)
        private readonly pdfRepository: Repository<PDF>,
    ) {}

    async create(pdf: PDF): Promise<PDF> {
        return this.pdfRepository.save(pdf);
    }

    async findById(id: number): Promise<PDF> {
        return this.pdfRepository.findOne({ where: { id } });
    }

    async update(pdf: PDF): Promise<PDF> {
        return this.pdfRepository.save(pdf);
    }
}
