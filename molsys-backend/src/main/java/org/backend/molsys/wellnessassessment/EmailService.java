package org.backend.molsys.wellnessassessment;
import org.springframework.stereotype.Service;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamSource;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmailWithAttachment(String[] to, String subject, String body, byte[] csvData, byte[] pdfData, String csvFileName, String pdfFileName) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(body);

        // Add CSV attachment
        InputStreamSource csvAttachment = new ByteArrayResource(csvData);
        helper.addAttachment(csvFileName, csvAttachment);

        // Add PDF attachment
        InputStreamSource pdfAttachment = new ByteArrayResource(pdfData);
        helper.addAttachment(pdfFileName, pdfAttachment);

        javaMailSender.send(message);
    }
}
