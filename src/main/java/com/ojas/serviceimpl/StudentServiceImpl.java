package com.ojas.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ojas.customizeexceptions.StudentNotFoundExceptions;
import com.ojas.model.Student;
import com.ojas.repo.StudentRepo;
import com.ojas.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {
	@Autowired
	private StudentRepo studentRepo;

	public String saveStudent(Student student) {
		Student save = studentRepo.save(student);
		String msg = null;
		if (save != null)
			msg = "data inserted successfully";
		else {
			msg = "data not inserted";
		}
		return msg;
	}

	public List<Student> getAllStudents() {

		return studentRepo.findAll();
	}

	public Student getStudentById(int id) {
		Student findById = studentRepo.findById(id)
				.orElseThrow(() -> new StudentNotFoundExceptions("StudentNot found at : " + id));

		return findById;

	}

	public boolean deleteStudent(int sid) {
		Student student = studentRepo.findById(sid).get();
		boolean flag = false;
		if (student != null) {
			studentRepo.deleteById(sid);
			flag = true;
		}
		return flag;
	}

	@Override
	public boolean updateStudentById(Student stu, int sid) {
		Student student = studentRepo.findById(sid).get();
		System.out.println(stu);
		boolean flag = false;
		if (student != null) {
			studentRepo.save(stu);
			flag = true;
		}
		return flag;
	}

}
