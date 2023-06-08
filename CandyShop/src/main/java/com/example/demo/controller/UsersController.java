package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Users;
import com.example.demo.service.UsersService;

@RestController
@CrossOrigin("http://localhost:3000")
public class UsersController {
	@Autowired
	UsersService userSer;
	@PostMapping("/login")
	public String validateUser(@RequestBody Users u)
	{
		return userSer.valideteUser(u.getEmail(), u.getPassword());
	}
	@GetMapping("/login1/{id}")
	public Users find(@PathVariable int id)
	{
		return userSer.find(id);
	}
	@GetMapping("/getemail/{id}")
	public String getem(@PathVariable int id)
	{
		return userSer.getem(id);
	}
	@GetMapping("/getmobn/{id}")
	public String getmn(@PathVariable int id)
	{
		return userSer.getmn(id);
	}
	@GetMapping("/getuname/{id}")
	public String getun(@PathVariable int id)
	{
		return userSer.getun(id);
	}
	@PostMapping("/login1")
	public int find(@RequestBody Users u)
	{
		return userSer.findbyid(u.getEmail());
	}
	@PostMapping("/signup")
	public Users addDetails(@RequestBody Users u)
	{
		return userSer.saveUser(u);
	}
	@PutMapping("/update")
	public Users update(@RequestBody Users u)
	{
		return userSer.saveUser(u);
	}
}
