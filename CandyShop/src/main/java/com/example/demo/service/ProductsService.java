package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.products;
import com.example.demo.repository.ProductsRepository;
import java.util.*;

@Service
public class ProductsService {
	@Autowired
	ProductsRepository prep;
	public List<products> getall()
	{
		return prep.findAll();
	}

}
