import { UploadPDFUseCase } from './upload-pdf.usecase';
import { PDFRepository } from '../../domain/repositories/pdf.repository';

describe('UploadPDFUseCase', () => {
    let useCase: UploadPDFUseCase;
    let repository: PDFRepository;

    beforeEach(() => {
        repository = { create: jest.fn() } as any;
        useCase = new UploadPDFUseCase(repository);
    });

    it('should upload PDF', async () => {
        const file = { path: 'test.pdf' } as any;
        const result = await useCase.execute(file);
        expect(result.filePath).toBe('test.pdf');
    });
});
