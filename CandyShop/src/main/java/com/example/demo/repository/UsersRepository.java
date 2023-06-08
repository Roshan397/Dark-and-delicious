package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface UsersRepository extends JpaRepository<Users,Integer>{
	Users findByEmail(String email);

}
