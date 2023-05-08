package com.ojas.exceptions;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.ojas.customizeexceptions.StudentNotFoundExceptions;




@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(StudentNotFoundExceptions.class)
	public ResponseEntity<Map<String, Object>> studentNotFound(StudentNotFoundExceptions ex, WebRequest req) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("message", ex.getMessage());
		map.put("timestamp", new Date());
		map.put("path", req.getDescription(false));
		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.NOT_FOUND);
	}
}
