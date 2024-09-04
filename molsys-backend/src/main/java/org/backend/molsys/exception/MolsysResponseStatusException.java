package org.backend.molsys.exception;

import org.springframework.http.HttpStatus;
import org.springframework.lang.Nullable;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.ConstraintViolationException;

public class MolsysResponseStatusException extends ResponseStatusException {


    public MolsysResponseStatusException(HttpStatus status) {
        super(status, null, null);
    }


    public MolsysResponseStatusException(HttpStatus status, @Nullable String reason) {
        super(status, reason, null);
    }


    public MolsysResponseStatusException(HttpStatus status, @Nullable String reason, @Nullable Throwable cause) {
        super(status, reason, cause);
    }



    public static MolsysResponseStatusException asForbidden(String msg) {
        return asExceptionFromHttpStatus(msg, HttpStatus.FORBIDDEN);
    }
    public static MolsysResponseStatusException asBadRequest(String msg) {
        return asExceptionFromHttpStatus(msg, HttpStatus.BAD_REQUEST);
    }
    public static MolsysResponseStatusException asBadRequest(String msg, Throwable throwable) {
        return new MolsysResponseStatusException( HttpStatus.BAD_REQUEST,msg,throwable);
    }

    public static MolsysResponseStatusException asServerError(String msg) {
        return asExceptionFromHttpStatus(msg, HttpStatus.INTERNAL_SERVER_ERROR);
    }
   public static MolsysResponseStatusException asNoContent(String msg) {
        return asExceptionFromHttpStatus(msg, HttpStatus.BAD_REQUEST);
    }


    public static MolsysResponseStatusException asConstraintViolation(ConstraintViolationException e) {

        return  new MolsysResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(),e);
    }

    public static MolsysResponseStatusException asExceptionFromHttpStatus(String msg, HttpStatus httpStatus) {
        return new MolsysResponseStatusException(httpStatus, msg);
    }


}
