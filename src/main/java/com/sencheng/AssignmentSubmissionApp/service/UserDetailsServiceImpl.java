package com.sencheng.AssignmentSubmissionApp.service;

import com.sencheng.AssignmentSubmissionApp.entity.User;
import com.sencheng.AssignmentSubmissionApp.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {


    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> optionalUser = userRepo.findByUsername(username);


        //If a value is present, returns the value, otherwise throws an exception
        return optionalUser.orElseThrow(() ->new UsernameNotFoundException("Invalid credentials"));
    }
}
