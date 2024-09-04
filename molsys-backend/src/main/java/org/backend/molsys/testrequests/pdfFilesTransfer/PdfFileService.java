package org.backend.molsys.testrequests.pdfFilesTransfer;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class PdfFileService {

    private final PdfFileRepository pdfFileRepository;

    // Constructor injection
    public PdfFileService(PdfFileRepository pdfFileRepository) {
        this.pdfFileRepository = pdfFileRepository;
    }

    public PdfFile saveFile(MultipartFile file) throws IOException {
        PdfFile pdfFile = new PdfFile();
        pdfFile.setFileName(file.getOriginalFilename());
        pdfFile.setData(file.getBytes());
        return pdfFileRepository.save(pdfFile);
    }

    public PdfFile getFile(Long fileId) {
        return pdfFileRepository.findById(fileId).orElse(null);
    }
}
