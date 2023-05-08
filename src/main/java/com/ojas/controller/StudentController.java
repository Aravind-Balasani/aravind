 package com.ojas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.model.Student;
import com.ojas.serviceimpl.StudentServiceImpl;

@RestController
@CrossOrigin(value = "http://localhost:3000/")
public class StudentController {

	@Autowired
	private StudentServiceImpl studentService;
	@GetMapping("/")
	public String hello() {
		return "Hello Aravind";
	}

	@PostMapping("/students/add")
	public ResponseEntity<String> createStudent(@RequestBody Student student) {
		String saveStudent = studentService.saveStudent(student);

		return ResponseEntity.ok().body(saveStudent);

	}

	@GetMapping("/student/viewall")
	public ResponseEntity<List<Student>> getAllStudents() {
		return ResponseEntity.ok().body(studentService.getAllStudents());
	}

	@GetMapping("/student/viewstudent/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable int id) {
		return ResponseEntity.ok().body(studentService.getStudentById(id));

	}

	@DeleteMapping("/student/delete/{sid}")
	public ResponseEntity<String> deleteStudentById(@PathVariable int sid) {
		boolean deleteStudent = studentService.deleteStudent(sid);
		String msg = null;
		if (deleteStudent) {
			msg = "Deleted Successfully";
		} else {
			msg = "not deleted";
		}
		return ResponseEntity.ok().body(msg);
	}

	@PutMapping("/student/update/{id}")
	public ResponseEntity<String> updateStudentById(@RequestBody Student stu, @PathVariable("id") int id) {
		boolean updateStudentById = studentService.updateStudentById(stu, id);

		String msg = null;
		if (updateStudentById) {
			msg = "updated Successfully";
		} else {
			msg = "not updated";
		}
		return ResponseEntity.ok().body(msg);
	}

}
