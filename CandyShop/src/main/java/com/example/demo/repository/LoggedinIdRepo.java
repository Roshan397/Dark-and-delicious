package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.LoggedinId;

@Repository
public interface LoggedinIdRepo extends JpaRepository<LoggedinId, Integer> {
	LoggedinId findById(int id);

}
