package com.example.ecommerce.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ecommerce.entity.User;
import com.example.ecommerce.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	public void registerUser(User user) {
		userRepo.save(user);
	}
	
//	public List<User> getUserDetails() {
//		return userRepo.findAll();
//	}
	
	
}
