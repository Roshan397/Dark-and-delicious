package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;

@Service
public class UsersService {
	@Autowired
	UsersRepository userRep;
	public Users saveUser(Users l)
	{
		return userRep.save(l);
	}
	public String valideteUser(String email,String password)
	{
		String result=" ";
		Users l=userRep.findByEmail(email);
		if(l==null)
		{
			result="User not found";
		}
		else
		{
			if(l.getPassword().equals(password))
			{
				result="Login success";
			}
			else
			{
				result="Login failed";
			}
		}
		return result;
	}
	public int findbyid( String email)
	{
		int result=0;
		Users l =userRep.findByEmail(email);
		result=l.getId();
		return result;
	}
	public Users find(int id)
	{
		return userRep.findById(id).get();
	}
	public String getem(int id)
	{
		String result="";
		Users l=userRep.findById(id).get();
		result=l.getEmail();
		return result;
	}
	public String getmn(int id)
	{
		String result="";
		Users l=userRep.findById(id).get();
		result=l.getMobilenumber();
		return result;
	}
	public String getun(int id)
	{
		String result="";
		Users l=userRep.findById(id).get();
		result=l.getUsername();
		return result;
	}

}
