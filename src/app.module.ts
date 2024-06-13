import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PDFController } from './interface/controllers/pdf.controller';
import { UploadPDFUseCase } from './application/use-cases/upload-pdf.usecase';
import { TypeormPDFRepository } from './infrastructure/repositories/pdf.repository';
import { PDF } from './domain/entities/pdf.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite', // or any other database type
            database: ':memory:',
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
    ],
})
export class AppModule {}
