package com.ojas.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class Student {
	@Id
	@GenericGenerator(name = "myGenerator", strategy = "increment")
	@GeneratedValue(generator = "MyGenerator", strategy = GenerationType.IDENTITY)
	@JsonProperty(value = "id")
	private int sid;
	@JsonProperty(value = "fname")
	private String fname;
	@JsonProperty(value = "lname")
	private String lname;
	@JsonProperty(value = "email")
	private String email;
	@JsonProperty(value = "uname")
	private String userName;
	@JsonProperty(value = "pass")
	private String password;
	@JsonProperty(value = "role")
	private String roles;

}
