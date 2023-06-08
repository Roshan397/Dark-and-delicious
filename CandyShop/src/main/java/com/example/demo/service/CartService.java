package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.repository.CartRepository;

@Service
public class CartService {
	@Autowired
	CartRepository crep;
	public List<Cart> getall()
	{
		return crep.findAll();
	}
	public Cart add(Cart c)
	{
		return crep.save(c);
	}
	public void deleteall()
	{
		crep.deleteAll();
	}
	

}
