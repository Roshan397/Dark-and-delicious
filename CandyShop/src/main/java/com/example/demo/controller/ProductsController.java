package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.products;
import com.example.demo.service.ProductsService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductsController {
	@Autowired
	ProductsService pser;
	@GetMapping(value="/getproducts")
	public List<products> getall()
	{
		return pser.getall();
	}


}
