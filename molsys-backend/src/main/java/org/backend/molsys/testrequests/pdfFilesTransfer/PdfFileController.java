package org.backend.molsys.testrequests.pdfFilesTransfer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/pdf")
public class PdfFileController {

    private final PdfFileService pdfFileService;

    // Constructor injection
    @Autowired
    public PdfFileController(PdfFileService pdfFileService) {
        this.pdfFileService = pdfFileService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        PdfFile savedFile = pdfFileService.saveFile(file);
        return ResponseEntity.ok("File uploaded successfully. File ID: " + savedFile.getId());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable Long id) {
        PdfFile pdfFile = pdfFileService.getFile(id);
        if (pdfFile != null) {
            return ResponseEntity.ok()
                    .header("Content-Disposition", "attachment; filename=" + pdfFile.getFileName())
                    .body(pdfFile.getData());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
