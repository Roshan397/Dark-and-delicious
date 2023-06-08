package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoggedinId;
import com.example.demo.service.LoggedinIdService;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoggedinIdController {
	@Autowired
	LoggedinIdService lSer;
	@PostMapping(value="/post")
	public LoggedinId add(@RequestBody LoggedinId l)
	{
		return lSer.add(l);
	}
	@GetMapping(value="/getId")
	public int id()
	{
		return lSer.retid();
	}
	@DeleteMapping(value="/delete")
	public void del()
	{
		lSer.delete(); 
	}

}
