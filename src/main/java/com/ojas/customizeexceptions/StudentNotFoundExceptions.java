 package com.ojas.customizeexceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class StudentNotFoundExceptions extends RuntimeException {
	public StudentNotFoundExceptions(String message) {
		super(message);
	}

}
