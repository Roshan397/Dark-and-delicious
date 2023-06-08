package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Bill;
import com.example.demo.service.BillService;

@RestController
@CrossOrigin("http://localhost:3000")
public class BillController {
	@Autowired
	BillService bser;
	@PostMapping("/generatebill")
	public Bill add(@RequestBody Bill b)
	{
		return bser.add(b);
	}
	@GetMapping("/getbill")
	public List<Bill> getall()
	{
		return bser.getall();
	}

}
