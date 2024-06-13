// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PDFController } from './interface/controllers/pdf.controller';
import { UploadPDFUseCase } from './application/use-cases/upload-pdf.usecase';
import { SubmitForESignUseCase } from './application/use-cases/submit-for-esign.usecase';
import { TypeormPDFRepository } from './infrastructure/repositories/pdf.repository';
import { PDF } from './domain/entities/pdf.entity';
import { ZohoService } from './infrastructure/services/zoho.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [PDF],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([PDF]),
    ],
    controllers: [PDFController],
    providers: [
        {
            provide: 'PDFRepository',
            useClass: TypeormPDFRepository,
        },
        UploadPDFUseCase,
        SubmitForESignUseCase,
        ZohoService,
    ],
})
export class AppModule {}
