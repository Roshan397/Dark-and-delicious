package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Bill;
import com.example.demo.repository.BillRepository;

@Service
public class BillService {
	@Autowired
	BillRepository brep;
	public Bill add(Bill b)
	{
		return brep.save(b);
	}
	public List<Bill> getall()
	{
		return brep.findAll();
	}

}
