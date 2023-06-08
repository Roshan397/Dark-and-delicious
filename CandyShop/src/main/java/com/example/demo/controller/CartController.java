package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.service.CartService;

@RestController
@CrossOrigin("http://localhost:3000")
public class CartController {
	@Autowired
	CartService cser;
	@GetMapping("/getcart")
	public List<Cart> getall()
	{
		return cser.getall();
	}
	@PostMapping("/additems")
	public Cart add(@RequestBody Cart c)
	{
		return cser.add(c);
	}
	@DeleteMapping("/deletecart")
	public void deleteall()
	{
		cser.deleteall();
	}

}
