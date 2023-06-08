package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.LoggedinId;
import com.example.demo.repository.LoggedinIdRepo;

@Service
public class LoggedinIdService {
	@Autowired
	LoggedinIdRepo lRep;
	public LoggedinId add(LoggedinId l)
	{
		return lRep.save(l);
	}
	public int retid()
	{
		int result=0;
		LoggedinId l=lRep.findById(1);
		result=l.getLoginid();
		return result;
	}
	public void delete()
	{
		lRep.deleteAll();
	}
	}
